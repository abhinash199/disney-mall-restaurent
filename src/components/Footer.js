import React from 'react'
import "./styles/footer.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <footer class="footer_section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 footer-col">
            <div class="footer_contact">
              <h4>
                Contact Us
              </h4>
              <div class="contact_link_box">
                <a href="">
                  <span><LocationOnOutlinedIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px"
                  }} /></span>

                  <span>
                    Location
                  </span>
                </a>
                <a href="">
                  <span><CallOutlinedIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px"
                  }}/></span>
                  <span>
                    Call +01 1234567890
                  </span>
                </a>
                <a href="">
                 <span><EmailOutlinedIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px"
                  }} /></span>
                  <span>
                    demo@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 footer-col">
            <div class="footer_detail">
              <a href="" class="footer-logo">
                Food Zone
              </a>
              <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div class="footer_social">
                <a href="">
                 <span><FacebookOutlinedIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px",
                   color:"#fff"
                  }}/></span>
                </a>
                <a href="">
                <span><TwitterIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px",
                   color:"#fff"
                  }}/></span>
                </a>
                <a href="">
                <span><LinkedInIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px",
                   color:"#fff"
                  }}/></span>
                </a>
                <a href="">
                <span><InstagramIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px",
                   color:"#fff"
                  }}/></span>
                </a>
               
              </div>
            </div>
          </div>
          <div class="col-md-4 footer-col">
            <h4>
              Opening Hours
            </h4>
            <p>
              Everyday
            </p>
            <p>
              10.00 Am -10.00 Pm
            </p>
          </div>
        </div>
        <div class="footer-info">
          <p>
            <CopyrightIcon sx={{
                   fontSize:"24px",
                   marginRight:"5px",
                   color:"#fff"
                  }} /> <span id="displayYear">2022</span> All Rights Reserved By
            <a href="https://html.design/"> free software solution</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer