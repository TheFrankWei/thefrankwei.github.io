import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, Button, Backdrop, Modal } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
   Modal: {
     position: 'absolute',
     overflowY: 'scroll',
   }
}));


const ModalButton = ( props ) => {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    return (
      <React.Fragment>
        <Button onClick={()=> setIsOpen(true)}>{props.children}</Button>

        <Modal className={classes.Modal} open={isOpen} onClose={()=>setIsOpen(false)} BackdropComponent={Backdrop}>{props.page}</Modal>
      </React.Fragment>
    )

}

export default ModalButton;
