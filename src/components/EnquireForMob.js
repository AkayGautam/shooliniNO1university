import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import Image from "next/legacy/image";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EnquireForMob() {


 useEffect(() => {

  var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 


  var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 


 }, [])
 
  
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen_one = () => {
    setOpens(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose_one = () => {
    setOpens(false);
  };
  return (
    <div className="modEnq">
      {/* <Button className="play-buttonC Instagram enqForMob" onClick={handleClickOpen}>
      <div class="sticky-icon">
      <Image  width={23}  height={25}  src="/assets/icons/practice.png" alt="practice" />
   <span className="icnName">Apply  </span>
   </div>
      </Button> */}

{/* <div onClick={handleClickOpen} class="sticky-icons">
 <Image  class="Instagrams"   width={23}  height={25}  src="/assets/icons/practice.png" alt="practice" />
   <span className="icnName">Apply  </span>
  
   </div>

   <div onClick={handleClickOpen_one} class="sticky-icons">
 <Image  class="Instagrams"   width={23}  height={25}  src="/assets/icons/brochure.png" alt="practice" />
   <span className="icnName">Brochure  </span>
  
   </div> */}



      <a
        className="desNone"
        target="_blank"
        href="https://admissions.shooliniuniversity.com/?utm_source=Organic&utm_medium=Enquirenow&utm_campaign=Enquirenow"
        rel="noreferrer"
      >
        <BsFillChatLeftDotsFill /> Enquire Now
      </a>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div class="npf_wgts" data-height="350px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>


      <Dialog
        open={opens}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose_one}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
         
          <DialogContentText id="alert-dialog-slide-description">
          <div class="npf_wgts" data-height="400px" data-w="d095e55a1f298e67da8279133413215f"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </div>
  );


  
}
