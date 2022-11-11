import Image from "next/image";
import Link from "next/link";
import mikeimg from "../public/accouncement_mike.png";
import logo from "../public/logo.svg";
import rightArrow from "../public/arrow-right.svg";
import arrowRightOrange from "../public/arrow-right-orange.svg";
import heroRightImg from "../public/heroRightImg.svg";
import paymentDesktop from "../public/payment_desktop.svg"
import paymentMobile from "../public/payment_mobile.svg"
import heroMobileImg from "../public/heroMobileImg.svg";
import heroBg1 from "../public/heroBg1.svg";
import fetureIcon1 from "../public/fetureIcon1.svg";
import fetureIcon2 from "../public/fetureIcon2.svg";
import fetureIcon3 from "../public/fetureIcon3.svg";
import fetureIcon4 from "../public/fetureIcon4.svg";
import fetureIcon5 from "../public/fetureIcon5.svg";
import fetureIcon6 from "../public/fetureIcon6.svg";
import fetureIcon7 from "../public/fetureIcon7.svg";
import fetureIcon8 from "../public/fetureIcon8.svg";
import fetureIcon9 from "../public/fetureIcon9.svg";
import storeNeedUp from "../public/storeNeedUp.svg";
import storeNeedDown from "../public/storeNeedDown.svg";
import storeNeedImg1 from "../public/storeNeedImg1.png";
import storeNeedImg2 from "../public/storeNeedImg2.png";
import storeNeedImg3 from "../public/storeNeedImg3.png";
import storeNeedImg4 from "../public/storeNeedImg4.png";
import storeNeedImg5 from "../public/storeNeedImg5.png";
import storeNeedImg6 from "../public/storeNeedImg6.png";
import storeNeedImg7 from "../public/storeNeedImg7.png";
import reviewsUP from "../public/reviewsUP.svg"
import reviewImage1 from "../public/reviewImage1.png"
import reviewImage2 from "../public/reviewImage2.png"
import reviewImage3 from "../public/reviewImage3.png"
import reviewsDown from "../public/reviewsDown.svg"
import reviewImage5 from "../public/reviewImage5.png"
import footerContact from "../public/footerContact.svg"
import thankyouImg from "../public/thankyouImg.svg"
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import Linkedin from "../public/Linkedin.svg";
import Twitter from "../public/Twitter.svg";
import footerUp from "../public/footerUp.svg";
// import { faAngleLeft } from '@fortawesome/pro-solid-svg-icons';
import { useEffect } from "react";
import stepsScaleImg3 from "../public/stepsScaleImg3.svg";
import stepsScaleImg2 from "../public/stepsScaleImg2.svg";
import stepsScaleImg1 from "../public/stepsScaleImg1.svg";
import stepsManageImg3 from "../public/stepsManageImg3.svg";
import stepsManageImg4 from "../public/stepsManageImg4.svg";
import stepsManageImg2 from "../public/stepsManageImg2.svg";
import stepsManageImg1 from "../public/stepsManageImg1.svg";
import stepsImg3 from "../public/stepsImg3.svg";
import stepsImg2 from "../public/stepsImg2.svg";
import stepsImg1 from "../public/stepsImg1.svg";

import LeftArrowIconImg from "../public/LeftArrowIconImg.png";
import RightArrowIconImg from "../public/RightArrowIconImg.png";

import Media from "react-media";
import ReviewMobile from "./reviewMobile";

// import heroSideAnimation from "../public/heroSideAnimation.svg";

