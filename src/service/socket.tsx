import { io } from 'socket.io-client';

export default io('https://webchatbackendtkaczyk.herokuapp.com/', { transports: ['websocket'] });
