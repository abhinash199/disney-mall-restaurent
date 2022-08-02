import React from 'react'
import "./styles/food.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function food() {
    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            768: {
                items: 3
            },
            1023: {
                items: 4
            },

        }
    }
    return (
        <>
            <div class="dishes no-border">
                <div class="container">
                    <div class="row">
                        {/* Title Content Start */}
                        <div class="col-sm-12 heading-top text-center">
                            <h4>Our Popular Dishes</h4>
                            <div class="divider style-1 center">
                                <span class="hr-simple left"></span>
                                <i class="icofont icofont-ui-press hr-icon"></i>
                                <span class="hr-simple right"></span>
                            </div>
                            <p>Lorem ipsum , consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
                        </div>


                        <div class='owl-carousel-section' >
                            <OwlCarousel  {...options}>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>

                                    </a>
                                </div>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>

                                    </a>
                                </div>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>

                                    </a>
                                </div>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>

                                    </a>
                                </div>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>

                                    </a>
                                </div>
                                <div class="box">
                                    <a href="#" className="anchor">
                                        <div className='image-container'>
                                            <img className="img" src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                        </div>
                                        <div class="caption">
                                            <h4>Dish Name Here</h4>
                                            <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                            <p>$100</p>
                                        </div>

                                    </a>
                                </div>

                            </OwlCarousel>
                        </div>


                        {/* <!-- Title Content End --> */}

                    </div>
                </div>
            </div>

            {/* menu llist start */}
            <div class="menu menu-2 gray-bg">
                <div class="menu-inner">
                    <div class="container">
                        <div class="row ">

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
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">

                                            <div class="image">
                                                <img src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-sm-6 col-12">

                                        <div class="box">
                                            <div class="image">
                                                <img src="https://www.spheretheme.com/html/steam/assets/images/our-menu/01.jpg" alt="image" title="image" class="img-responsive" />
                                            </div>
                                            <div class="caption">
                                                <h4>Food Title Here</h4>
                                                <p class="des">Cursus / Dictum / Risus</p>
                                                <span>Lorem ipsum is simply dummy text of the printing and type setting industry.</span>
                                                <div class="price">&#8377;35.00</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default food