import React from 'react'
import { Carousel, Button } from "react-bootstrap";
import "./styles/homepage.css";
function Homepage() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/background-burgers-home-top.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/background-burgers-home-top.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/background-burgers-home-top.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <section className='section-main'>
                <div className='container'>
                    <h2 className='text-center mt-30'>Tasty and Crunchy</h2>
                    <div className='row'>

                        <div className='food-img col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_1-320x320.jpg' alt='image' />
                            </div>

                            <div className="img-head text-center">
                                <p>Veg Burgers</p>
                                <span>Beetroot water spinach okra water chestnut ricebean pea.</span>
                            </div>
                        </div>
                        <div className=' food-img col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_1-320x320.jpg' alt='image' />
                            </div>
                            <div className="img-head">
                                <p>Veg Burgers</p>
                                <span>Beetroot water spinach okra water chestnut ricebean pea.</span>
                            </div>
                        </div>
                        <div className='food-img col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_1-320x320.jpg' alt='image' />
                            </div>
                            <div className="img-head">
                                <p>Veg Burgers</p>
                                <span>Beetroot water spinach okra water chestnut ricebean pea.</span>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='food-img col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_1-320x320.jpg' alt='image' />
                            </div>

                            <div className="img-head text-center">
                                <p>Veg Burgers</p>
                                <span>Beetroot water spinach okra water chestnut ricebean pea.</span>
                            </div>
                        </div>
                        <div className=' food-img col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_1-320x320.jpg' alt='image' />
                            </div>
                            <div className="img-head">
                                <p>Veg Burgers</p>
                                <span>Beetroot water spinach okra water chestnut ricebean pea.</span>
                            </div>
                        </div>
                        <div className='food-img col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/inner_burger_1-320x320.jpg' alt='image' />
                            </div>
                            <div className="img-head">
                                <p>Veg Burgers</p>
                                <span>Beetroot water spinach okra water chestnut ricebean pea.</span>
                            </div>
                        </div>

                    </div>
                    <div className='viewallmenubtn'>
                        <Button variant="danger">VIEW OUR FULL MENU</Button>
                    </div>
                </div>
            </section>

            <section className='second-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col md-3 col-sm-6 col-xs-3 food-img'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/burger_illustration_1.png' alt='image' />
                            </div>
                            <div className='img-desc'>
                                <p>GRILD'S BURGER</p>
                                <span>THIS IS VER TASTY</span>
                            </div>
                        </div>

                        <div className='col-lg-3 col md-3 col-sm-6 col-xs-12 food-img'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/burger_illustration_1.png' alt='image' />
                            </div>
                            <div className='img-desc'>
                                <p>GRILD'S BURGER</p>
                                <span>THIS IS VER TASTY</span>
                            </div>
                        </div>

                        <div className='col-lg-3 col md-3 col-sm-6 col-xs-12 food-img'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/burger_illustration_1.png' alt='image' />
                            </div>
                            <div className='img-desc'>
                                <p>GRILD'S BURGER</p>
                                <span>THIS IS VER TASTY</span>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 food-img'>
                            <div className='img-container'>
                                <img src='http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/burger_illustration_1.png' alt='image' />
                            </div>
                            <div className='img-desc'>
                                <p>GRILD'S BURGER</p>
                                <span>THIS IS VER TASTY</span>
                            </div>
                        </div>


                    </div>

                </div>

            </section>

            <section className='footer-section'>
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                       <div className='footer-content'>
                             <p>+91-987665454736</p>
                             <p>+91-876654587636</p>

                             <div className='footer-info'>
                                 <img src="https://cdn.dribbble.com/users/1303437/screenshots/3682540/clock_400x300.gif" alt=''/>
                                 <span>
                                     mon-thu: 11.00 – 23.00
                                     sat: 12.00 – 23.00
                                     sun: 12.00 – 21.00
                                 </span>
                             </div>
                       </div>
                     
                      <p></p>
                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-6'>
                      
                     
                      <p></p>
                  </div>

              </div>
            </section>
        </>
    )
}

export default Homepage