import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connectAuctionsSocket, joinAuctionSocket, leaveAuctionSocket, disconnectAuctionsSocket } from '@/src/sockets/auctions.socket';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuctionDetail() {
  const { auctionId } = useLocalSearchParams<{ auctionId: string }>();

  useEffect(() => {
    if (!auctionId) return;
     const connectSocket = async () => {
      const idStr = await AsyncStorage.getItem('usuario_id');
      if (!idStr) return;
      const userId = Number(idStr);
      const socket = connectAuctionsSocket(userId);
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

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Subasta {auctionId}</Text>
    </View>
  );
}
