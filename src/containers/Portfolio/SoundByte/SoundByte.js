import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
// import './SoundByte.scss';
import image1 from './soundbyte_cover.jpg';
import image2 from './soundbyte_hearingbrain.jpg';
import image3 from './soundbyte_interview.jpg';
import image4 from './soundbyte_prototype.jpg';

import Paper from '../../../components/Paper/Paper.js';

export const useStyles = makeStyles(theme => ({
  infoContainer: {
   textAlign: 'center',
   padding:'5em 0em 5em 0em',
   margin: '0 auto 0 auto',
   fontSize: '1em',
  },
  titleImage:{
    minWidth: '50%',
  },
 }));

const SoundByte = () =>{
  const classes = useStyles();
return(
  <div id = 'SoundByte'>
    <Grid xs={8} container direction='column' className={classes.infoContainer}>
      <Paper>
        <Grid item>
          <figure className={classes.titleImage}>
            <img src = {image1} alt = "" ></img>
            <figcaption><i><a href='https://drive.google.com/file/d/1lfJUSzagWEyz3MyCXmyQlaNru7SgwdRf/view' rel="noopener noreferrer" target="_blank">Booklet Link</a></i></figcaption>
          </figure>
         </Grid>
         <Grid item>
            <p>Over 460 million people in the world have disabling hearing loss, and every day people are exposed to dangerous sounds that put their hearing at risk. We want to create a product that both prevents hearing loss and helps those who already have it because we feel that hearing is one of, if not the most important, sense to human beings. It is what connects us, as a social species, to talk, to listen, and to understand.</p>
          </Grid>
          <Grid item>
            <figure>
              <img src = {image2} alt = "" ></img>
              <figcaption><i>Hearing and the Brain Event, by HLAA</i></figcaption>
            </figure>
          </Grid>
          <Grid item>
            <p>Through interviews with construction workers, people with hearing loss, members of the Hearing Loss Association of America (HLAA), and even regular college students, we found potential scenarios and identified our users. For users on the hearing loss spectrum, we want our product to be equal to, if not better than, their current hearing aids. Rick Savadow, a board member of the HLAA, admits his own hearing aid often amplify the rumblings of HVACs and the booms of subway trains, irratating him. We also want to focus on users who frequently experience loud, hazardous noise (construction workers and airport service agents), the current solutions available are big, bulky earmuffs or small, foam earplugs. These two choices could be detrimental to proper communication among workers. We wanted to create a product catered to the needs of our users while also useful to those without hearing loss or not under constant stress of hazardous sounds. We wanted wearable technology our users can effortlessly use all day, like glasses, watches, phones, necklaces, or bracelets.</p>
          </Grid>  
          <Grid item>
            <figure>
              <img src = {image3} alt = "" ></img>
              <figcaption><i>Interviewing Rick</i></figcaption>
            </figure>
          </Grid>
          <Grid item>
              <p>With Google Glass and Apple Watch spearheading the market, the popularity of wearables have exploded over recent years. How do we make these devices more accessible and beneficial to our users? With the Microsoft Inclusive UX Design Challenge for wearable devices, we are able to have a deeper look into this question. Our product focuses on the ears — a “hearable” device to allow users complete control over real-world sounds. Built with smart noise-cancellation and automatic frequency transformation at its core, Soundbyte is our vision of an inclusive product that can parallel as a speech enhancement device for those hard-of-hearing.
              <br/>
              How could pair of smart earbuds be so successful within the wearables market?
              <br/>
              Compared to smart speakers, like the stationary Amazon Echo, earbuds are much more versatile and adaptable to our digital and mobile lives. Smart earbuds also have the powerful benefit of providing a personal AI service without interrupting hand/eye coordination — whereas some smartphones demands attention and constant interaction. The freedom smart earbuds provide can make the simplest tasks easier.
              <br/>
              Currently, earbuds on the market only focus on three distinct functions:
              <br/>
              <ol>
              <li>AI Assistants, like Siri, Alexa, and Google Assistant, are designed with daily routines in mind, helping users with simple tasks like calling or location information online. We can see this function as an extension of smart phones.</li>
              <li>There is a branch of smart earbuds monitoring fitness-related biometrics, such as heart-rate monitors, distance measurements, and speed calculations. Physically active users prefer sport-oriented smart earbuds, like Gear IconX, The Dash Pro, and Trekz Air.</li>
              <li>Real-time translation is a function featured in limited brands of smart earbuds. The Google Pixel Buds can support over 40 languages that highly complementing what we identify as the business context, instead of “daily” and “sport” functions.</li>
              </ol>
              <br/>
              Based on our initial idea of smart noise-cancelling earbuds, we wanted to expand on the three functionalities of regular smart earbuds and to focus on functions of our product feature that can address problems our users often encounter in their daily lives. Soundbyte would partner with an app which would be the main interface of our idea. Users would have the power to quiet, or potentially even mute, uncomfortable noise. Or the app can automatically identify and suppress all hazardous sounds for a quick audio filter to prevent hearing damage. A “transformation” function would be available to those with hearing loss to amplify or lower specific frequencies into their hearing range.</p>
            </Grid>
            <Grid item>
              <figure>
                <img src = {image4} alt = "" ></img>
                <figcaption><i>Hi-fi prototype of earbuds</i></figcaption>
              </figure>
            </Grid>
            <Grid item>
              <p>By using pre-corded audio, we simulated the functions of Soundbyte to help immerse our users in the testing environment. We conducted surveys and research to identify the “pain points” that would discourage users during the prototype testing phase. With their feedback through multiple iterations, we were able to finalize our app interface and design prototype earbuds.</p>
            </Grid>
            <Grid item>
              <p>
              Project instructor: Dana Karwas. Teaching assistant: Will Hsu
              <br/>
              Project members: Frank Wei, <a href='https://delauri.com/' rel="noopener noreferrer" target="_blank">Giuseppe De Lauri</a>, Hung Huynh, <a href='https://tywu.xyz/' rel="noopener noreferrer"  target="_blank">Tianyue Wu</a>, <a href='http://www.yw3367.com/' rel="noopener noreferrer"  target="_blank">Yiping Wang</a>, <a href='https://www.yunzhu-li.com/'  rel="noopener noreferrer"  target="_blank">Yunzhu Li</a>.
              </p>
            </Grid>
    </Paper>
  </Grid>
</div>
)
}

export default SoundByte;
