import Image from "next/image";
import Link from "next/link";

// images
import logo from "../public/logo.svg";
import ArrowRight from "../public/arrow-right.svg";
// import heroImg from "../public/heroImg.png";


export default function Header(){
    return (
        <div className="header__container">
        <header className="header__inner_container">
          <div className="header__logo_hamburger" for="menu__toggle">
            <Image className="header__logo" src={logo} alt="logo" />
            <Link className="header__mobile_btn" href="https://becho.fastor.ai/">
              <button id="header__btn_id" className="btn btn-primary">
                Get Started
                <Image
                  style={{display: "inline-block", marginLeft: "0.5rem"}}
                  src={ArrowRight}
                  alt="arrow-right"
                /></button>
            </Link>
            {/* <!-- uncomment for hamburger/menu --> */}
            {/* <!-- <img
              className="header__hamburger_menu"
              onclick="menuClicked()"
              src="img/hamburgerMenu.svg"
              alt="hamburgerMenu"
            />
            <img
              className="header__hamburger_close"
              onclick="closeMenu()"
              src="img/hamburgerClose.svg"
              alt="hamburgerClose"
            /> --> */}
          </div>
          <nav className="header__nav">
            <ul>
              <li><Link className="header__menu_item" href="#">Product</Link></li>
              <li><Link className="header__menu_item" href="#">Businesses</Link></li>
              <li><Link className="header__menu_item" href="#">Channels</Link></li>
              <li><Link className="header__menu_item" href="#">Pricing</Link></li>
              <li><Link className="header__menu_item" href="#">Learn</Link></li>
              <li><Link className="header__menu_item" href="#">About</Link></li>
              <li>
                <Link href="https://becho.fastor.ai/"
                  ><button id="header__btn_id_desktop" className="btn btn-primary">
                    Get Started
                    <Image
                      style="display: inline-block; margin-left: 0.8rem"
                      src={ArrowRight}
                      alt="arrow-right"
                    /></button
                ></Link>
              </li>
            </ul>
          </nav>
        </header>
            {/* <!-- hero section --> */}
            {/* <div className="hero__container"> 
                <Image 
                className="hero_image_desktop" 
                src={heroImg} 
                width="auto"
                height="auto"
                alt=""/>
               </div>  */}
      
            {/* <!-- hero section end --> */}
      </div>
  
   )
}