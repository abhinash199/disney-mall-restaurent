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
      <section>
        <div class="award1-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <InsertEmoticonIcon />
                  <h2 class="about-counter" data-num="5030"><CountUP start={1000} end={3000} duration={5} /></h2>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <FavoriteBorderIcon />
                  <h2 class="about-counter" data-num="2030"><CountUP start={1200} end={2000} duration={5} /></h2>
                  <p>Love People</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <LocalCafeOutlinedIcon />
                  <h2 class="about-counter" data-num="3030"><CountUP start={500} end={1000} duration={5} /></h2>
                  <p>Cup Of Coffee</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="award1-area-box">
                  <MenuBookOutlinedIcon />
                  <h2 class="about-counter" data-num="4320"><CountUP end={1000} duration={5} /></h2>
                  <p>Chef Recipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='chef-section'>
        <div className='container'>
          <div className='row'>
            <div class="col-sm-12 col-12 commontop text-center">
              <h4>Breakfast Menu</h4>
              <div class="divider style-1 center">
                <span class="hr-simple left"></span>
                <i class="icofont icofont-ui-press hr-icon"></i>
                <span class="hr-simple right"></span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
            </div>




            <div class="col-sm-12 col-12">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">

                  <div class="chef">

                    <div class="chef-image">
                      <img src="https://radiustheme.com/demo/html/redchili/redchili/img/team/2.jpg" alt="image" title="image" class="img-responsive" />
                      <h4><span>Jonh</span></h4>
                      <div class="overlay">

                        <p class="des">Cursus / Dictum / Risus</p>

                      </div>
                    </div>

                  </div>

                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">

                  <div class="chef">

                    <div class="chef-image">
                      <img src="https://radiustheme.com/demo/html/redchili/redchili/img/team/2.jpg" alt="image" title="image" class="img-responsive" />
                      <h4><span>Mack</span></h4>

                      <div class="overlay">

                        <p class="des">Cursus / Dictum / Risus</p>

                      </div>
                    </div>
                  </div>

                </div>



                <div class="col-lg-4 col-md-6 col-sm-6 col-12">

                  <div class="chef">

                    <div class="chef-image">
                      <img src="https://radiustheme.com/demo/html/redchili/redchili/img/team/2.jpg" alt="image" title="image" class="img-responsive" />
                      <h4><span>Mike</span></h4>

                      <div class="overlay">

                        <p class="des">Cursus / Dictum / Risus</p>

                      </div>
                    </div>
                  </div>

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