import React from 'react'
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/About.css";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CountUP from "react-countup";
function About() {
  return (
    <>
      <section>
        <div className='about-banner'>
          <div className='image-container'>
            <img src="http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2016/09/hero_inner_page.jpg" alt="Card image" />
          </div>
          <p className='aboutus-text'>ABOUT US</p>
        </div>

      </section>

      <section className='about-section-second'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-xs-12'>
              <div className='img-container'>
                <img src ='https://templatemonster.vecuro.com/html/foodelio/ltr/assets/img/best-seller/seller-1-1.jpg'/>
              </div>
            </div>
            <div className='col-lg-8 col-md-8 col-xs-12 text-center'>
                 <h2>Best Seller</h2>   
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>      
            </div>

          </div>

        </div>
      </section>


      <section>
        <div class="award1-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <InsertEmoticonIcon sx={{color:"red",fontSize:"2.5rem"}}/>
                  <h2 class="about-counter" data-num="5030"><CountUP start={1000} end={3000} duration={5} /></h2>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <FavoriteBorderIcon sx={{color:"red",fontSize:"2.5rem"}} />
                  <h2 class="about-counter" data-num="2030"><CountUP start={1200} end={2000} duration={5} /></h2>
                  <p>Love People</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <LocalCafeOutlinedIcon sx={{color:"red",fontSize:"2.5rem"}} />
                  <h2 class="about-counter" data-num="3030"><CountUP start={500} end={1000} duration={5} /></h2>
                  <p>Cup Of Coffee</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <MenuBookOutlinedIcon sx={{color:"red",fontSize:"2.5rem"}} />
                  <h2 class="about-counter" data-num="4320"><CountUP end={1000} duration={5} /></h2>
                  <p>Chef Recipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-50 section-sm-top-90 section-sm-bottom-70 chef-desc">
          <div className="container"> 
            <h4 className="font-default text-center">Meet Our Team</h4>
            <p className='desc'>QuickFood’s team is what makes marks us out from other fast food restaurants. Everyone of us, <br className="visible-lg-inline"/> from founders to waiters, is a part of a friendly family, who always welcomes new members!</p>
            <div className="row justify-content-xs-center offset-top-45">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail-variant-2"><img className="img-responsive" src="https://radiustheme.com/demo/html/redchili/redchili/img/team/2.jpg" alt="" width="326" height="330"/>
                  <div className="caption">
                    <h5 className="caption-title text-center">Amanda Stark</h5>
                    <p className="big text-italic text-center">Founder</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 offset-top-50 offset-sm-top-0">
                <div className="thumbnail-variant-2"><img className="img-responsive" src="https://radiustheme.com/demo/html/redchili/redchili/img/team/2.jpg" alt="" width="326" height="330"/>
                  <div className="caption">
                    <h5 className="caption-title text-center">Edward Robinson</h5>
                    <p className="big text-italic text-center">Head Chef</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 offset-top-50 offset-md-top-0">
                <div className="thumbnail-variant-2"><img className="img-responsive" src="https://radiustheme.com/demo/html/redchili/redchili/img/team/2.jpg" alt="" width="326" height="330"/>
                  <div className="caption">
                    <h5 className="caption-title text-center">Rebecca Ives</h5>
                    <p className="big text-italic text-center">Marketing Expert</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About