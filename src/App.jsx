import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav style={{ textAlign: 'center', margin: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </nav>

        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
