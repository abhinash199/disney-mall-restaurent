import React from 'react'
import {Navbar,Container,NavDropdown,Nav,} from "react-bootstrap"
function Header() {  
  return (
   <>
<nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu List</a>
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
       
       
       
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Header