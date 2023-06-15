import { io } from 'socket.io-client';

export default io('https://web-chat-backend-production.up.railway.app', { transports: ['websocket'] });