export default function Home(){

  useEffect(()=>{
    (function (b, o, i, l, e, r) {
      b.GoogleAnalyticsObject = l;
      b[l] ||
        (b[l] = function () {
          (b[l].q = b[l].q || []).push(arguments);
        });
      b[l].l = +new Date();
      e = o.createElement(i);
      r = o.getElementsByTagName(i)[0];
      e.src = "//www.google-analytics.com/analytics.js";
      r.parentNode.insertBefore(e, r);
    })(window, document, "script", "ga");
    ga("create", "UA-XXXXX-X", "auto");
    ga("send", "pageview");

    const texts = ["Fastest", "Futureproof", "Simplest"];
      setInterval(() => {
        document.querySelector(".hero__title_animation").innerText= texts[0];
        texts.push(texts.shift());
      }, 1500);

  // displayReviewCard(0);


},[]);

useEffect(()=>{

window.addEventListener("scroll", function () {
  const ele_build = document.getElementById("steps__build_desktop");
  const ele_manage = document.getElementById("steps__manage_desktop");
  const ele_scale = document.getElementById("steps__scale_desktop");
  const ele_build_mobile = document.getElementById("steps__build_mobile");
  const ele_manage_mobile = document.getElementById(
    "steps__manage_mobile"
  );
  const ele_scale_mobile = document.getElementById("steps__scale_mobile");

  const scroll_direction = scrollDir();
  var animation_className = "";
  if (scroll_direction == "up") {
    animation_className = "fadeUp__animation";
  } else {
    animation_className = "fadeDown__animation";
  }

  if (isInViewport(ele_build) || isInViewport(ele_build_mobile)) {
    document
      .querySelector(".steps__build_btn")
      .classList.add("steps__active");
    document
      .querySelector(".steps__manage_btn")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__scale_btn")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__build_btn_mob")
      .classList.add("steps__active");
    document
      .querySelector(".steps__manage_btn_mob")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__scale_btn_mob")
      .classList.remove("steps__active");
    // animation
    ele_build.classList.add(animation_className);
    ele_scale.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_manage.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_build_mobile.classList.add(animation_className);
    ele_scale_mobile.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_manage_mobile.classList.remove("fadeUp__animation","fadeDown__animation");
  } else if (
    isInViewport(ele_manage) ||
    isInViewport(ele_manage_mobile)
  ) {
    document
      .querySelector(".steps__manage_btn")
      .classList.add("steps__active");
    document
      .querySelector(".steps__scale_btn")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__build_btn")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__manage_btn_mob")
      .classList.add("steps__active");
    document
      .querySelector(".steps__scale_btn_mob")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__build_btn_mob")
      .classList.remove("steps__active");
    // animation
    ele_manage.classList.add(animation_className);
    ele_build.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_scale.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_manage_mobile.classList.add(animation_className);
    ele_build_mobile.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_scale_mobile.classList.remove("fadeUp__animation","fadeDown__animation");
  } else if (isInViewport(ele_scale) || isInViewport(ele_scale_mobile)) {
    document
      .querySelector(".steps__scale_btn")
      .classList.add("steps__active");
    document
      .querySelector(".steps__manage_btn")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__build_btn")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__scale_btn_mob")
      .classList.add("steps__active");
    document
      .querySelector(".steps__manage_btn_mob")
      .classList.remove("steps__active");
    document
      .querySelector(".steps__build_btn_mob")
      .classList.remove("steps__active");
    // animation
    ele_scale.classList.add(animation_className);
    ele_manage.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_build.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_scale_mobile.classList.add(animation_className);
    ele_manage_mobile.classList.remove("fadeUp__animation","fadeDown__animation");
    ele_build_mobile.classList.remove("fadeUp__animation","fadeDown__animation");
  }
});
},[])

const isInViewport=(element)=> {
  const rect = element.getBoundingClientRect();
  var heightD = rect.bottom - rect.top;
  return (
    element.offsetTop < window.scrollY + 250 &&
    element.offsetTop + heightD > window.scrollY + 250
  );
}

