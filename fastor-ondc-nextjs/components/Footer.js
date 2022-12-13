import Image from "next/image";
import Link from "next/link";
// import "../styles/footer.module.css";

import footerContact from "../public/footerContact.svg";
import contactDown from "../public/contactDown.svg";
import thankyouImg from "../public/thankyouImg.svg"
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import Linkedin from "../public/Linkedin.svg";
import Twitter from "../public/Twitter.svg";
import logo from "../public/logo.svg";
import ArrowRight from "../public/arrow-right.svg";
import arrowUp from "../public/arrowUp.svg";
import arrowDown from "../public/arrowDown.svg";



export default function Footer(){
        // footer dropDown
    
        var products=["E-store","Payments","Logistics","Operations","Sales & Marketing","QR Ordering","ONDC Integration"]
        var business=["Restaurant","Retail","QSR","Takeaway","Dine-in","Service","Entrepreneur"]
        var channel=["Direct","Reseller","Marketplace"];
  
    function dropDown(arr){
    document.querySelector(".dropDown").innerText="";
    arr.map((e)=>{
      let li=document.createElement("p");
      console.log(e)
      li.setAttribute("id",e);
      let a=document.createElement("a");
      a.innerText=e;
      li.append(a);
      document.querySelector(".dropDown").append(li);
      
      li.addEventListener("click",function(){
        if(e==="E-store") window.location.href="./e-store.html";
        else if (e==="Payments") window.location.href="./payment.html";
        else if(e==="Logistics") window.location.href="./logistics.html";
        else if (e==="Operations") window.location.href="./operations.html";
        else if (e==="Sales & Marketing") window.location.href="./salesMarketing.html";
        else if(e==="ONDC Integration") window.location.href="./ondc.html";
        else if (e==="QR Ordering") window.location.href="./qr.html";
        else if(e==="ONDC Integration") window.location.href="./ondc.html";
        else if (e==="Retail") window.location.href="./retail.html";
        else if (e==="Restaurant") window.location.href="./restaurant.html";
  
        else window.location.href="#";
      });
    })
  }
  
  
        function dropDownOpen(dataName){
          document.querySelector(".dropDown").classList.remove("hide");
          document.querySelector(".dropDown").classList.add("showFlex");
          if(dataName==="products"){
          dropDown(products);
          document.querySelector(".dropDownClose").classList.remove("hide");
          document.querySelector(".dropDownClose").classList.add("show");
          document.querySelector(".dropDownOpen").classList.add("hide");
          document.querySelector(".dropDownOpen").classList.remove("show");
  
          // business
          document.querySelector(".dropDownClose2").classList.remove("show");
          document.querySelector(".dropDownClose2").classList.add("hide");
          document.querySelector(".dropDownOpen2").classList.add("show");
          document.querySelector(".dropDownOpen2").classList.remove("hide");
          // channel
          document.querySelector(".dropDownClose3").classList.remove("show");
          document.querySelector(".dropDownClose3").classList.add("hide");
          document.querySelector(".dropDownOpen3").classList.add("show");
          document.querySelector(".dropDownOpen3").classList.remove("hide");
  
  
          }else if(dataName==="business"){
          dropDown(business);
          document.querySelector(".dropDownClose2").classList.remove("hide");
          document.querySelector(".dropDownClose2").classList.add("show");
          document.querySelector(".dropDownOpen2").classList.add("hide");
          document.querySelector(".dropDownOpen2").classList.remove("show");
          // product
          document.querySelector(".dropDownClose").classList.remove("show");
          document.querySelector(".dropDownClose").classList.add("hide");
          document.querySelector(".dropDownOpen").classList.add("show");
          document.querySelector(".dropDownOpen").classList.remove("hide");
          // channel
          document.querySelector(".dropDownClose3").classList.remove("show");
          document.querySelector(".dropDownClose3").classList.add("hide");
          document.querySelector(".dropDownOpen3").classList.add("show");
          document.querySelector(".dropDownOpen3").classList.remove("hide");
  
  
  
          }else{
            dropDown(channel);
            document.querySelector(".dropDownClose3").classList.remove("hide");
          document.querySelector(".dropDownClose3").classList.add("show");
          document.querySelector(".dropDownOpen3").classList.add("hide");
          document.querySelector(".dropDownOpen3").classList.remove("show");
  // business
          document.querySelector(".dropDownClose2").classList.remove("show");
          document.querySelector(".dropDownClose2").classList.add("hide");
          document.querySelector(".dropDownOpen2").classList.add("show");
          document.querySelector(".dropDownOpen2").classList.remove("hide");
          // product
          document.querySelector(".dropDownClose").classList.remove("show");
          document.querySelector(".dropDownClose").classList.add("hide");
          document.querySelector(".dropDownOpen").classList.add("show");
          document.querySelector(".dropDownOpen").classList.remove("hide");
  
          }
        }
  
        function dropDownClose(dataName){
          document.querySelector(".dropDown").classList.add("hide");
          document.querySelector(".dropDown").classList.remove("showFlex");
          if(dataName==="products"){
          document.querySelector(".dropDownOpen").classList.remove("hide");
          document.querySelector(".dropDownOpen").classList.add("show");
          document.querySelector(".dropDownClose").classList.add("hide");
          document.querySelector(".dropDownClose").classList.remove("show");
         }else if(dataName==="business"){
          document.querySelector(".dropDownOpen2").classList.remove("hide");
          document.querySelector(".dropDownOpen2").classList.add("show");
          document.querySelector(".dropDownClose2").classList.add("hide");
          document.querySelector(".dropDownClose2").classList.remove("show");
         }else{
          document.querySelector(".dropDownOpen3").classList.remove("hide");
          document.querySelector(".dropDownOpen3").classList.add("show");
          document.querySelector(".dropDownClose3").classList.add("hide");
          document.querySelector(".dropDownClose3").classList.remove("show");
         }
  
        }
  
    const onChange=(e) =>{
      e.target.value = e.target.value.replace(/[^0-9]/g, '');

        document.getElementById("errortext").style = "display:none";
        validate();
      


      }
    
      const validate=()=> {
        const phone_number = document.getElementById("phone_number").value;
        console.log(phone_number)

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
      console.log("h2i")

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
          console.log("final")
        });
    }
    return (
        <>
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
                      <input id="phone_number" type="tel" placeholder="Enter Contact Number" maxLength="10" minLength="10" onChange={(e)=>onChange(e)} 
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                        e.preventDefault();
                        }
                        }}
                      required=""/>
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
            <Link href="/"><Image src={logo} alt="logo"/></Link>
            <div className="footer__left_social">
              <Image src={instagram} alt="instagram" className="social_icon"/>
              <Image src={facebook} alt="facebook" className="social_icon"/>
              <Image src={Linkedin} alt="Linkedin" className="social_icon"/>
              <Image src={Twitter} alt="Twitter" className="social_icon"/>
            </div>
            </div>
            <li>
              <Link  href="https://becho.fastor.ai/"><button id="header__btn_id" className="btn btn-primary">
                  Get Started
                  <Image style={{display:"inline-block",marginLeft: 8}} 
                  src={ArrowRight} alt="arrow-right"/></button></Link>
            </li>

        </div>
        <div className="footer__right_desktop">
        <ul>
            <li className="footer__menu_heading ">Product</li>
            <li className="underline footer_page_links"><Link href="./e-store.html">E-Store</Link></li>
            <li className="underline footer_page_links"><Link href="/payment">Payment</Link></li>
            <li className="underline footer_page_links"><Link href="./logistics.html">Logistics</Link></li>
            <li className="underline footer_page_links"><Link href="./operations.html">Operations</Link></li>
            <li className="underline footer_page_links"><Link href="./salesMarketing.html">Sales &amp; Marketing</Link></li>
            <li className="underline footer_page_links"><Link href="./qr.html">QR Ordering</Link></li>
            <li className="underline footer_page_links"><Link href="./ondc.html">ONDC Integration</Link></li>
          </ul>
          <ul>
            <li className="footer__menu_heading ">Business</li>
            <li className="underline footer_page_links"><Link href="./restaurant.html">Restaurant</Link></li>
            <li className="underline footer_page_links"><Link href="./retail.html">Retail</Link></li>
            <li className="underline footer_page_links"><Link href="#">QSR</Link></li>
            <li className="underline footer_page_links"><Link href="#">Takeaway</Link></li>
            <li className="underline footer_page_links"><Link href="#">Dine-in</Link></li>
            <li className="underline footer_page_links"><Link href="#">Service</Link></li>
            <li className="underline footer_page_links"><Link href="#">Entrepreneur</Link></li>
          </ul>
            <ul>
          <li className="footer__menu_heading">Channels</li>
          <li className="underline footer_page_links"><Link href="#">Direct</Link></li>
          <li className="underline footer_page_links"><Link href="#">Reseller</Link></li>
          <li className="underline footer_page_links"><Link href="#">Marketplace</Link></li>
        </ul>
        <ul>
          <li className="footer__menu_heading">Others</li>
          <li className="underline footer_page_links"><Link href="#">FAQ</Link></li>
          <li className="underline footer_page_links"><Link href="#">Terms and Conditions</Link></li>
          <li className="underline footer_page_links"><Link href="#">Privacy Policy</Link></li>
          <li className="underline footer_page_links"><Link href="#">About Us</Link></li>
        </ul>
        </div>
        <div className="footer__right_mobile">
        <ul>
          <li className="footer__menu_heading"><Link href="#">Product</Link>
            <Image src={arrowDown} alt="down" onClick={()=>dropDownOpen('products')} className="dropDownOpen"/>
            <Image src={arrowUp} alt="up" onClick={()=>dropDownClose('products')} className="dropDownClose hide"/>
          </li>
          <li className="footer__menu_heading"><Link href="#">Business</Link>
            <Image src={arrowDown} alt="down" onClick={()=>dropDownOpen('business')} className="dropDownOpen2"/>
            <Image src={arrowUp} alt="up" onClick={()=>dropDownClose('business')} className="dropDownClose2 hide"/>
          </li>
          <li className="footer__menu_heading"><Link href="#">Channels</Link>
            <Image src={arrowDown} alt="down" onClick={()=>dropDownOpen('channel')} className="dropDownOpen3"/>
            <Image src={arrowUp} alt="up" onClick={()=>dropDownClose('channel')} className="dropDownClose3 hide"/>
          </li>
        </ul>
        <div className="dropDown hide">
        </div>
        <ul>
          <li className="footer__menu_heading"><Link href="#">FAQ</Link></li>
          <li className="footer__menu_heading"><Link href="#">Term and Conditions</Link></li>
          <li className="footer__menu_heading"><Link href="#">Privacy Policy</Link></li>
          <li className="footer__menu_heading"><Link href="#">About Us</Link></li>
        </ul>

        </div>
      </div>
      <p className="footer__copyright"
      style={{textAlign: "center",
      color:" #fff",
      fontSize: 16,
      padding: 16,
      margin: 0,
      background: "rgba(39, 43, 65, 1)",
      zIndex: 2,
      }} 
      >Copyright 2022</p>
    </footer>
    </>
    )
}