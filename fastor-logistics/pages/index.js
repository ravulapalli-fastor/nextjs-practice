import Image from "next/image";
import Link from "next/link";

// images
import logo from "../public/logo.svg";
import ArrowRight from "../public/arrow-right.svg";
import LaptopImg from "../public/Laptop.png";

import LineDraw from "../public/lineDrawImg.png";
import Rectangle from "../public/Rectangle 10020.png";
import deliveryPatnersImg from "../public/deliveryPatnersImg.png";

import StoreNeedUp from "../public/storeNeedUp.svg";
import StoreNeedDown from "../public/storeNeedDown.svg";

import BlueTruck from "../public/deliveryBlueTruckImg.png";
import PurpleTruck from "../public/deliveryPurpleTruckImg.png";
import RedTruck from "../public/deliveryRedTruck.png";
import BoxTick from "../public/box-tick.png";

import fetureIcon1 from "../public/fetureIcon1.svg";
import fetureIcon2 from "../public/fetureIcon2.svg";
import fetureIcon3 from "../public/fetureIcon3.svg";
import fetureIcon4 from "../public/fetureIcon4.svg";
import fetureIcon5 from "../public/fetureIcon5.svg";
import fetureIcon6 from "../public/fetureIcon6.svg";
import fetureIcon7 from "../public/fetureIcon7.svg";
import fetureIcon8 from "../public/fetureIcon8.svg";
import fetureIcon9 from "../public/fetureIcon9.svg";

import FaqPlus from "../public/faqPlusImg.png";

import footerContact from "../public/footerContact.svg";
import contactDown from "../public/contactDown.svg";
import thankyouImg from "../public/thankyouImg.svg"
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import Linkedin from "../public/Linkedin.svg";
import Twitter from "../public/Twitter.svg";
import footerUp from "../public/footerUp.svg";
import { useEffect, useState } from "react";


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
      // reviews cards
      var initialReviewIndex=0;
      var reviews_data_obj=
        [
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"1. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"2. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"3. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"4. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"5. It was a very good experience",
            }
       ];
       var userProfileImgArr=[
        "../public/reviewImg1.png",        
        "../public/reviewImg2.png",
        "../public/reviewImg3.png",        
        "../public/reviewImg4.png",
        "../public/reviewImg5.png"       
       ];
const [profile,setProfile]=useState(userProfileImgArr);
        function displayReviewCard(index){
            document.querySelector(".reviews__card_mobile_container")
            .innerText="";

        // let reviews_card_cont= document.createElement("div");
        // reviews_card_cont.setAttribute("class","reviews__card_main_container");
        let reviews_card= document.createElement("div");
        reviews_card.setAttribute("class","reviews__card");

        let reviews_card_description= document.createElement("p");
        reviews_card_description.setAttribute("class","reviews__card_description");
        let reviews_card_title= document.createElement("h3");
        reviews_card_title.setAttribute("class","reviews__card_title");
        
        reviews_card_description.innerText=`${reviews_data_obj[index].description}`;
        reviews_card_title.innerText=`${reviews_data_obj[index].title}`;

        reviews_card.append(reviews_card_title,reviews_card_description);
        // reviews_card_cont.append(reviews_card);

        document.querySelector(".reviews__card_mobile_container")
        .append(reviews_card);

      }
    //   displayReviewCard(initialReviewIndex);
      
    //  user profile images append function
//       function userProfile(arr){
// console.log("hi")
//         let img1=document.querySelector("#profile_img1")
//         img1.src=arr[0];

//         let img2=document.querySelector("#profile_img2")
//         img2.src=arr[1];

//         let img3=document.querySelector("#profile_img3")
//         img3.src=`{/${arr[0]}}`;

//         let img4=document.querySelector("#profile_img4")
//         img4.src=`{/${arr[0]}}`;

//         let img5=document.querySelector("#profile_img5")
//         img5.src=`{/${arr[0]}}`;
      
