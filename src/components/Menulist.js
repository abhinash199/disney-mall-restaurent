import React, { useState } from 'react'
import "./styles/menu.css";

function Menulist(props) {
    const { item } = props;
    const [filter, setfilter] = useState(item);
    const [activeId, setActiveId] = useState();
   
    
    const buttons = [
        {
         
            name: "All",
            value: "all",
            id:1
        },
        {
            name: "burger",
            value: "burger",
            id:2
        },
        {
            name: "pizza",
            value: "pizza",
            id:3
        },
        {
            name: "pasta",
            value: "pasta",
            id:4
        },
        {
            name: "fries",
            value: "fries",
            id:5
        }
    ];


   
    function handleData(val) {
      
      
        const type = val;

        type !== "all"
            ? setfilter(filterFood(type))
            : setfilter(item);
    }
//    function handleClick(params) {
       
//    }

    function filterFood(Type) {
        console.log(item,Type,"inside");
        let filtredfood = item.filter(type => type.category === Type);
        return filtredfood;
    }

    return (
        <>

            <section class="food_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our Menu
                        </h2>
                    </div>

                    <ul class="filters_menu">
                        {console.log(buttons)}
                        {buttons.map((type, index) => (

                            <li  className={activeId === type.id ? "active" : ""}key={index} value={type.value} onClick={()=>{handleData(type.value);setActiveId(type.id)}}>
                                {type.name}
                            </li>

                        ))}
                    </ul>



                    <div class="filters-content">
                        <div class="row">
                            {filter && filter.map((val) => {
                                return (
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="box">
                                            <div>
                                                <div class="img-box">
                                                    <img src={val.img} alt="" />
                                                </div>
                                                <div class="detail-box">
                                                    <h5>
                                                        {val.title}
                                                    </h5>
                                                    <p>
                                                        {val.desc}
                                                    </p>
                                                    <div class="options">
                                                        <h6>
                                                            {val.price}
                                                        </h6>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>



                    {/* <div class="btn-box">
                        <a href="">
                            View More
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Menulist