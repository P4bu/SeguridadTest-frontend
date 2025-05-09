import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const res = await axios.post('http://localhost:9090/api/auth/register-user', {
                name,
                lastname,
                email,
                password
            });
            setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
        } catch (err) {
            setMessage('Error en el registro');
        }
    };

    return (
        <div className="container">
            <h2>Registrarse</h2>
            <input
                className="input"
                placeholder="Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className="input"
                placeholder="Apellido"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
            />
            <input
                className="input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className="input"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button className="button" onClick={handleRegister}>Registrarse</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default RegisterForm;
