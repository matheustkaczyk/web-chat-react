import { io } from 'socket.io-client';
import Header from '../components/Header';

const Chat = () => {
  const socket = io('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });

  return (
    <>
    <Header />
    <main>
      
    </main>
    </>
  );
}

export default Chat;
