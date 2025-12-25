import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState, useMemo } from 'react';
import { ScrollView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connectAuctionsSocket, joinAuctionSocket, leaveAuctionSocket, disconnectAuctionsSocket } from '@/src/sockets/auctions.socket';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_URL from '@/server_ip';
import { createStyles } from '@/styles/auctionDetail.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { timeAgo } from '@/src/utils/timeAgo';

export default function AuctionDetail() {
  const styles = createStyles();
  const { auctionId } = useLocalSearchParams<{ auctionId: string }>();
  const [amount, setAmount] = useState('');
  const [bids, setBids] = useState<Bids[]>([]);
  const [auction, setAuction] = useState<any>();
  const lastBidAmount = bids.length ? Math.max(...bids.map(b => b.amount)) : 0;
  const minBid = Math.max(auction?.product.initialPrice || 0, lastBidAmount);

  interface Bids {
    id: number;
    amount: number;
    auctionId: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
  }

  useEffect(() => {
    const getAuction = async () => {
      try {
        const response = await fetch(`${API_URL}/auctions/${auctionId}`);
        if (!response.ok) throw new Error('Error al traer el auction');
        const data = await response.json();
        setBids(data.bids || []);
        setAuction(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAuction();
  }, [auctionId]);

  useEffect(() => {
    if (!auctionId) return;
    const connectSocket = async () => {
      const id = await AsyncStorage.getItem('usuario_id');
      if (!id) return;

      const userId = Number(id);
      const socket = connectAuctionsSocket(userId);

      socket.on('new-bid', (bid) => {
        setBids(prev => [bid, ...prev]);
        setAmount('');
      });

      if(socket.connected) {
        joinAuctionSocket(Number(auctionId))
      } else {
        socket.once('connect', () => {
          joinAuctionSocket(Number(auctionId));
        });
      }
    };

    connectSocket();

    return () => {
      leaveAuctionSocket(Number(auctionId));
      disconnectAuctionsSocket();
    };
  }, [auctionId]);

  const createBids = async () => {
    const bidValue = Number(amount);
    if (!bidValue || bidValue < minBid) {
      alert(`La puja debe ser al menos $${minBid}`);
      return;
    }

    const userId = await AsyncStorage.getItem('usuario_id');
    fetch(`${API_URL}/auctions/create-bids`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auctionId: Number(auctionId),
        amount: bidValue,
        userId: Number(userId),
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Puja incorrecta');
        return res.json();
      })
      .catch(err => console.error('Error en crear puja:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
        >
        <View>
          <View style={styles.photoContainer}>
            <Image style={styles.mainImage} source={{ uri: auction?.product.imageUrls[0] }} />
            <View style={styles.itemImagesContainer}>
              {auction?.product.imageUrls.slice(1).map((url:any, idx:number) => (
                <Image key={idx} style={styles.itemImage} source={{ uri: url }} />
              ))}
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.descriptionText}>Descripción</Text>
            <Text style={styles.productDescription}>{auction?.product.description}</Text>
            <View style={styles.divider} />

            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Condición</Text>
                <Text style={styles.infoValue}>{auction?.product.condition}</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Categoría</Text>
                <Text style={styles.infoValue}>{auction?.product.category?.name}</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Precio inicial</Text>
                <Text style={styles.infoValue}>${auction?.product.initialPrice}</Text>
              </View>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Vendedor</Text>
                <Text style={styles.infoValue}>Coleccionista Premium</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.amountContainer}>
          <View style={styles.currentBidContainer}>
            <Text style={styles.currentBidLabel}>Puja actual</Text>
            <Text style={styles.currentBidValue}>${lastBidAmount || auction?.product.initialPrice}</Text>
            <Text style={styles.currentBidCount}>{bids.length} pujas realizadas</Text>
          </View>

          <Text style={styles.yourBidLabel}>Tu puja (mínimo ${minBid})</Text>
          <TextInput
            style={styles.bidInput}
            placeholder={minBid.toString()}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity style={styles.bidButton} onPress={createBids}>
            <Text style={styles.bidButtonText}>Realizar Puja</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bidsContainer}>
          <Text style={styles.BidsText}>Historial de Pujas</Text>
          {bids.map((item) => (
            <View key={item.id} style={styles.bidsInfoContainer}>
              <Image
                style={styles.userImage}
                source={require('../assets/images/user-bids.png')}
              />

              <View style={styles.bidTextContainer}>
                <Text style={styles.bidUser}>Usuario: {item.userId}</Text>
                <Text style={styles.bidDate}>{timeAgo(item.createdAt)}</Text>
              </View>

              <Text style={styles.bidAmount}>${item.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
