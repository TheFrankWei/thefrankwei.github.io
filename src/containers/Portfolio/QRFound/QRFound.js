import React from 'react';
import './QRFound.scss';
import image1 from './qrfound_login.png';
import image2 from './qrfound_main.png';
import image3 from './qrfound_sharding.png';
import image4 from './qrfound_update.png';

const QRFound = () =>{
return(
  <div className = 'QRFound'>
    <h1>QRFound</h1>
    <p>Webapp allowing users to put QR codes on their devices in order to keep track and locate them if lost</p>
    <br/>
    <h2>Project Preview</h2>



    <figure>
      <img src = {image1} alt = "" ></img>
      <figcaption><i>Main Page</i></figcaption>
    </figure>

    <figure>
      <img src = {image2} alt = "" ></img>
      <figcaption><i>Page displaying user's item, along with the QR code generated -- found items with a QR Code can be scanned, displaying a e-mail form in order for the owner to be contacted</i></figcaption>
    </figure>

    <figure>
      <img src = {image3} alt = "" ></img>
      <figcaption><i>{'PostgreSQL Schema for user sharding -- based off of Instagram\'s sharding mechanism'}</i></figcaption>
    </figure>

    <figure>
      <img src = {image4} alt = "" ></img>
      <figcaption><i>{'Page allowing user to add their items -- User details are also displayed, showing a salted and hashed password'}</i></figcaption>
    </figure>


  </div>
)
}

export default QRFound;
