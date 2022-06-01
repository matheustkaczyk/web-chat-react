import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import Button from '../components/Button';

import Header from '../components/Header';
import Input from '../components/Input';


const Chat = () => {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState('');
  const socketClientRef = useRef() as any;
  
  useEffect(() => {
    var socket = io('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });

    socketClientRef.current = socket;
    setConnected(true);
  }, []);

  connected && socketClientRef.current.on('message', (msg: string) => {
    const list = document.getElementById('list_element') as Element;
    console.log(list);
    const li = document.createElement('li');
    li.innerHTML = msg;
    list.appendChild(li);
  })
  
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleClick = () => {
    socketClientRef.current.emit('userMessage', message);
    setMessage('');
  }

  return (
    <>
    <Header />
    <main>
      <ul id='list_element'></ul>
      <form>
        <Input type="text" placeholder='Digite uma mensagem' onChange={(e) => handleInput(e)} value={message}  />
        <Button text='Enviar' type="button" onClick={() => handleClick()} />
      </form>
    </main>
    </>
  );
}

export default Chat;
