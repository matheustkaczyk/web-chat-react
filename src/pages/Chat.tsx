import { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import Button from '../components/Button';

import Header from '../components/Header';
import Input from '../components/Input';
import SideBar from '../components/NavBar';

import socket from '../service/socket';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('Geral');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');

    if (username) {
      setUsername(username);
    } else {
      localStorage.setItem('username', 'Anonymous');
      setUsername('Anonymous');
    }

    socket.emit('room', room);

    socket.on('message', (msg: string) => {
      const list = document.getElementById('list_element') as Element;
      const li = document.createElement('li');
      li.innerHTML = msg;
      list.appendChild(li);
    })
  }, [socket])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleButton = () => {
    const list = document.getElementById('list_element') as Element;
    
    list.scrollTop = list.scrollHeight;
    socket.emit('userMessage', { message, username, room });
    setMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return handleButton();
  };

  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    setRoom((e.target as HTMLSelectElement).value);
    socket.emit('room', (e.target as HTMLSelectElement).value);
  };

  const handleLeave = () => {
    // if (isOpen === false) {
    //   nav.classList.add('open-nav');
    //   setIsOpen(true);
    // } else {
    //   nav.classList.remove('open-nav');
    //   setIsOpen(false);
    // }
  };

  return (
    <>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <SideBar username={username} handleChange={handleSelect} handleLeave={handleLeave} />
    <main>
      <ul id='list_element'/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input type="text" placeholder='Digite uma mensagem' onChange={(e) => handleInput(e)} value={message}  />
        <Button text='Enviar' type="button" onClick={() => handleButton()} />
      </form>
    </main>
    </>
  );
}

export default Chat;
