import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
import mobileOffering from "../public/mobileOffering.svg";
// import offeringsImg from "../public/offeringImg.png";
import offeringsImg from "../public/offerings.svg";
import macbookImg from "../public/DeviceMacbook.png";
import ManageCatalogue from "../public/ManageCatalogue2.png";

// reviews
import reviewsUP from "../public/reviewsUP.svg"
import reviewsDown from "../public/reviewsDown.svg"

import reviewsBg from "../public/reviewsBg.png";
import reviews1 from "../public/reviews1.png";
import reviews2 from "../public/reviews2.png";
import reviews3 from "../public/reviews3.png";
import reviews4 from "../public/reviews4.png";
import reviews5 from "../public/reviews5.png";
import reviews6 from "../public/reviews6.png";
import reviews7 from "../public/reviews7.png";
import { useState } from "react";

// footer
import fetureIcon1 from "../public/fetureIcon1.svg";
import fetureIcon2 from "../public/fetureIcon2.svg";
import fetureIcon3 from "../public/fetureIcon3.svg";
import fetureIcon4 from "../public/fetureIcon4.svg";
import fetureIcon5 from "../public/fetureIcon5.svg";
import fetureIcon6 from "../public/fetureIcon6.svg";
import fetureIcon7 from "../public/fetureIcon7.svg";
import fetureIcon8 from "../public/fetureIcon8.svg";
import fetureIcon9 from "../public/fetureIcon9.svg";

import FaqPlus from "../public/faqPlusImg.svg";

import footerContact from "../public/footerContact.svg";
import contactDown from "../public/contactDown.svg";
import thankyouImg from "../public/thankyouImg.svg"
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import Linkedin from "../public/Linkedin.svg";
import Twitter from "../public/Twitter.svg";
import footerUp from "../public/footerUp.svg";

export default function Home(){

  const onChange=() =>{
    document.getElementById("errortext").style = "display:none";
    validate();
  }

  const validate=()=> {
    const phone_number = document.getElementById("phone_number").value;

    if (!phone_number) {
      showError("Phone number is required");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone_number)) {
      showError(
        "Phone number is incorrect. please fill the correct details"
      );
      return;
    }
    return true;
  }
  const showError=(text)=> {
    document.getElementById("errortext").style = "display:block;color:red";
    document.getElementById("errortext").innerText = text;
  }
  const thankyou=()=> {
    // show thank you message
    document
      .querySelector(".footer__contact_success")
      .classList.remove("hide");
    document
      .querySelector(".footer__contact_success")
      .classList.add("show_flex");
    // hide form
    document
      .getElementById("footer__contact_form_container_id")
      .classList.add("hide");
  }

