import React, { useState } from 'react'
import { Styles } from '../components/common/styles/search'
import { useRouter } from 'next/router'
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const SearchResearcher = () => {
  const [searchTerm, setSearchTerm] = useState(null)
  const router = useRouter()

  const styles = {
    display: 'inline',
    width: '30%',
    height: 50,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10,
  }

  const searchHandler = async (e) => {
    e.preventDefault()
    router.push(`/search?q=${searchTerm}`)
  }

   
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Styles>
        <section className="breadcrumbs">
          <div className="">
            <div className="searchForm">
              <div className="course-search">
                <h5>Search Program</h5>
                <form
                  className="row hideForm"
                  id="search-form" 
                  onSubmit={searchHandler}
                  encType="multipart/form-data"
                >
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search eg: bcom"
                  />
                  <button
                    id="basic-addon2"
                    onClick={searchHandler}
                    type="submit"
                  >
                    <i className="las la-search"></i>
                  </button>

                 

              

                </form>

                <div className="apply-btns onMobiledNone">
              
    </div>

                {/* <div className="apply-btns onMobiledNone">
                          {/* <Link  onClick={handleClickOpen}
                            href=""
                          >
                          Apply Now
                          </Link> */}
                          {/* <button className="apply-btns onMobiledNone"  onClick={handleClickOpen} > Apply Now </button> *

                         
                 
                        </div>    */}

                        <script type="text/javascript">var s=document.createElement("script"); 	s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; 	document.body.appendChild(s);</script>


              </div>
            </div>
          </div>
        </section>

        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <button className="closebtn" onClick={handleClose} > x </button>
          <DialogContentText id="alert-dialog-slide-description">
           <div class="npf_wgts" data-height="420px" data-w="1222078993f709a639ec1d6ca2d2d084"></div> 
          </DialogContentText>
        </DialogContent>
      </Dialog>
      
      </Styles>
    </>
  )
}

export default SearchResearcher
