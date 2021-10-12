import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, Button, Backdrop, Modal } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  Button:{
    padding: 0,
    margin: 0,
  },
   Modal: {
     position: 'absolute',
     overflowY: 'scroll',
   },
 
}));


const ModalButton = ( props ) => {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    return (
      <React.Fragment>
        <Button className={classes.Button} onClick={()=> setIsOpen(true)}>{props.children}</Button>

        <Modal className={classes.Modal} open={isOpen} onClick={()=>setIsOpen(false)} BackdropComponent={Backdrop}>{props.page}</Modal>
      </React.Fragment>
    )

}

export default ModalButton;
