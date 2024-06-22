import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('child');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="child">Criança</option>
        <option value="parent">Pai/Responsável</option>
        <option value="educator">Educador</option>
        <option value="admin">Administrador</option>
      </select>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
