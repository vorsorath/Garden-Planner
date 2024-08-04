import React, { useState } from 'react';
import { auth } from '../services/firebaseConfig';

const UserManagement = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Connexion réussie');
    } catch (error) {
      alert('Erreur de connexion : ' + error.message);
    }
  };

  return (
    <div>
      <h2>Gestion des Utilisateurs</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default UserManagement;