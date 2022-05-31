import { ChangeEvent } from 'react';
import { io } from 'socket.io-client';

import Header from '../components/Header';
import Input from '../components/Input';

const Chat = () => {
  const socket = io('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    
  }

  return (
    <>
    <Header />
    <main>
      <form>
        <ul></ul>
        <Input type="text" placeholder='Digite uma mensagem' onChange={(e) => handleInput(e)}  />
      </form>
    </main>
    </>
  );
}

export default Chat;
