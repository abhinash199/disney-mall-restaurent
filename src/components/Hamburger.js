
import React, { useState,useRef,useEffect } from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1000;
  display: none;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#000' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 999;
  @media (min-width: 1023px) {
  position:absolute;
  left:110px;
  }
  
  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-left:5px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ open }) => open ? '0 0 0 10000px rgb(0 0 0 / 50%)' : ''};
    
    li {
      color: #000;
    padding: 10px;
    transition: 0.3s ease-in;
    }
    li:hover{
      background:#f8f7f7;;
    }

   
   
  }
`;


createGlobalStyle`
@media (max-width: 1023px) {
  body {
    position:${({ open }) => open ? 'fixed' : ''};
  }
}

`

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const firstmenuRef = useRef();
  const secondmenuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      console.log(open,"open");
      console.log(firstmenuRef.current,"tag");
      console.log(firstmenuRef.current.contains(event.target),"first menu - ul");
      // console.log(secondmenuRef.current.contains(event.target),"second- hamburger");
     if (
        open &&
        firstmenuRef.current &&
        !firstmenuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }else if( open &&
        firstmenuRef.current &&
        firstmenuRef.current.contains(event.target)){
       setOpen(true)
      }
       
     


    });
  }, [open]);
  
  return (
    <>
    
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {/* <RightNav open={open}/> */}



      <Ul open={open} ref={firstmenuRef}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/menu">Menu List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/food">Food</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about-us">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/feedback">Feedback</a>
        </li>
      </Ul>

    </>
  )
}

export default Hamburger