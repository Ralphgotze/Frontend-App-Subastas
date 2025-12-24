import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  const [auction, setAuctions] = useState<any>();

  interface Bids {
    id: number;
    amount: number,
    auctionId: number,
    userId: number,
    createdAt: string,
    updatedAt: string
  }

  useEffect(() => {
    const getAuction = async () => {
      try {
        const response = await fetch(`${API_URL}/auctions/${auctionId}`);
        if (!response.ok) throw new Error('Error al traer el auction');
        const data = await response.json();
        setBids(data.bids || []);
        setAuctions(data || []);
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
        console.log('actualizado', bid);
        setBids((prevBids) => [...prevBids, bid]);
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
    const userId = await AsyncStorage.getItem('usuario_id');
      fetch(`${API_URL}/auctions/create-bids`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          auctionId: Number(auctionId),
          amount: Number(amount),
          userId: Number(userId)
        }),
      })
    .then(response => {
      if (!response.ok) throw new Error('Puja incorrecta');
        return response.json();
    })
    .catch(error => {
      console.error('Error en crear puja:', error);
    });
  }

  const renderItem = ({ item } : {item:Bids}) => {
    return (
      <View style={styles.bidsContainer}>
        <View>
          <Text>Usuario: {item.userId}</Text>
          <Text>{timeAgo(item.createdAt)}</Text>
        </View>
        <View>
          <Text>${item.amount}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={bids}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListHeaderComponent={() => (
              <View>
              <Text>Subasta {auctionId}</Text>
                <View style={styles.photoContainer}>
                  <View>
                    <Image style={styles.mainImage} source={{ uri: auction?.product.imageUrl }} />
                  </View>
                  <View style={styles.itemImagesContainer}>
                    <Image style={styles.itemImage} source={{ uri: auction?.product.imageUrl }} />
                    <Image style={styles.itemImage} source={{ uri: auction?.product.imageUrl }} />
                    <Image style={styles.itemImage} source={{ uri: auction?.product.imageUrl }} />
                    <Image style={styles.itemImage} source={{ uri: auction?.product.imageUrl }} />
                  </View>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.descriptionText}>Descripción</Text>
                  <Text style={styles.productDescription}>{ auction?.product.description }</Text>
                  <View style={styles.divider} />

                  <View style={styles.infoGrid}>
                    <View style={styles.infoItem}>
                      <Text style={styles.infoLabel}>Condición</Text>
                      <Text style={styles.infoValue}>Excelente</Text>
                    </View>

                    <View style={styles.infoItem}>
                      <Text style={styles.infoLabel}>Categoría</Text>
                      <Text style={styles.infoValue}>Relojes y Joyería</Text>
                    </View>

                    <View style={styles.infoItem}>
                      <Text style={styles.infoLabel}>Precio inicial</Text>
                      <Text style={styles.infoValue}>$1200</Text>
                    </View>

                    <View style={styles.infoItem}>
                      <Text style={styles.infoLabel}>Vendedor</Text>
                      <Text style={styles.infoValue}>Coleccionista Premium</Text>
                    </View>
                  </View>

                </View>
              </View>
            )}
            ListFooterComponent={(
              <View style={styles.amountContainer}>
                <View style={styles.currentBidContainer}>
                  <Text style={styles.currentBidLabel}>Puja actual</Text>
                  <Text style={styles.currentBidValue}>$2500</Text>
                  <Text style={styles.currentBidCount}>24 pujas realizadas</Text>
                </View>

                <Text style={styles.yourBidLabel}>Tu puja (mínimo $2600)</Text>
                <TextInput
                  style={styles.bidInput}
                  placeholder="2600"
                  keyboardType="numeric"
                  placeholderTextColor="#999"
                  value={amount}
                  onChangeText={setAmount}
                />

                <TouchableOpacity style={styles.bidButton} onPress={createBids}>
                  <Text style={styles.bidButtonText}>Realizar Puja</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
    </SafeAreaView >
  );
}