var lastScrollTop = 0;
const scrollDir=() =>{
  var result = "";
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    result = "up";
  } else {
    result = "down";
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  return result;
}



      // scroll left
      const scrollLeftOnClicked=(elmentclassName)=> {
        var container = document.querySelector(`.${elmentclassName}`);
        sideScroll(container, "right", 5, 600, 5);
      }
      // scroll right
      const scrollRightOnClicked=(elmentclassName)=> {
        var container = document.querySelector(`.${elmentclassName}`);
        sideScroll(container, "left", 5, 500, 5);
      }
      const sideScroll=(element, direction, speed, distance, step)=> {
        var scrollAmount = 0;
        var slideTimer = setInterval(function () {
          if (direction == "left") {
            element.scrollLeft -= step;
          } else {
            element.scrollLeft += step;
          }
          scrollAmount += step;
          if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
          }
        }, speed);
      }

    
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

    var reviews_data_obj=
    [
        {
        description:"Fastor is a one stop solution for all your business needs. They have helped me to grow my business exponentially and now I am able to reach more customers.",
        title:"Nikhil Athani",
        sub_title:"Electronics Shop",
        image:reviewImage1
        },
        {
        "description":"Never knew that taking my grocery business online will be this quick and easy. The Fastor team assisted with everything and now I sell online too.They have definitely added so much value to my small offline business.",
        "title":"Mohit Pau",
        "sub_title":"Grocery Shop Owner",
        "image":reviewImage2
        },
        {
        "description":"I could not imagine that selling online would be this easy. Was able to launch my website within the same day.Great experience with Fastor.",
        "title":"Veer Vaddar",
        "sub_title":" Clothing Shop",
        "image":reviewImage3
        }
   ]
    const displayReviewCard=(index)=>{
        document.querySelector(".reviews__card_mobile_container")
        .innerText=" ";

        console.log("hellofirst",reviews_data_obj[0],index);

    let reviews_card_cont= document.createElement("div");
    reviews_card_cont.setAttribute("class","reviews__card_mobile_container");
    let reviews_card= document.createElement("div");
    reviews_card.setAttribute("class","reviews__card");
    let reviews_card_description= document.createElement("p");
    reviews_card_description.setAttribute("class","reviews__card_description");
    let reviews_card_img= document.createElement("Image");
    reviews_card_img.setAttribute("class","reviews__card_img");
    let next_div=document.createElement("div");
    let reviews_card_title= document.createElement("h3");
    reviews_card_title.setAttribute("class","reviews__card_title");
    let reviews_card_sub_title= document.createElement("p");
    reviews_card_sub_title.setAttribute("class","reviews__card_sub_title");
    
    reviews_card_description.innerText=`${reviews_data_obj[index].description}`;
    reviews_card_img.src=`/../public/reviewImage${index}`;
    reviews_card_title.innerText=`${reviews_data_obj[index].title}`;
    reviews_card_sub_title.innerText=`${reviews_data_obj[index].sub_title}`;

    next_div.append(reviews_card_title,reviews_card_sub_title);
    reviews_card.append(reviews_card_description,reviews_card_img,next_div);
    reviews_card_cont.append(reviews_card);

    document.querySelector(".reviews__card_mobile_container")
    .append(reviews_card_cont);
  }
  
  // useEffect(()=>{
  //   displayReviewCard(0);
  // },[])


    return (
    <>
        <div className="accouncement_container">
        <div>
          <Image id="accouncement_icon_id" 
          src={mikeimg} 
          alt="arrow-right"/>
          Get on the largest Seller Network and sell to millions!
        </div>

        <Link href="#form-section">
        <button id="accouncement_btn_id" className="btn">
          Get on ONDC with Fastor
          {/* <!-- <img style="display: inline-block; margin: 0rem 0rem 0.5rem 0.3rem;vertical-align:middle;" src="images/accouncemtHandIcon.png" alt="arrow-right"></button></a> --> */}
        </button>
      </Link>

      </div>

      {/* accouncement section end */}

      {/* header */}
      <div className="header__container">
      <header className="header__inner_container">
        <div className="header__logo_hamburger" for="menu__toggle">
          <Image className="header__logo" src={logo} alt="logo"/>
          <Link className="header__mobile_btn" href="https://becho.fastor.ai/">
            <button id="header__btn_id" className="btn btn-primary">
              Get Started
              <Image style="display: inline-block; margin-left: 0.5rem" 
              src={rightArrow} 
              width="25"
              height="25"
              alt="arrow-right"/></button></Link>
          {/* <!-- uncomment for hamburger/menu -->
          <!-- <img
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
            {/* <!-- <li><a className="header__menu_item" href="#">Product</a></li>
            <li><a className="header__menu_item" href="#">Businesses</a></li>
            <li><a className="header__menu_item" href="#">Channels</a></li>
            <li><a className="header__menu_item" href="#">Pricing</a></li>
            <li><a className="header__menu_item" href="#">Learn</a></li>
            <li><a className="header__menu_item" href="#">About</a></li> --> */}
            <li>
              <Link  href="https://becho.fastor.ai/">
                <button id="header__btn_id" className="btn btn-primary">
                  Get Started
                  <Image style={{display: "inline-block", marginLeft: "0.5rem"}} 
                  src={rightArrow} 
                  alt="arrow-right"/></button>
               </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>

    {/* header end */}

    {/* main section */}
    <div className="main-container">
     {/* { <!-- hero section -->} */}
      <div style={{minHeight: "90vh"}}>
        <div className="hero__container" 
        style={{backgroundImage:`url(${heroBg1.src})`}}
        >
          <Image className="hero__img_overlay" src={heroBg1} alt="heroBg"/>
          <div className="custom_container">
            <div className="hero__left_content_container">
              <h1 className="hero__title">
                <span className="hero__title_animation">Simplest</span> way to Start
                <br/>
                Business Online
              </h1>
              <p className="hero__description">
                Build, Manage, &amp; Scale Your Business!
              </p>
              <p className="hero__sub_description">
                Get Your Business Online in just 30 Seconds.
              </p>
              <Link  href="https://becho.fastor.ai/">
                <button style={{minWidth: "150px"}} className="btn btn-secondary" >
                  Try Now
                  <Image style={{display: "inline-block", marginLeft: "0.5rem" }}
                  src={arrowRightOrange} alt="arrow-right"/>
                </button>
              </Link>
            </div>
            <Image id="hero__right_img_desktop" width="100%" className="hero__img" 
            src={heroRightImg} alt="hero"/>
            <Image id="hero__img_payment_desktop" 
            src={paymentDesktop} alt="payments"/>
            
            <div id="hero__right_img_mobile">
              <Image width="94%" className="hero__img" 
              src={heroMobileImg} alt="hero"/>
              <Image id="hero__img_payment_mobile" width="auto" 
              height="auto"
              src={paymentDesktop} alt="payments"/>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- hero section end --> */}

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
      {/* <!-- store need start -->*/}
      <section className="">
        <Image id="reviews_bg_up" src={storeNeedUp} alt=""/>
        <div className="storeNeed__container">
          <h1 className="storeNeed__heading">Get The Store You Need</h1>
          <p className="storeNeed__description">
            Businesses of all shapes and sizes can grow with us. Just choose your
            <br/>
            industry, and get your online journey started today!
          </p>
          <Link  href="https://becho.fastor.ai/"><button id="storeNeed__get_started_id" className="btn btn-primary">
              Get Started
              <Image style={{display: "inline-block", marginLeft: "0.5rem"}} src={rightArrow} alt="arrow-right"/></button></Link>

          <div className="storeNeed__card_main_container">
            <div className="storeNeed__next_btn" id="storeNeed__next_btnId" onClick={()=>scrollRightOnClicked('storeNeed__card_container')}>
              <i style={{marginLeft: "-0.2rem"}} className="fa fa-angle-left">
                <Image style={{alignSelf:"center"}}
                  src={LeftArrowIconImg} alt="arrow"/>
              </i>
            </div>
            <div className="storeNeed__prev_btn" id="storeNeed__prev_btnId" onClick={()=>scrollLeftOnClicked('storeNeed__card_container')}>
              <i style={{marginRight: "-0.2rem"}} className="fa fa-angle-right">
              <Image src={RightArrowIconImg} alt="arrow"/>

              </i>
            </div>
            <div className="storeNeed__card_container">
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img " src={storeNeedImg1} alt="store need"/>
                <h3 className="storeNeed__card_title">Jewellery</h3>
              </div>
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img " src={storeNeedImg2} alt="store need"/>
                <h3 className="storeNeed__card_title">Beauty</h3>
              </div>
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img " src={storeNeedImg3} alt="store need"/>
                <h3 className="storeNeed__card_title">Fashion</h3>
              </div>
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img " src={storeNeedImg4} alt="store need"/>
                <h3 className="storeNeed__card_title">Sports</h3>
              </div>
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img " src={storeNeedImg5} alt="store need"/>
                <h3 className="storeNeed__card_title">Sweets</h3>
              </div>
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img" src={storeNeedImg6} alt="store need"/>
                <h3 className="storeNeed__card_title">Grocery</h3>
              </div>
              <div className="storeNeed__card">
                <Image className="storeNeed__card_img" src={storeNeedImg7} alt="store need"/>
                <h3 className="storeNeed__card_title">Electronics</h3>
              </div>
            </div>
          </div>
        </div>
        <Image id="reviews_bg_down" src={storeNeedDown} alt=""/>
      </section>
      {/* <!-- store need end --> */}


      {/* </div> */}
      {/* steps need start */}
      <section className="steps__container custom_container">
        <div className="steps__sticky_container">
          <div id="steps__heading_id" className="steps__heading">
            <span>No Rocket Science,</span> Just Baby Steps...
          </div>
          <div className="steps__btn_container" id="steps__btn_desktop">
            <Link href="#steps__build_desktop"><div className="steps__btn steps__build_btn steps__active">
                Build
              </div></Link>
            <Link href="#steps__manage_desktop"><div className="steps__btn steps__manage_btn">Manage</div></Link>
            <Link href="#steps__scale_desktop"><div className="steps__btn steps__scale_btn">Scale</div></Link>
          </div>
          <div className="steps__btn_container" id="steps__btn_mobile">
            <Link href="#steps__build_mobile"><div className="steps__btn steps__build_btn_mob steps__active">
                Build
              </div></Link>
            <Link href="#steps__manage_mobile"><div className="steps__btn steps__manage_btn_mob">Manage</div></Link>
            <Link href="#steps__scale_mobile"><div className="steps__btn steps__scale_btn_mob">Scale</div></Link>
          </div>
        </div>
        <div id="steps__card_container_id" className="steps__card_container">
          {/* <!-- for desktop --> */}
          <div id="steps__build_desktop" className="steps__desktop_container fadeUp__animation">
            {/* <!-- first card start --> */}
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <h2>Enter Your Store Details</h2>
                <p>Not much, we just ask you for your Store Name &amp; Type</p>
              </div>
              <div className="steps__desktop_number">1</div>
              <div className="steps__desktop_card_right">
                <Image src={stepsImg1} alt="step2"/>
              </div>
            </div>
            {/* <!-- first card end --> */}
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <Image src={stepsImg2} alt="step2"/>
              </div>
              <div className="steps__desktop_number">2</div>

              <div className="steps__desktop_card_right">
                <h2>Add Your Product Catalogue</h2>
                <p>Upload the products you want to sell</p>
              </div>
            </div>
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <h2>Your Store is Ready</h2>
                <p>
                  Once you list the products your store is live and you can
                  start getting orders! Viola! Your Online Store got Live in
                  just 30 seconds
                </p>
              </div>
              <div className="steps__desktop_number">3</div>

              <div className="steps__desktop_card_right">
                <Image src={stepsImg3} alt="step2"/>
              </div>
            </div>
          </div>
          <div id="steps__manage_desktop" className="steps__desktop_container">
            {/* <!-- first card start --> */}
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <h2>Share Your Store’s Link</h2>
                <p>
                  Once your store is live, you can share the store link on
                  Socials like Whatsapp to showcase your Catalogue
                </p>
              </div>
              <div className="steps__desktop_number">1</div>
              <div className="steps__desktop_card_right">
                <Image src={stepsManageImg1} alt="step2"/>
              </div>
            </div>
            {/* <!-- first card end --> */}
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <Image src={stepsManageImg2} alt="step2"/>
              </div>
              <div className="steps__desktop_number">2</div>

              <div className="steps__desktop_card_right">
                <h2>Get Online Orders</h2>
                <p>
                  We provide you with a user friendly dashboard where you will
                  be notified whenever there is a new order. You can accept,
                  decline or get in touch with customers
                </p>
              </div>
            </div>
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <h2>Receive Online Payments</h2>
                <p>
                  We have payment integrations with Google Pay, amazon, visa,
                  for secure and easy transactions.
                </p>
              </div>
              <div className="steps__desktop_number">3</div>
              <div className="steps__desktop_card_right">
                <Image src={stepsManageImg3} alt="step2"/>
              </div>
            </div>
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <Image src={stepsManageImg4} alt="step2"/>
              </div>
              <div className="steps__desktop_number">4</div>
              <div className="steps__desktop_card_right">
                <h2>Deliver To Your Customer’s Doorstep</h2>
                <p>
                  No need to worry to get your product delivered ! You can
                  easily deliver orders at customer's doorstep without any
                  hassle. We have various Delivery partners who would pick
                  products from your location and deliver it to the customer.
                </p>
              </div>
            </div>
          </div>
          <div id="steps__scale_desktop" className="steps__desktop_container">
            {/* <!-- first card start --> */}

            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <h2>Analyse Your Customers’ Behaviour</h2>
                <p>
                  Once your store is live, you can share the store link on
                  Socials like Whatsapp to showcase your Catalogue
                </p>
              </div>
              <div className="steps__desktop_number">1</div>
              <div className="steps__desktop_card_right">
                <Image src={stepsScaleImg1} alt="step2"/>
              </div>
            </div>
            {/* <!-- first card end --> */}
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <Image src={stepsScaleImg2} alt="step2"/>
              </div>
              <div className="steps__desktop_number">2</div>

              <div className="steps__desktop_card_right">
                <h2>Monitor Your Sales Performance</h2>
                <p>
                  Now Monitor your overall sales performance through our
                  dashboard. Analyse your average profit per order, your
                  trending product and a lot more with us!
                </p>
              </div>
            </div>
            <div className="steps__desktop_card">
              <div className="steps__desktop_card_left">
                <h2>Plan Your Marketing Accordingly</h2>
                <p>
                  Once you know about your customer and the products in demand
                  through the dashboard, you can plan the marketing strategy
                  accordingly.
                </p>
              </div>
              <div className="steps__desktop_number">3</div>
              <div className="steps__desktop_card_right">
                <Image src={stepsScaleImg3} alt="step2"/>
              </div>
            </div>
          </div>
          {/* <!-- for desktop end --> */}
          {/* <!-- for mobile --> */}
          <div id="steps__build_mobile" className="steps__mobile_container">
            <div className="steps__mobile_card">
              <Image src={stepsImg1} alt="step1"/>
              <label for="step1">Step-1</label>
              <h2>Enter Your Store Details</h2>
              <p>Not much, we just ask you for your Store Name &amp; Type</p>
            </div>
            <div className="steps__mobile_card">
              <Image src={stepsImg2} alt="step2"/>
              <label for="step2">Step-2</label>
              <h2>Add Your Product Catalogue</h2>
              <p>Upload the products you want to sell</p>
            </div>
            <div className="steps__mobile_card">
              <Image src={stepsImg3} alt="step3"/>
              <label for="step3">Step-3</label>
              <h2>Your Store is Ready</h2>
              <p>
                Once you list the products your store is live and you can start
                getting orders! Viola! Your Online Store got Live in just 30
                seconds
              </p>
            </div>
          </div>
          <div id="steps__manage_mobile" className="steps__mobile_container">
            <div className="steps__mobile_card">
              <Image src={stepsManageImg1} alt="step1"/>
              <label for="step1">Step-1</label>
              <h2>Share Your Store’s Link</h2>
              <p>
                Once your store is live, you can share the store link on Socials
                like Whatsapp to showcase your Catalogue
              </p>
            </div>
            <div className="steps__mobile_card">
              <Image src={stepsManageImg2} alt="step2"/>
              <label for="step2">Step-2</label>
              <h2>Get Online Orders</h2>
              <p>
                We provide you with a user friendly dashboard where you will be
                notified whenever there is a new order. You can accept, decline
                or get in touch with customers
              </p>
            </div>
            <div className="steps__mobile_card">
              <Image src={stepsManageImg3} alt="step3"/>
              <label for="step3">Step-3</label>
              <h2>Receive Online Payments</h2>
              <p>
                We have payment integrations with Google Pay, amazon, visa, for
                secure and easy transactions.
              </p>
            </div>

            <div className="steps__mobile_card">
              <Image src={stepsManageImg4} alt="step4"/>
              <label for="step4">Step-4</label>
              <h2>Deliver To Your Customer’s Doorstep</h2>
              <p>
                No need to worry to get your product delivered ! You can easily
                deliver orders at customer's doorstep without any hassle. We
                have various Delivery partners who would pick products from your
                location and deliver it to the customer.
              </p>
            </div>
          </div>
          <div id="steps__scale_mobile" className="steps__mobile_container">
            <div className="steps__mobile_card">
              <Image src={stepsScaleImg1} alt="step1"/>
              <label for="step1">Step-1</label>
              <h2>Analyse Your Customers’ Behaviour</h2>
              <p>
                Once your store is live, you can share the store link on Socials
                like Whatsapp to showcase your Catalogue
              </p>
            </div>
            <div className="steps__mobile_card">
              <Image src={stepsScaleImg2} alt="step2"/>
              <label for="step2">Step-2</label>
              <h2>Monitor Your Sales Performance</h2>
              <p>
                Now Monitor your overall sales performance through our
                dashboard. Analyse your average profit per order, your trending
                product and a lot more with us!
              </p>
            </div>
            <div className="steps__mobile_card">
              <Image src={stepsScaleImg3} alt="step3"/>
              <label for="step3">Step-3</label>
              <h2>Plan Your Marketing Accordingly</h2>
              <p>
                Once you know about your customer and the products in demand
                through the dashboard, you can plan the marketing strategy
                accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* steps need end */}

      
      {/* <!-- reviews section start --> */}
      {/* <section> */}
      <Image id="reviews_bg_up"  src={reviewsUP} alt=""/>
        <div className="reviews__container">
          <h1 className="reviews__heading">
            Here’s what your fellow Business Owners have to say..
          </h1>
         
          <div className="reviews__card_main_container">
            <div className="reviews__next_btn" onClick={()=>scrollRightOnClicked('reviews__card_container')}>
              {/* <li style={{marginLeft: "-0.2rem"}} className="fa fa-angle-left"> */}
                <Image src={LeftArrowIconImg} alt=""/>
              {/* </li> */}
            </div>
            <div className="reviews__prev_btn" onClick={()=>scrollLeftOnClicked('reviews__card_container')}/>
              {/* <li style={{marginRight: "-0.5rem"}} className="fa fa-angle-right"> */}
                <Image src={RightArrowIconImg} 
                onClick={()=>scrollLeftOnClicked('reviews__card_container')}
                className="prev_btn_css"
                alt=""
                />
              {/* </li> */}
            </div>

            <div className="reviews__card_container desktop_view">
              <div className="reviews__card">
                <p className="reviews__card_description">
                  Fastor is a one stop solution for all your business needs. They have helped me to grow my business exponentially andnow I am able to reach more customers.
                </p>
                <Image className="reviews__card_img" src={reviewImage1} alt="store need"/>
                <div>
                  <h3 className="reviews__card_title">Nikhil Athani</h3>
                  <p className="reviews__card_sub_title">
                    Electronics Shop
                  </p>
                </div>
              </div>
              <div className="reviews__card">
                <p className="reviews__card_description">
                  Never knew that taking my grocery business online will be this quick and easy. The Fastor team assisted with everything and now I sell online too.
                  They have definitely added so much value to my small offline business.
                </p>
                <Image className="reviews__card_img" src={reviewImage2} alt="store need"/>
                <div>
                  <h3 className="reviews__card_title">Mohit Pau</h3>
                  <p className="reviews__card_sub_title">
                    Grocery Shop Owner
                  </p>
                </div>
              </div>
              <div className="reviews__card">
                <p className="reviews__card_description">
                  Being a Restaurant owner I was facing issues with Delivery Management.
                  Although I used to get a lot of orders but had no delivery boys.
                  I have a great experience with Fastor and they have great solutions for such business problems. Along with Food deliveries they have even made order management easy for us!
                </p>
                <Image className="reviews__card_img" src={reviewImage5} alt="store need"/>
                <div>
                  <h3 className="reviews__card_title">Rajesh Kumar</h3>
                  <p className="reviews__card_sub_title">
                    Restaurant Owner
                  </p>
                </div>
              </div>             
               <div className="reviews__card">
                <p className="reviews__card_description">
                  I could not imagine that selling online would be this easy. Was able to launch my website within the same day.
                  Great experience with Fastor.

                </p>
                <Image className="reviews__card_img" src={reviewImage3} alt="store need"/>
                <div>
                  <h3 className="reviews__card_title">Veer Vaddar</h3>
                  <p className="reviews__card_sub_title">
                    Clothing Shop
                  </p>
                </div>
              </div>

            </div>

          </div>
          {/* <!--- mobile view start--> */} 
  
          {/* <div className="reviews__card_mobile_view">
            <div className="reviews__card_mobile_container"></div>
            <div style={{textAlign:"center"}}>
              <span className="dot" onClick={()=>displayReviewCard(0)}></span>
              <span className="dot" onClick={()=>displayReviewCard(1)}></span>
              <span className="dot" onClick={()=>displayReviewCard(2)}></span>
             </div>
          </div> */}

          {/* <!--- mobile view end--> */}
        </div>
        <Image id="reviews_bg_down" src={reviewsDown} alt=""/>
       {/* </section> */}
      {/* // {/* <!-- reviews section end --> */}


       {/* <!-- contact form start --> */}

      {/* </div> */}
    <section id="form-section">
      <div className="footer__contact_container">
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
                  src={rightArrow} alt="arrow-right"/></button></Link>
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
    {/* <!-- foooter end --> */}
     </>
    )
    
      }