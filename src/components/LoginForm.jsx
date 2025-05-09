import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otpRequested, setOtpRequested] = useState(false);
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:9090/api/auth/login', {
                email,
                password
            });
            setMessage('OTP enviado al correo.');
            setOtpRequested(true); 
        } catch (err) {
            setMessage('Credenciales inválidas');
        }
    };

    const handleOtpVerification = async () => {
        try {
            const res = await axios.post('http://localhost:9090/api/auth/verify-otp', {
                email,
                otp
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            const token = res.data.token;
            localStorage.setItem('jwt', token);
            setMessage('Inicio de sesión exitoso');
        } catch (err) {
            console.log("Error al verificar OTP:", err);
            setMessage('OTP inválido');
        }
    };

    return (
        <div className="container">
            <h2>Iniciar sesión</h2>

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

            {!otpRequested ? (
                <button className="button" onClick={handleLogin}>Enviar OTP</button>
            ) : (
                <>
                    <input
                        className="input"
                        placeholder="OTP"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                    />
                    <button className="button" onClick={handleOtpVerification}>Verificar OTP</button>
                </>
            )}

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default LoginForm;
