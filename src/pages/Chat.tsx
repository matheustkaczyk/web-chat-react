import { ChangeEvent, useState, useEffect } from 'react';
import Button from '../components/Button';

import Header from '../components/Header';
import Input from '../components/Input';

import socket from '../service/socket';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');

    if (username) {
      setUsername(username);
    } else {
      localStorage.setItem('username', 'Anonymous');
      setUsername('Anonymous');
    }

    socket.on('message', (msg: string) => {
      const list = document.getElementById('list_element') as Element;
      const li = document.createElement('li');
      li.innerHTML = msg;
      list.appendChild(li);
    })
  }, [socket])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleClick = () => {
    socket.emit('userMessage', { message, username });
    setMessage('');
  }

  return (
    <>
    <Header />
    <main>
      <ul id='list_element'/>
      <form>
        <Input type="text" placeholder='Digite uma mensagem' onChange={(e) => handleInput(e)} value={message}  />
        <Button text='Enviar' type="button" onClick={() => handleClick()} />
      </form>
    </main>
    </>
  );
}

export default Chat;