const formSubmit=(e)=>{
  e.preventDefault();
  let queryParams = new URLSearchParams(window.location.search);

  const phone_number = document.getElementById("phone_number").value;
  const utm_source = queryParams.get("utm_source");
  const utm_medium = queryParams.get("utm_medium");

  if (!validate()) return;
  const submit_btn_text = document.getElementById(
    "footer__contact_button_id"
  );
  submit_btn_text.innerText = "Submitting...";
  console.log("form submitting");
  return fetch("https://staging.fastor.in/fastorform", {
    method: "POST",
    body: JSON.stringify({
      form_id: "fastor_landing_page_form",
      mobile: phone_number,
      utm_source: utm_source || "none",
      utm_medium: utm_medium || "none",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((data) => data.status == "Success" && thankyou())
    .catch((err) => {
      console.log("error", err);
      showError("Something went wrong. Please try again later");
    })
    .finally(() => {
      submit_btn_text.innerText = "Submit";
    });
}

  const reviewsArr=[
    {
      image:"../public/reviews1.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic",
      sub_title:"IT Consultant"
    },
    {
      image:"../public/reviews2.png", 
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic 2",
      sub_title:"IT Consultant"
    },    
    {
      image:"../public/reviews3.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic 3",
      sub_title:"IT Consultant"
    },  
    {
      image:"../public/reviews4.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic 4",
      sub_title:"IT Consultant"
    },    
    {
      image:"../public/reviews5.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic 5",
      sub_title:"IT Consultant"
    },    
    {
      image: "../public/reviews6.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic 6",
      sub_title:"IT Consultant"
    },    
    {
      image:"../public/reviews7.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
      title:"James Jokovic 7",
      sub_title:"IT Consultant"
    }
  ]

      const [reviewsProfile,setProfile]=useState(reviewsArr);

      const handleProfileIndex=()=>{
        let arr=[...reviewsProfile];
         let prev=arr.shift();
         arr.push(prev);
         setProfile(arr);
      }


   return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
      rel="stylesheet"
  />
    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>

    </Head>
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
           {/* <img
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
          />  */}
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
      
    </div>
                {/* <!-- hero section --> */}
                <div class="hero_main_container">
                <div className="hero__container"> 
                <Image 
                className="hero_image_desktop" 
                src={heroImg} 
                width="auto"
                height="auto"
                alt=""/>
               </div> 
               </div>
      
            {/* <!-- hero section end --> */}

   
   {/* catalogue section start */}

  <div className="catalogue_main_container">

      <div class="operations_header_container">
          <div class="data"> 
            <h1 class="operations_main_title">Catalogue Management</h1>
            <p class="operations_main_description">
            Now power up your online business by making shipping easy!
            </p>
          </div>
        <div class="bg">
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
      className="offerings_data_img desktop_offering"
      width="auto"
      height="auto"
      alt="offerings data"
      src={offeringsImg}
      />
      <div className="offerings_macbook_container">
      <Image 
      className="offerings_macbook_data_img desktop_offering"
      width="auto"
      height="auto"
      alt="offerings data"
      src={macbookImg}
      /> 
      </div>
      
      <div>
        <Image
        class="mobile_offering"
        width="auto"
        height="auto"
        src={mobileOffering}
        />
      </div>
     
      <div>
      <Image 
      className="offerings_lineDraw_img "
      width="auto"
      height="auto"
      alt="offerings data"
      src={lineDrawImgBlue}
      />      
      </div>

     </section>

   {/* offerings section end */}
    
{/* reviews secrion start */}
   <section className="reviews_main_container">
   <Image style={{width: "100%", marginBottom: "-5rem"}} src={reviewsUP} alt=""/>
     <div className="reviews_inner_container">
       <h1 className="reviews_title">What people say about Us.</h1>

       <div className="reviews_data_container">

        <div className="reviews_data_left_container">
        <Image className="reviewsImg" 
        id="reviews_img_1"
        width="73"
        height="73"
        alt="1"
        src={`/${reviewsProfile[1].image}`}
        />
        <Image className="reviewsImg" id="reviews_img_2"
        width="96"
        height="96"
        alt="2"
        src={`/${reviewsProfile[2].image}`}
        />
        <Image className="reviewsImg" id="reviews_img_3"
        width="87"
        height="87"
        alt="3"
        src={`/${reviewsProfile[3].image}`}
        />
        </div>
        <div className="reviews_data_middle_container">
          <Image className="reviewsImg" id="reviews_img_0"
        width="100"
        height="100"
        alt="1"
        src={`/${reviewsProfile[0].image}`}
        />
          <p className="reviews_data_description">
            {reviewsProfile[0].description}
          </p>
          <p className="reviews_data_title">
          {reviewsProfile[0].title}
          </p>
          <p className="reviews_data_sub_title">
          {reviewsProfile[0].sub_title}
          </p>
          <div className="reviews_dots_container">
              <span className="dot" onClick={handleProfileIndex}></span>
              <span className="dot" onClick={handleProfileIndex}></span>
              <span className="dot" onClick={handleProfileIndex}></span>
              <span className="dot" onClick={handleProfileIndex}></span>
          </div>
        </div>
        <div className="reviews_data_right_container">
        <Image className="reviewsImg" id="reviews_img_4"
        width="65"
        height="65"
        alt="1"
        src={`/${reviewsProfile[4].image}`}
        />
        <Image className="reviewsImg" id="reviews_img_5"
        width="89"
        height="89"
        alt="1"
        src={`/${reviewsProfile[5].image}`}
        />
        <Image className="reviewsImg" id="reviews_img_6"
        width="77"
        height="77"
        alt="1"
        src={`/${reviewsProfile[6].image}`}
        />
        </div>
       </div>

     </div>
     <Image style={{width: "100%", marginTop: "-1.5rem"}} src={reviewsDown} alt=""/>
   </section>
{/* reviews section end */}

            {/* <!-- features section --> */}
            <div className="features__container">
        <h1 className="features__title">You Name It, We Have It!</h1>
        <p className="features__description">
          Everything your Online Business needs...
        </p>
        <div className="features__card_container">
          {/* <!-- first row --> */}
           <div className="features__row">
                <div className="features__card">
                <Image  className="features__card_img" src={fetureIcon1} 
                 
                alt="feature"/>
                <h3 className="features__card_title">QR Ordering</h3>
              </div>
              <div className="features__card">
                <Image  className="features__card_img" src={fetureIcon2} alt="feature"/>
                <h3 className="features__card_title">Payments</h3>
              </div>
              <div className="features__card">
                <Image  className="features__card_img" src={fetureIcon3} alt="feature"/>
                <h3 className="features__card_title">POS</h3>
              </div>
              <div className="features__card">
                <Image className="features__card_img" src={fetureIcon4} alt="feature"/>
                <h3 className="features__card_title">Logistics</h3>
              </div>
            </div>

            
            <div className="features__row">
               <div className="features__card">
                 <Image className="features__card_img" src={fetureIcon5} alt="feature"/>
                 <h3 className="features__card_title">Online Store</h3>
               </div>
               <div className="features__card">
                 <Image className="features__card_img" src={fetureIcon6} alt="feature"/>
                <h3 className="features__card_title">Online Ordering</h3>
               </div>
               <div className="features__card">
                 <Image className="features__card_img" src={fetureIcon7} alt="feature"/>
                 <h3 className="features__card_title">Catalogue</h3>
               </div>
           </div>
           

          {/* <!-- third row --> */}
          <div className="features__row">
            <div className="features__card">
              <Image className="features__card_img" src={fetureIcon8} alt="feature"/>
              <h3 className="features__card_title">Offers &amp; Coupons</h3>
            </div>
            <div className="features__card">
              <Image className="features__card_img" src={fetureIcon9} alt="feature"/>
              <h3 className="features__card_title">Custom Domain</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- features section end --> */}


      {/* <!--faq section start--> */}
      <div className="faq__main_container">
      <h3 className="faq_title">FAQ</h3>
      <div className="faq__inner_container">
        <div className="faq__card_container">
          <div className="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div className="faq__card_container">
          <div className="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div className="faq__card_container">
          <div className="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div className="faq__card_container">
          <div className="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div className="faq__card_container">
          <div className="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div className="faq__card_container">
          <div className="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        
      </div>
    </div>
    {/* <!--faq section end--> */}


<section id="form-section">
      <div className="footer__contact_container"
      style={{background:`url(${contactDown})`}}
      >
        <div className="custom_container flex_center">
          <div className="footer__contact_left">
            <Image width="70%" src={footerContact} alt="footerContact"/>
          </div>
          <div className="footer__contact_right">
            <div id="footer__contact_form_container_id" className="footer__contact_form_container">
              <h2>
                Our Experts manage your store, so that you focus on growing your
                business
              </h2>
              <div style={{position: "relative"}}>
                <div className="footer__contact_inputField">
                  <form id="footer__contact_input_id" style={{display: "flex",gap: "1rem"}} action="#">
                    <div className="footer_single_input">
                      <p className="footer__country_code">+91</p>
                      <input id="phone_number" type="tel" placeholder="Enter Contact Number" maxLength="10" minLength="10" onChange={onChange} 
                      onkeyup="this.value = this.value.replace(/[^0-9]/g, '')" required=""/>
                    </div>
                    <button id="footer__contact_button_id" type="submit" className="btn btn-primary" onClick={(e)=>formSubmit(e)}>
                      Submit
                    </button>
                  </form>
                </div>
                <p id="errortext"></p>
              </div>
            </div>

            {/* <!-- thankyou message --> */}
            <div className="footer__contact_form_container footer__contact_success hide">
              <Image src={thankyouImg} alt="thankyou" height="70px"/>
              <div className="footer__contact_inputField">
                <h2>
                  Thanks for submitting your details. We will contact you soon.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- contact form end --> */}

    {/* <!--footer start--> */}
    <footer>
    <div className="footer_middle_img">
      {/* <Image className="marginScalingImg" src={footerUp} alt="steps"/> */}
      </div>
      <div className="footer__container">
        <div className="footer__bg_wrapper"></div>
        <div className="footer__left">
          <div>
            <Image src={logo} alt="logo"/>
            <div className="footer__left_social">
              <Image src={instagram} alt="instagram"/>
              <Image src={facebook} alt="facebook"/>
              <Image src={Linkedin} alt="Linkedin"/>
              <Image src={Twitter} alt="Twitter"/>
            </div>
            <li>
              <Link  href="https://becho.fastor.ai/"><button id="header__btn_id" className="btn btn-primary">
                  Get Started
                  <Image style={{display:"inline-block",marginLeft: "0.5rem"}} 
                  src={ArrowRight} alt="arrow-right"/></button></Link>
            </li>

          </div>
        </div>
        <div className="footer__right_desktop">
          <ul>
            <li className="footer__menu_heading">Product</li>
            <li><Link href="#">E-Store</Link></li>
            <li><Link href="#">Payment</Link></li>
            <li><Link href="#">Logistics</Link></li>
            <li><Link href="#">Inventory</Link></li>
            <li><Link href="#">Sales &amp; Marketing</Link></li>
            <li><Link href="#">Analytics</Link></li>
            <li><Link href="#">Billing</Link></li>
          </ul>
          <ul>
            <li className="footer__menu_heading">Business</li>
            <li><Link href="#">Restaurant</Link></li>
            <li><Link href="#">Dine-in</Link></li>
            <li><Link href="#">QSR</Link></li>
            <li><Link href="#">Takeaway</Link></li>
            <li><Link href="#">Retail</Link></li>
            <li><Link href="#">Service</Link></li>
            <li><Link href="#">Entrepreneur</Link></li>
          </ul>
          <ul>
            <li className="footer__menu_heading">Channels</li>
            <li><Link href="#">Direct</Link></li>
            <li><Link href="#">Reseller</Link></li>
            <li><Link href="#">Marketplace</Link></li>
          </ul>
          <ul>
            <li className="footer__menu_heading">FAQ</li>
            <li><Link href="#">Terms and Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">About Us</Link></li>
          </ul>
        </div>
        <div className="footer__right_mobile">
          <ul>
            <li className="footer__menu_heading"><Link href="#">Product</Link></li>
            <li className="footer__menu_heading"><Link href="#">Business</Link></li>
            <li className="footer__menu_heading"><Link href="#">Channels</Link></li>
            <li className="footer__menu_heading"><Link href="#">FAQ</Link></li>
            <li className="footer__menu_heading"><Link href="#">Term and Conditions</Link></li>
            <li className="footer__menu_heading"><Link href="#">Privacy Policy</Link></li>
            <li className="footer__menu_heading"><Link href="#">About Us</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">Copyright 2022</p>
    </footer>
    </>
   )
}