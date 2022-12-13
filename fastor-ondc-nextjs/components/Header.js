import Image from "next/image";
import Link from "next/link";

// images
import logo from "../public/logo.svg";
import ArrowRight from "../public/arrow-right.svg";
import heroImg from "../public/Image.png";
import Menu from "../public/hamburgerMenu.svg";
import Close from "../public/hamburgerClose.svg";
import ChevronUp from "../public/chevronUp.svg";
import ChevronDown from "../public/chevronDown.svg";
import { useState } from "react";


export default function Header(){

  const [isOpen,setOpen]=useState("false");
  const [dataOpen,setDataOpen]=useState("false");

  const menuClicked=()=>{
    setOpen("true");
    setDataOpen("true");
    document
    .querySelector(".header__hamburger_close")
    .classList.add("show");
  document.querySelector(".header__hamburger_menu").classList.add("hide");
  document.querySelector(".header__nav_mobile").classList.add("show");

 }
const closeMenu=()=>{
  setOpen(!isOpen);
  setDataOpen("false");
  document
  .querySelector(".header__hamburger_close")
  .classList.remove("show");
document
  .querySelector(".header__hamburger_menu")
  .classList.remove("hide");
document.querySelector(".header__nav_mobile").classList.remove("show");

}


console.log(isOpen,dataOpen);
// header drop down
function dropdownHeaderOpen(label){
  if(label==="Products")
  {
  document.querySelector(".products")
  .classList.add("show");

  // own button
  document.querySelector(".chevronOpen")
  .classList.add("hide");
  document.querySelector(".chevronOpen")
  .classList.remove("show"); 
  document.querySelector(".chevronClose")
  .classList.remove("hide");
  document.querySelector(".chevronClose")
  .classList.add("show");
  // others
  
  dropdownHeaderClose("Business");
  dropdownHeaderClose("channel")

  }
  else if (label==="Business"){
  document.querySelector(".business")
  .classList.add("show");
  document.querySelector(".chevronOpen2")
  .classList.add("hide");
  document.querySelector(".chevronOpen2")
  .classList.remove("show"); 

  document.querySelector(".chevronClose2")
  .classList.remove("hide");
  document.querySelector(".chevronClose2")
  .classList.add("show");

  dropdownHeaderClose("Products");
  dropdownHeaderClose("channel")


  }
  else {
  document.querySelector(".channel")
  .classList.add("show");

  document.querySelector(".chevronOpen3")
  .classList.add("hide");
  document.querySelector(".chevronOpen3")
  .classList.remove("show"); 

  document.querySelector(".chevronClose3")
  .classList.remove("hide");
  document.querySelector(".chevronClose3")
  .classList.add("show");

  dropdownHeaderClose("Business");
  dropdownHeaderClose("Products")

  }
}

function dropdownHeaderClose(label){
  if(label==="Products")
  {
  document.querySelector(".products")
  .classList.remove("show");
  document.querySelector(".products")
  .classList.add("hide");

  document.querySelector(".chevronClose")
  .classList.add("hide");
  document.querySelector(".chevronClose")
  .classList.remove("show");
  document.querySelector(".chevronOpen")
  .classList.add("show");

  }
  else if (label==="Business"){
  document.querySelector(".business")
  .classList.remove("show");
  document.querySelector(".business")
  .classList.add("hide");

  document.querySelector(".chevronClose2")
  .classList.add("hide");
  document.querySelector(".chevronClose2")
  .classList.remove("show");
  document.querySelector(".chevronOpen2")
  .classList.add("show");

  }
  else {
  document.querySelector(".channel")
  .classList.add("hide");
  document.querySelector(".channel")
  .classList.remove("show");

  document.querySelector(".chevronClose3")
  .classList.add("hide");
  document.querySelector(".chevronClose3")
  .classList.remove("show");
  document.querySelector(".chevronOpen3")
  .classList.add("show");

  }
}

    return (
      <>
      <div className="header__container">
      <header className="header__inner_container">
        <div className="header__logo_hamburger" for="menu__toggle">
          <Image className="header__logo" src={logo} alt="logo" />
          {/* <Link className="header__mobile_btn" href="https://becho.fastor.ai/">
            <button id="header__btn_id" className="btn btn-primary">
              Get Started
              <Image
                style={{display: "inline-block", marginLeft: "0.5rem"}}
                src={ArrowRight}
                alt="arrow-right"
              /></button>
          </Link> */}
          {/* <!-- uncomment for hamburger/menu --> */}
           <Image
            className="header__hamburger_menu"
            onClick={menuClicked}
            src={Menu}
            alt="Menu"
            width="50"
            height="50"
          />
          
          <Image
            className="header__hamburger_close"
            onClick={closeMenu}
            src={Close}
            alt="Close"
            width="50"
            height="50"
            // style={{display:isOpen?"block":"none"}}
          /> 
        </div>

        <>
        <nav className="header__nav">
          <ul>
          <div className="dropdown">
          <li>
            <Link className="header__menu_item" href="#">Product
            </Link>
          </li>
            <div className="dropdown_container">
            <div className="dropdown_inner_container">
              <div className="page_names"><Link href="./e-store.html" id="e-store" >E-store</Link></div>
              <div className="page_names"><Link href="./payment.html" id="payment" >Payment</Link></div>
              <div className="page_names"><Link href="logistics.html">Logistics</Link></div>
              <div className="page_names"><Link href="./operations.html" id="operations" className="dropdown_page">Operations</Link></div>
              <div className="page_names"><Link href="./salesMarketing.html" className="dropdown_page">Sales & Marketing</Link></div>
              <div className="page_names"><Link href="./qr.html" className="dropdown_page">QR Ordering</Link></div>
              <div className="page_names"><Link href="./ondc.html" className="dropdown_page">ONDC Integration</Link></div>
              <div className="page_names"><Link href="#">Analytics</Link></div>
              <div className="page_names"><Link href="#">Billing</Link></div>
              </div>
            </div>
        </div>            <div className="dropdown">
          <li>
            <Link className="header__menu_item" href="#">Businesses</Link>
          </li>
          <div className="dropdown_container">
          <div className="dropdown_inner_container">
            <div className="page_names"><Link href="./restaurant.html">Restaurant</Link></div>
            <div className="page_names"><Link href="./retail.html">Retail</Link></div>
            <div><Link href="#">QSR</Link></div>
            <div><Link href="#">Takeaway</Link></div>
            <div><Link href="#">Dine-in</Link></div>
            <div><Link href="#">Service</Link></div>
            <div><Link href="#">Entrepreneur</Link></div>
            </div>
          </div>

      </div>            
          <div className="dropdown">
          <li><Link className="header__menu_item" href="#">Channels</Link>
          </li>
          <div className="dropdown_container">
          <div className="dropdown_inner_container">
            <div><Link href="#">Direct</Link></div>
            <div><Link href="#">Reseller</Link></div>
            <div><Link href="#">Marketplan</Link></div>
          </div>
          </div>
        </div>
            
            <li><Link className="header__menu_item" href="#">Pricing</Link></li>
            <li><Link className="header__menu_item" href="#">Learn</Link></li>
            <li><Link className="header__menu_item" href="#">About</Link></li>
            <li>
              <Link href="https://becho.fastor.ai/"
                ><button id="header__btn_id_desktop" className="btn btn-primary">
                  Get Started
                  <Image
                    style={{display: "inline-block", marginLeft: 8}}
                    src={ArrowRight}
                    alt="arrow-right"
                  /></button
              ></Link>
            </li>
          </ul>
        </nav>

        <nav className="header__nav_mobile">
      <div className="header__nav_mobile_main">
      <li className="nav__item dropdown_mobile">
        <Link href="#" className="nav__link dropdown__link">Products
          <Image onClick={()=>dropdownHeaderClose('Products')} src={ChevronUp} alt="up"  className="dropdown__icon chevronClose hide"/>
  
        <Image onClick={()=>dropdownHeaderOpen('Products')} src={ChevronDown} alt="down"  className="dropdown__icon chevronOpen"/></Link>
  
        <ul className="dropdown__menu products">
            <li className="dropdown__item page_names_mobile"><Link href="./e-store.html" className="nav__link">E-store</Link></li>
            <li className="dropdown__item page_names_mobile"><Link href="./payment.html" className="nav__link">Payment</Link></li>
            <li className="dropdown__item page_names_mobile"><Link href="logistics.html" className="nav__link">Logistics</Link></li>
            <li className="dropdown__item page_names_mobile"> <Link href="./operations.html" className="nav__link">Operations</Link></li>
            <li className="dropdown__item page_names_mobile"><Link href="./salesMarketing.html" className="nav__link">Sales & Marketing</Link></li>
            <li className="dropdown__item page_names_mobile"><Link href="./qr.html" className="nav__link">QR Ordering</Link></li>
            <li className="dropdown__item page_names_mobile"><Link href="./ondc.html" className="nav__link">ONDC Integration</Link></li>
        </ul>
    </li>
    <li className="nav__item dropdown_mobile">
      <Link href="#" className="nav__link dropdown__link">Business 
        <Image onClick={()=>dropdownHeaderOpen('Business')} src={ChevronDown} alt="down"  className="dropdown__icon chevronOpen2"/>
        <Image onClick={()=>dropdownHeaderClose('Business')} src={ChevronUp} alt="up"  className="dropdown__icon chevronClose2 hide"/>
      </Link>
      <ul className="dropdown__menu business">
        <li className="dropdown__item page_names_mobile"><Link href="./restaurant.html"className="nav__link">Restaurant</Link></li>
        <li className="dropdown__item page_names_mobile"><Link href="./retail.html" className="nav__link">Retail</Link></li>
        <li className="dropdown__item page_names_mobile"><Link href="#" className="nav__link">QSR</Link></li>
        <li className="dropdown__item page_names_mobile"> <Link href="#" className="nav__link">Takeaway</Link></li>
        <li className="dropdown__item page_names_mobile"><Link href="#" className="nav__link">Dine-in</Link></li>
        <li className="dropdown__item page_names_mobile"><Link href="#" className="nav__link">Service</Link></li>
        <li className="dropdown__item page_names_mobile"><Link href="#" className="nav__link">Entrepreneur</Link></li>
  </ul>
  </li>
  <li className="nav__item dropdown_mobile">
    <Link href="#" className="nav__link dropdown__link">Channels
      <Image onClick={()=>dropdownHeaderClose('channel')} src={ChevronUp} alt="up"  className="dropdown__icon chevronClose3 hide"/>
      <Image onClick={()=>dropdownHeaderOpen('channel')} src={ChevronDown} alt="down"  className="dropdown__icon chevronOpen3"/></Link>
    <ul className="dropdown__menu channel">
      <li className="dropdown__item page_names_mobile"><Link href="#" className="nav__link">Direct</Link></li>
      <li className="dropdown__item page_names_mobile" > <Link href="#" className="nav__link">Reseller</Link></li>
      <li className="dropdown__item page_names_mobile"><Link href="#" className="nav__link">Marketplan</Link></li>
  </ul>
  </li>
  <li className="nav__item"><Link href="#" className="nav__link dropdown__link">Pricing
  <Image src={ChevronDown} alt="down"  className="dropdown__icon"/></Link>
  </li>
  <li className="nav__item"><Link href="#" className="nav__link dropdown__link">Learn
    <Image src={ChevronDown} alt="down"  className="dropdown__icon"/></Link>
    </li>
  <li className="nav__item"><Link href="#" className="nav__link dropdown__link">About
  <Image src={ChevronDown} alt="down"  className="dropdown__icon"/></Link>
  </li>
  </div>
    </nav>
    </>
      </header>
     </div>
      </>
  
   )
}