import Image from "next/image";
import Link from "next/link";

import footerContact from "../public/footerContact.svg";
import contactDown from "../public/contactDown.svg";
import thankyouImg from "../public/thankyouImg.svg"
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import Linkedin from "../public/Linkedin.svg";
import Twitter from "../public/Twitter.svg";
import logo from "../public/logo.svg";
import ArrowRight from "../public/arrow-right.svg";



export default function Footer(){
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