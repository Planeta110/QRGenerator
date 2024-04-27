import QRCode from "react-qr-code";

import React from "react";
import { useState } from "react";

function Qrcode ({ url}) {
    return (
        <div>
            <QRCode value={url} />
        </div>
    );
}


export default Qrcode;