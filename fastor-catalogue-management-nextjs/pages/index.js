import Image from "next/image";
import Link from "next/link";

// images
import logo from "../public/logo.svg";
import ArrowRight from "../public/arrow-right.svg";
import heroImg from "../public/hero.png";

// catalogue images
import lineDrawOrangeImg from "../public/lineDrawImg.png";
import catalogueImg from "../public/catalogueImg.png";
import greenTick from "../public/greenTick.png";

// offerings
import lineDrawImgBlue from "../public/lineDrawImgBlue.png";
import offeringsImg from "../public/offeringImg.png";
import macbookImg from "../public/DeviceMacbook.png";
import ManageCatalogue from "../public/ManageCatalogue2.png";


export default function Home(){
   return (
    <>
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
                    style="display: inline-block; margin-left: 0.5rem"
                    src={ArrowRight}
                    alt="arrow-right"
                  /></button
              ></Link>
            </li>
          </ul>
        </nav>
      </header>
            {/* <!-- hero section --> */}
               <div className="hero__container"> 
                <Image 
                className="hero_image_desktop" 
                src={heroImg} 
                width="auto"
                height="auto"
                alt=""/>
               </div> 
      
            {/* <!-- hero section end --> */}
      
    </div>
   
   {/* catalogue section start */}

  <div className="catalogue_main_container">

    <div className="catalogue_header_container">
      <div>
        <h1 className="catalogue_main_title">Catalogue Management</h1>
        <p className="catalogue_main_description">
         Now power up your online business by making shipping easy!
        </p>
      </div>

      <div  className="catalogue_img_line">
      <Image
      src={lineDrawOrangeImg}
      width="auto"
      height="auto"
      alt=""
      />
      </div>

    </div>

{/* catalogue data section start */}
    <section className="catalogue_data_container">
      <div className="catalogue_data_left">
        <Image
          style={{paddingTop:"1.5rem"}}
          src={catalogueImg}
         width="auto"
         height="auto"
         alt=""
        />
      </div>
      <div className="catalogue_data_right">

         <div className="catalogue_data_right_inner_container">
          <Image 
          src={greenTick}
          />
          <p className="catalogue_data_right_description">
            List unlimited products
          </p>
         </div>

         <div className="catalogue_data_right_inner_container">
          <Image 
          src={greenTick}
          />
          <p className="catalogue_data_right_description">
          Post high quality images of your products without worrying about storage
          </p>
         </div>

         <div className="catalogue_data_right_inner_container">
          <Image 
          src={greenTick}
          />
          <p className="catalogue_data_right_description">
          Easily update your catalogue in real-time
          </p>
         </div>

         <div className="catalogue_data_right_inner_container">
          <Image 
          src={greenTick}
          />
          <p className="catalogue_data_right_description">
            Reduce cost of printing and distribution
          </p>
         </div>

         <div className="catalogue_data_right_inner_container">
          <Image 
          src={greenTick}
          />
          <p className="catalogue_data_right_description">
           Increase convenience and accessibility for your customers
          </p>
         </div>

         <div className="catalogue_data_right_inner_container">
          <Image 
          src={greenTick}
          />
          <p className="catalogue_data_right_description">
            Prevent the hassle of sharing individual images with each of your customers
          </p>
         </div>


      </div>
    </section>
    </div>
   {/* catalogue section end */}

   {/* offerings section start */}
     <section className="offerings_main_container">

      <h1 className="offerings_title">Offerings</h1>
      <Image 
      className="offerings_data_img"
      width="auto"
      height="auto"
      alt="offerings data"
      src={offeringsImg}
      />
      <div className="offerings_macbook_container">
      {/* <Image 
      className="offerings_macbook_data_img"
      width="auto"
      height="auto"
      alt="offerings data"
      src={ManageCatalogue}
      />  */}
      </div>     
      <div>
      <Image 
      className="offerings_lineDraw_img"
      width="auto"
      height="auto"
      alt="offerings data"
      src={lineDrawImgBlue}
      />      
      </div>

     </section>

   {/* offerings section end */}
    

    </>
   )
}