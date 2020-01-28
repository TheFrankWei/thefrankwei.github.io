import React from 'react';
import './LittleEinstein.scss';
import image1 from './littleeinstein_main.png';
import image2 from './littleeinstein_mindmap.png';
import image3 from './littleeinstein_cardsorting.png';
import image4 from './littleeinstein_userpersona.png';
import image5 from './littleeinstein_paperproto.png';
import image6 from './littleeinstein_interactive.png';

const LittleEinstein = () =>{
return(
  <div className = 'LittleEinstein'>

    <figure>
      <img src = {image1} alt = "" ></img>
  
    </figure>

    <p>Prompt:
      <br/>
      Little Einstein is a new online retailer of curated and innovative learning kits for kids. It was formerly a beloved shop in Park Slope Brooklyn that sold all types of DIY kits (both analog and digital), but the storefront was too expensive and the shop closed in 2012.  The owner wants to convert the store to online only and the owner (Alberta) now wants to focus her inventory on technology and electronics products geared towards kids ages 4 - 15. The primary goal for Little Einstein is to become the #1 resource for parents that want to incorporate hands on STEAM (Science, Technology, Engineering, Math, Art + Design) education into their child’s everyday learning experience. The brand of Little Einstein celebrates learning while allowing kids to experiment and play with technology. The new online store will reflect the STEAM focused Philosophy of Littler Einstein by featuring new, innovative products, while at the same time maintaining a playful and creative vibe that was found in the store. The new website should inspire parents to spend money and feel like they made a good investment on a toy that will give the gift of learning.
      <br/>
      When beginning this project, our group wanted to focus on incorporating the personal experience customers originally had with Alberta, trying to find solutions in order to incorporate such interactions digitally. We used processes such as mind-mapping and card sorting in order to develop our ideas:
    </p>

    <figure>
      <img src = {image2} alt = "" ></img>
      <figcaption><i>Mind-mapping of the Little Einstein website</i></figcaption>
    </figure>

    <figure>
      <img src = {image3} alt = "" ></img>
      <figcaption><i>Card sorting of potential products for the site</i></figcaption>
    </figure>

    <p>Next, we created a few user personas and a paper prototype in order to test our ideas:</p>

    <figure>
      <img src = {image4} alt = "" ></img>
      <figcaption><i>One of the user personas our team created</i></figcaption>
    </figure>

    <figure>
      <img src = {image5} alt = "" ></img>
      <figcaption><i>Paper prototype for Little Einstein Website</i></figcaption>
    </figure>

    <p>Through user feedback and testing, we created an improved interactive prototype:</p>

    <figure>
      <img src = {image6} alt = "" ></img>
      <figcaption><i>Interactive prototype</i></figcaption>
    </figure>

    <p>
    Project instructor: Dana Karwas. Teaching assistant: Will Hsu
    <br/>
    Project members: Frank Wei, Jimmy Lauchoy, Angela Zhang
    </p>

  </div>
)
}

export default LittleEinstein;
