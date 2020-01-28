import React from 'react';
import './LiftSpotter.scss';
import image1 from './liftspotter_login.png';
import image2 from './liftspotter_addroutine.png';
import image3 from './liftspotter_addworkout.png';
import image4 from './liftspotter_account.png';
import image5 from './liftspotter_community.png';

const LiftSpotter = () =>{

return(
  <div className = 'LiftSpotter'>
    <h1>LiftSpotter</h1>
    <p>Webapp allowing users to create workout routines and share them with the community</p>

    <h2>Project Preview</h2>
    <br/>

    <figure>
      <img src = {image1} alt = "" ></img>
      <figcaption><i>Login Page</i></figcaption>
    </figure>

    <figure>
      <img src = {image2} alt = "" ></img>
      <figcaption><i> Page to add routines</i></figcaption>
    </figure>

    <figure>
      <img src = {image3} alt = "" ></img>
      <figcaption><i>Page to add workouts to one's routine</i></figcaption>
    </figure>

    <figure>
      <img src = {image4} alt = "" ></img>
      <figcaption><i>Users can choose whether or not to share their routine with other users</i></figcaption>
    </figure>

    <figure>
      <img src = {image5} alt = "" ></img>
      <figcaption><i> Users can view others' routines on the community page</i></figcaption>
    </figure>


  </div>
)
}

export default LiftSpotter;
