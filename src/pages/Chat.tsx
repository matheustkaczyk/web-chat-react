import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import Button from '../components/Button';

import Header from '../components/Header';
import Input from '../components/Input';


const Chat = () => {
  const [message, setMessage] = useState('');
  const socketClientRef = useRef() as any;
  
  useEffect(() => {
    var socket = io('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });

    socketClientRef.current = socket;
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleClick = () => {
    socketClientRef.current.emit('message', message);
    setMessage('');
  }

  return (
    <>
    <Header />
    <main>
      <form>
        <ul></ul>
        <Input type="text" placeholder='Digite uma mensagem' onChange={(e) => handleInput(e)} value={message}  />
        <Button text='Enviar' type="button" onClick={() => handleClick()} />
      </form>
    </main>
    </>
  );
}

export default Chat;