//       };
      useEffect(()=>{
        displayReviewCard(initialReviewIndex);
        // userProfile(userProfileImgArr);
        // setProfile(userProfileImgArr)
  
    },[profile])
    //   userProfile(userProfileImgArr);
            // scroll left
            function scrollLeftOnClicked(elmentClassName) {
                var container = document.querySelector(`.${elmentClassName}`);
                // sideScroll(container, "right", 5, 600, 5);
                let profileNew=[...profile];
                if(initialReviewIndex<reviews_data_obj.length-1){
                  initialReviewIndex+=1;
                  let lastImg=profileNew.shift();
                  console.log(lastImg,profileNew,"initial")
                  profileNew.push(lastImg);
                }
                displayReviewCard(initialReviewIndex);
                setProfile(profileNew);
                console.log(profile,"indjkdh")
                // userProfile(userProfileImgArr);
              }
              // scroll right
              function scrollRightOnClicked(elmentClassName) {
                var container = document.querySelector(`.${elmentClassName}`);
                // sideScroll(container, "left", 5, 600, 5);
                let profileNew=[...profile];
                if(initialReviewIndex>0){
                  initialReviewIndex-=1;
                  let lastImg=profileNew.pop();
                  profileNew.unshift(lastImg);
                  console.log(userProfileImgArr,"secRigh")

                }
                displayReviewCard(initialReviewIndex);
                setProfile(profileNew)
                // userProfile(userProfileImgArr);
              }
    return (
        <div>
            <div class="header__container">
      <header class="header__inner_container">
        <div class="header__logo_hamburger" for="menu__toggle">
          <Image class="header__logo" src={logo} alt="logo" />
          <Link class="header__mobile_btn" href="https://becho.fastor.ai/"
            ><button id="header__btn_id" class="btn btn-primary">
              Get Started
              <Image
                style="display: inline-block; margin-left: 0.5rem"
                src={ArrowRight}
                alt="arrow-right"
              /></button
          ></Link>
          {/* <!-- uncomment for hamburger/menu --> */}
          {/* <!-- <img
            class="header__hamburger_menu"
            onclick="menuClicked()"
            src="img/hamburgerMenu.svg"
            alt="hamburgerMenu"
          />
          <img
            class="header__hamburger_close"
            onclick="closeMenu()"
            src="img/hamburgerClose.svg"
            alt="hamburgerClose"
          /> --> */}
        </div>
        <nav class="header__nav">
          <ul>
            <li><Link class="header__menu_item" href="#">Product</Link></li>
            <li><Link class="header__menu_item" href="#">Businesses</Link></li>
            <li><Link class="header__menu_item" href="#">Channels</Link></li>
            <li><Link class="header__menu_item" href="#">Pricing</Link></li>
            <li><Link class="header__menu_item" href="#">Learn</Link></li>
            <li><Link class="header__menu_item" href="#">About</Link></li>
            <li>
              <Link href="https://becho.fastor.ai/"
                ><button id="header__btn_id_desktop" class="btn btn-primary">
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
              {/* <!-- <div class="hero__container"> --> */}
                <Image class="hero_image_desktop" src={LaptopImg} alt=""/>
              {/* <!-- </div> --> */}
      
            {/* <!-- hero section end --> */}
      
    </div>

    <div class="main-container">

        <div>
        {/* <!--first row start--> */}
        <div class="logistics__inner_container">
          <div class="logistics__inner_left_container">
            <h3 class="logistics_main_title">Logistics</h3>
            <p class="logistics_main_title_description">
              Now power up your online business by making shipping easy!
            </p>
        </div>
        <div id="logistics_linedraw_img_id">
        <Image 
          src={LineDraw} 
          style={{margin:"-3% 0% -5% 0%"}}
          alt=""
        />
      </div>
      </div>

      {/* <!--first row end--> */}
      {/* <!--benefits section start--> */}
      <div class="benefits_card_main_container">
        <h3 class="benefits_title">Benefits</h3>
        <div class="benefits_card_container">
          <div class="benefits_card_image" >
          <Image src={Rectangle} alt=""/>
          </div>
            <div class="benefits_card_data_container">
            <h3 class="benefits_card_data_title">Sell your Products Nationwide</h3>
            <p class="benefits_card_data_description">
              For customers, payment is the most important part while shopping online. we make it very easy for userd to make payment. Now get the best payment experience with us for both buyer and seller. 
            </p>
          </div>
        </div>

        <div class="benefits_card_container reverse_flex">
          <div class="benefits_card_image" >
          <Image src={Rectangle} alt=""/>
          </div>
          <div class="benefits_card_data_container align_right" >
            <h3 class="benefits_card_data_title">Reduce Hassle of Delivery</h3>
            <p class="benefits_card_data_description">
              For customers, payment is the most important part while shopping online. we make it very easy for userd to make payment. Now get the best payment experience with us for both buyer and seller. 
            </p>
          </div>
        </div>

        <div class="benefits_card_container">
          <div class="benefits_card_image" >
            <Image src={Rectangle} alt=""/>
          </div>
            <div class="benefits_card_data_container">
            <h3 class="benefits_card_data_title">Better Customer Experience</h3>
            <p class="benefits_card_data_description">
              For customers, payment is the most important part while shopping online. we make it very easy for userd to make payment. Now get the best payment experience with us for both buyer and seller. 
            </p>
          </div>
        </div>
      </div>
      {/* <!--benefits section end--> */}
      {/* <!--delivery section start--> */}
      <div class="delivery_main_container">
        <h3 class="logistics_title">Our Delivery Patners</h3>
        <Image  src={deliveryPatnersImg} alt=""/>
      </div>

    {/* <!--logistics section end--> */}
    </div>

    {/* <!-- reviews start --> */}
      <section class="">
        <img
          style={{width: "100%",backgroundColor:"red"}}
          src={StoreNeedUp}
          class="reviewBgMargin"

          alt=""
        />
        {/* <!--reviews carousel start--> */}
        <div class="reviews__container">
          <h1 class="reviews__heading">
            What people say about Us.
          </h1>
          <div>
          <div class="reviews__card_container">
            <div class="reviews__next_btn" onClick={()=>scrollRightOnClicked('reviews__card_container')}>
              <i style={{marginLeft: "-0.2rem"}} class="fa fa-angle-left"></i>
            </div>
            <div class="reviews__prev_btn" onClick={()=>scrollLeftOnClicked('reviews__card_container')}>
              <i style={{marginRight: "-0.2rem"}} class="fa fa-angle-right"></i>
            </div>
            <div class="reviews__card_mobile_container"></div>
          </div>
          <div style={{textAlign:"center"}} class="user_profile_main_container">
          {profile?.map((e,index)=>(
            // {/* <> */}
            
            <span class="user_profile_container" >
              <Image class="user_profile_img" id="profile_img1"
              width="100" height="100" alt={userProfileImgArr[0]}
              src={`/${e}`}
              />
            </span> 
        //  {/* <span class="user_profile_container" >
        //       <Image class="user_profile_img" id="profile_img2"
        //       width="100" height="100" alt="1" 
        //       src={`/${userProfileImgArr[1]}`}
        //       />
        //     </span>
        //     <span class="user_profile_container" >
        //       <Image class="user_profile_img" id="profile_img3"
        //       width="100" height="100" alt="2" 
        //       src={`/${userProfileImgArr[2]}`}
        //       />
        //     </span> 
        //     <span class="user_profile_container" >
        //       <Image class="user_profile_img" id="profile_img4"
        //       width="100" height="100" alt="3" 
        //       src={`/${userProfileImgArr[3]}`}
        //       />
        //     </span>
        //     <span class="user_profile_container" >
        //       <Image class="user_profile_img" id="profile_img5"
        //       width="100" height="100" alt="4" 
        //       src={`/${userProfileImgArr[4]}`}
        //       />
        //     </span>  */}
        //     {/* </> */}
         ))} 
        </div>
       </div>
      </div>
        {/* <!--reviews carousel end--> */}
        <Image
          style={{width: "100%"}}
          src={StoreNeedDown}
          class="reviewBgMargin"
          alt=""
        />
      </section>
      {/* <!-- reviews end --> */}



    {/* <!--simplify section start--> */}
      <div class="simplify__container">
        <h3 class="logistics_title">How we simplify logistics for you</h3>
        <div class="simplify__inner_container">

          <div class="simplify__card_container">
            <Image style={{marginLeft: "35%"}} src={BlueTruck} alt=""/>
            <p style={{textAlign: "center"}}>
              Deliver to 27000+ pincodes
            </p>
          </div>
          <div class="simplify__card_container">
            <Image style={{marginLeft: "35%"}} src={PurpleTruck} alt=""/>
            <p style={{textAlign: "center"}}>
              Solving complexities of shipping for you
            </p>
          </div>
          <div class="simplify__card_container">
            <Image style={{marginLeft: "35%"}} src={RedTruck} alt=""/>
            <p style={{textAlign: "center"}}>
              Manage delivery individually if you have your own delivery team            
            </p>
          </div>
          <div class="simplify__card_container">
            <Image style={{marginLeft: "35%"}} src={BoxTick} alt=""/>
            <p style={{textAlign: "center"}}>
              Provide your customers option of both Pickup and Delivery           
            </p>
          </div>

        </div>
               
      </div>
      {/* <!--simplify section end--> */}

            {/* <!-- features section --> */}
            <div class="features__container">
        <h1 class="features__title">You Name It, We Have It!</h1>
        <p class="features__description">
          Everything your Online Business needs...
        </p>
        <div class="features__card_container">
          {/* <!-- first row --> */}
           <div class="features__row">
                <div class="features__card">
                <Image  class="features__card_img" src={fetureIcon1} 
                 
                alt="feature"/>
                <h3 class="features__card_title">QR Ordering</h3>
              </div>
              <div class="features__card">
                <Image  class="features__card_img" src={fetureIcon2} alt="feature"/>
                <h3 class="features__card_title">Payments</h3>
              </div>
              <div class="features__card">
                <Image  class="features__card_img" src={fetureIcon3} alt="feature"/>
                <h3 class="features__card_title">POS</h3>
              </div>
              <div class="features__card">
                <Image class="features__card_img" src={fetureIcon4} alt="feature"/>
                <h3 class="features__card_title">Logistics</h3>
              </div>
            </div>

            
            <div class="features__row">
               <div class="features__card">
                 <Image class="features__card_img" src={fetureIcon5} alt="feature"/>
                 <h3 class="features__card_title">Online Store</h3>
               </div>
               <div class="features__card">
                 <Image class="features__card_img" src={fetureIcon6} alt="feature"/>
                <h3 class="features__card_title">Online Ordering</h3>
               </div>
               <div class="features__card">
                 <Image class="features__card_img" src={fetureIcon7} alt="feature"/>
                 <h3 class="features__card_title">Catalogue</h3>
               </div>
           </div>
           

          {/* <!-- third row --> */}
          <div class="features__row">
            <div class="features__card">
              <Image class="features__card_img" src={fetureIcon8} alt="feature"/>
              <h3 class="features__card_title">Offers &amp; Coupons</h3>
            </div>
            <div class="features__card">
              <Image class="features__card_img" src={fetureIcon9} alt="feature"/>
              <h3 class="features__card_title">Custom Domain</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- features section end --> */}


      {/* <!--faq section start--> */}
    <div class="faq__main_container">
      <h3 class="logistics_title">FAQ</h3>
      <div class="faq__inner_container">
        <div class="faq__card_container">
          <div class="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div class="faq__card_container">
          <div class="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div class="faq__card_container">
          <div class="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div class="faq__card_container">
          <div class="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div class="faq__card_container">
          <div class="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        <div class="faq__card_container">
          <div class="faq__card_title">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <Image src={FaqPlus} alt=""/>
        </div>
        
      </div>
    </div>
    {/* <!--faq section end--> */}
   </div>

    <section id="form-section">
      <div class="footer__contact_container"
      style={{background:`url(${contactDown})`}}
      >
        <div class="custom_container flex_center">
          <div class="footer__contact_left">
            <Image width="70%" src={footerContact} alt="footerContact"/>
          </div>
          <div class="footer__contact_right">
            <div id="footer__contact_form_container_id" class="footer__contact_form_container">
              <h2>
                Our Experts manage your store, so that you focus on growing your
                business
              </h2>
              <div style={{position: "relative"}}>
                <div class="footer__contact_inputField">
                  <form id="footer__contact_input_id" style={{display: "flex",gap: "1rem"}} action="#">
                    <div class="footer_single_input">
                      <p class="footer__country_code">+91</p>
                      <input id="phone_number" type="tel" placeholder="Enter Contact Number" maxLength="10" minLength="10" onChange={onChange} 
                      onkeyup="this.value = this.value.replace(/[^0-9]/g, '')" required=""/>
                    </div>
                    <button id="footer__contact_button_id" type="submit" class="btn btn-primary" onClick={(e)=>formSubmit(e)}>
                      Submit
                    </button>
                  </form>
                </div>
                <p id="errortext"></p>
              </div>
            </div>

            {/* <!-- thankyou message --> */}
            <div class="footer__contact_form_container footer__contact_success hide">
              <Image src={thankyouImg} alt="thankyou" height="70px"/>
              <div class="footer__contact_inputField">
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
      <Image style={{width: "100%"}} class="marginScalingImg" src={footerUp} alt="steps"/>

      <div class="footer__container">
        <div class="footer__bg_wrapper"></div>
        <div class="footer__left">
          <div>
            <Image src={logo} alt="logo"/>
            <div class="footer__left_social">
              <Image src={instagram} alt="instagram"/>
              <Image src={facebook} alt="facebook"/>
              <Image src={Linkedin} alt="Linkedin"/>
              <Image src={Twitter} alt="Twitter"/>
            </div>
            <li>
              <Link  href="https://becho.fastor.ai/"><button id="header__btn_id" class="btn btn-primary">
                  Get Started
                  <Image style={{display:"inline-block",marginLeft: "0.5rem"}} 
                  src={ArrowRight} alt="arrow-right"/></button></Link>
            </li>

          </div>
        </div>
        <div class="footer__right_desktop">
          <ul>
            <li class="footer__menu_heading">Product</li>
            <li><Link href="#">E-Store</Link></li>
            <li><Link href="#">Payment</Link></li>
            <li><Link href="#">Logistics</Link></li>
            <li><Link href="#">Inventory</Link></li>
            <li><Link href="#">Sales &amp; Marketing</Link></li>
            <li><Link href="#">Analytics</Link></li>
            <li><Link href="#">Billing</Link></li>
          </ul>
          <ul>
            <li class="footer__menu_heading">Business</li>
            <li><Link href="#">Restaurant</Link></li>
            <li><Link href="#">Dine-in</Link></li>
            <li><Link href="#">QSR</Link></li>
            <li><Link href="#">Takeaway</Link></li>
            <li><Link href="#">Retail</Link></li>
            <li><Link href="#">Service</Link></li>
            <li><Link href="#">Entrepreneur</Link></li>
          </ul>
          <ul>
            <li class="footer__menu_heading">Channels</li>
            <li><Link href="#">Direct</Link></li>
            <li><Link href="#">Reseller</Link></li>
            <li><Link href="#">Marketplace</Link></li>
          </ul>
          <ul>
            <li class="footer__menu_heading">FAQ</li>
            <li><Link href="#">Terms and Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">About Us</Link></li>
          </ul>
        </div>
        <div class="footer__right_mobile">
          <ul>
            <li class="footer__menu_heading"><Link href="#">Product</Link></li>
            <li class="footer__menu_heading"><Link href="#">Business</Link></li>
            <li class="footer__menu_heading"><Link href="#">Channels</Link></li>
            <li class="footer__menu_heading"><Link href="#">FAQ</Link></li>
            <li class="footer__menu_heading"><Link href="#">Term and Conditions</Link></li>
            <li class="footer__menu_heading"><Link href="#">Privacy Policy</Link></li>
            <li class="footer__menu_heading"><Link href="#">About Us</Link></li>
          </ul>
        </div>
      </div>
      <p class="footer__copyright">Copyright 2022</p>
    </footer>
    {/* <!-- foooter end --> */}


    </div>


    )
}