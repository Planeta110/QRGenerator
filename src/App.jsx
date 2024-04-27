import { useState } from 'react'
import QRCode from "react-qr-code";
import './App.css'
import Qrcode from './components/general/qrcode.jsx';
import Home from './components/general/home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App
