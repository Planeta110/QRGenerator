import React, { useEffect, useState } from "react";
import Qrcode from "./qrcode.jsx";

function Home() {
    const [urlsec, setUrlsec] = useState('planeta110.github.io');
    


    const generarqr = () => {
        const inputUrl = document.querySelector('.urldas').value;
        setUrlsec(inputUrl);
    }






    return (
        <div className="Home">
            <div className="qrcodes">
                <Qrcode url={urlsec} />
            </div>
            <div>
                <input type="text" className="urldas" placeholder="Ingresa una url."/>
                
            </div>
            <div className="generarbuttone">
                <button className="generarbuttone2" onClick={generarqr} >Generar</button>
            </div>
        </div>
    );
}

export default Home;
