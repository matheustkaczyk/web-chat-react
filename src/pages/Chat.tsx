import { io } from 'socket.io-client';

const Chat = () => {
  const socket = io('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
}

export default Chat;
