import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import image1 from './oneplaylist_get.png';
import image2 from './oneplaylist_mapping.png';
import Paper from '../../../components/Paper/Paper.js';

export const useStyles = makeStyles(theme => ({
  infoContainer: {
   textAlign: 'center',
   padding:'5em 0em 5em 0em',
   margin: '0 auto 0 auto',
   fontSize: '1em',
  }
 }));

const OnePlaylist = () =>{
  const classes = useStyles();

return(
  <div id = 'OnePlaylist'>
    <Paper>
    <h1>OnePlaylist (WIP)</h1>
    <p>CRUD webapp using AWS services and Node.js being made to help me learn and practice using AWS while I look for a job. Allows users to add songs onto the site to create one giant music playlist.

    <h2>Project Preview</h2>
    <br/>
    <ul>
    Finished:
    <li>Post, Get, Delete methods on API Gateway with working integration request/ integration response mapping templates connecting to AWS Lambda</li>
    <li>AWS Lambda functions that connect with DynamoDB allowing inputted values to be correctly stored</li>
    <li>Created roles on IAM with specific policies (role for POST can only write data into dynamo db, DELETE can only remove, etc).</li>
    To Do:
    <li>Learn and integrate Amazon S3 </li>
    <li>Implement Amazon Cognito for authenticated users</li>
    <li>Use Spotify API to be able to convert playlist into a Spotify playlist</li>
    </ul>
    </p>

    <figure>
      <img src = {image1} alt = "" ></img>
      <figcaption><i></i></figcaption>
    </figure>

    <figure>
      <img src = {image2} alt = "" ></img>
      <figcaption><i></i></figcaption>
    </figure>
    </Paper>
  </div>
)
}

export default OnePlaylist;
