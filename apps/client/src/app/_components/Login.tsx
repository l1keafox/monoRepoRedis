"use client";

import { useState } from 'react';
import { login } from '@/actions/authenticate';
export interface LoginProps{
}

export function Login({}:LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
    const userData = await login(username, password);
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <label className="mb-2">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 rounded w-64  text-black" />
      </label>
      <label className="mb-2">
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded w-64  text-black" />
      </label>
      <input type="submit" value="Login" className="bg-blue-500 text-white p-2 rounded cursor-pointer" />
    </form>
  );
}