import { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import Button from '../components/Button';

import Header from '../components/Header';
import Input from '../components/Input';
import SideBar from '../components/NavBar';

import socket from '../service/socket';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

  const handleButton = () => {
    socket.emit('userMessage', { message, username });
    setMessage('');
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return handleButton();
  }

  const handleSelect = () => {

  }

  return (
    <>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <SideBar username={username} handleChange={handleSelect} />
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
