import { io, Socket } from 'socket.io-client';
import API_URL from '@/server_ip';

let socket: Socket | null = null;

export function connectAuctionsSocket(userId: number) {
  if (socket) return socket;

  socket = io(`${API_URL}/auctions`, {
    transports: ['websocket'],
    auth: { userId },
  });

  socket.on('connect', () => {
    console.log('CONNECTED TO AUCTIONS, socket id:', socket?.id);
  });

  socket.on('connect_error', (err) => {
    console.log('SOCKET CONNECT ERROR:', err.message);
  });

  socket.on('disconnect', (reason) => {
    console.log('DISCONNECTED FROM AUCTIONS, reason:', reason);
  });

  return socket;
}

export function joinAuctionSocket(auctionId: number) {
  socket?.emit('auction:join', {auctionId})
  console.log('CONECTADO A LA SALA', auctionId);
}

export function leaveAuctionSocket(auctionId: number) {
  socket?.emit('auction:leave', {auctionId})
  console.log('SALIENDO DE LA SALA', auctionId);
}

export function disconnectAuctionsSocket() {
  if (socket) {
    console.log('DESCONECTANDO DEL NAMESPACE /auctions');
    socket.disconnect();
    socket = null;
  }
}
