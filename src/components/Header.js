// import React,{useState} from 'react'
// import { Navbar, Container, NavDropdown, Nav, } from "react-bootstrap"
// import styled from 'styled-components';
// import RightNav from './RightNav';
// import Hamburger from "./Hamburger";
// function Header() {
//   const [open, setOpen] = useState(false)
//   return (
//     <>
//       {/* <nav class="navbar navbar-expand-lg bg-light fixed-top">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/menu">Menu List</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/food">Food</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/about-us">About us</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">services</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/feedback">Feedback</a>
//         </li>



//       </ul>

//     </div>
//   </div>
// </nav> */}









//       <Nav>
//         <div className="logo">
//           Nav Bar
//         </div>
//         <Hamburger/>
//       </Nav>
//     </>
//   )
// }

// export default Header







import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Header = () => {
  return (

    <Nav>
  <div className="logo">
           Nav Bar
        </div>


      <Hamburger />
    </Nav>
  )
}

export default Header