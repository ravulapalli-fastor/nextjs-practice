import Image from 'next/image';
import Head from "next/head";
import Link from 'next/link';
import Ondcbutton from '../components/Ondcbutton';

// images
import lineDrawOrangeImg from "../public/lineDrawImg.png";
import orangeLineSolidImg from "../public/orangeLineSolidImg.png";
import productImg from "../public/productImg.png";

import rightArrow from "../public/arrow-right.svg";

import lineUp from "../public/line_top.svg";
import lineMiddle from "../public/circlestLine.svg";
import lineDown from "../public/line_bottom.svg";

import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Faq from '../components/Faq';
import Header from '../components/Header';
import heroImg from "../public/heroImg.png"
import dottedLine from "../public/circleMobileLine.svg";

import { useEffect } from 'react';

export default function Home(){
  


  return (
    <>
        <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
      rel="stylesheet"
  />
    <link href='https://fonts.googleapis.com/css?family=Inter&display=swap' rel='stylesheet'/>

    </Head>


    <Header/>
    <div className='hero_main_container'>
    <div className="hero__container"> 
      <Image 
      data-aos-delay="800"data-aos="zoom-in-up"
      className="hero_image_desktop" 
      src={heroImg}
      width="auto"
      height="auto"
      alt="hero"/>
  </div> 
  </div>

    
      <div className='ondc_main_container'>

    <div class="operations_header_container">
          <div class="data"> 
            <h1 class="operations_main_title">Open Network for Digital Commerce</h1>
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

    {/* ondc data section start */}
    <div className="benefits_header_container">
    <h1 className="benefits_title">Benefits of selling on ONDC</h1>
    {/* <Image className="orange_solid_line"width="auto" height="auto" alt="" src={orangeLineSolidImg}/> */}
    </div>
    <section className="ondc_data_container">
      <div className="ondc_data_left">
        <Image
          style={{paddingTop:"1.5rem"}}
          src={productImg}
         width="auto"
         height="auto"
         alt=""
        />
      </div>
      
      <div className="ondc_data_right">

         <div className="ondc_data_right_inner_container inner_container0">
          <div class="container0 icon_container"></div>

          <p className="ondc_data_right_description">
          Sell along with millions of sellers
          </p>
         </div>

         <div className="ondc_data_right_inner_container inner_container1" 
         >
          <div class="container1 icon_container"></div>
          <p className="ondc_data_right_description ">
          Lower cost of doing business
          </p>
         </div>

         <div className="ondc_data_right_inner_container inner_container2">
          <div class="container2 icon_container"></div>
          <p className="ondc_data_right_description">
          More options for logistics and fulfilment
          </p>
         </div>

         <div className="ondc_data_right_inner_container inner_container3"
         >
          <div class="container3 icon_container"></div>
          <p className="ondc_data_right_description">
          Easily expand your reach
          </p>
         </div>

         <div className="ondc_data_right_inner_container inner_container4"
         >

           <div class="container4 icon_container"></div>

          <p className="ondc_data_right_description">
          Buyers and sellers do not have to use the same app for transaction
          </p>
         </div>

      </div>
    </section>
   {/* ondc benefits section end */}

    {/* button container */}
    <div className="benefits_below_btn_container">
        <p className="btn_data">
          Enable ONDC access for your store and reach million of people
        </p>
        <Link className="ondc_btn" href="https://becho.fastor.ai/">
            <button id="ondc_btn_id" className="btn btn-primary">
              Get Started
              <Image style="display: inline-block; margin-left: 0.5rem" 
              src={rightArrow} 
              width="20"
              height="20"
              alt="arrow-right"/>
            </button>
        </Link>
    </div>

    {/* circle data container */}
    <div className='ondc_circle_main_container'>
      {/* circle */}
      <div className='ondc_circle_dots_box'>
        <div className='ondc_circle_inner_box'>
          <Image
          className="ondc_fastor"
          src="/../public/ondc_fastor_img.png"
          width="33"
          height="68"
          alt="ondc_fastor"
          // style={{margin:"8% 28%"}}
          />
        </div>
      </div>
    <div className='ondc_circle_lines_container desktop'>
      <Image src={lineUp} alt="" width="auto" height="auto"/>
      <div className='ondc_circle_middleLine_container'>
        <Image className="middle_line"src={lineMiddle}alt="" width="auto" height="auto"/>
      </div>
      <Image src={lineDown}alt="" width="auto" height="auto"/>
    </div>

    <div class="ondc_circle_lines mobile">
      <Image 
      alt="ondc"
      width="auto"
      height="auto"
      src={dottedLine}
      />
      <div className="ondc_circle_btns_container">
      <Ondcbutton data="Get a customised seller dashboard for ONDC orders"
       color="#7B7D8A"/>
      <Ondcbutton data="Analyse customer behaviour"
       color="#DEAF37"/>
      <Ondcbutton data="Analyse customer behaviour"
       color="#3766DE"/>
    </div>

    </div>
    <div className="ondc_circle_btns_container desktop">
      <Ondcbutton data="Get a customised seller dashboard for ONDC orders"
       color="#7B7D8A"/>
      <Ondcbutton data="Analyse customer behaviour"
       color="#DEAF37"/>
      <Ondcbutton data="Analyse customer behaviour"
       color="#3766DE"/>
    </div>
    </div>

    {/* reviews section start */}
    <Reviews/>

    {/* ondc data section 2 start */}
    <div className='works_container'>
    <h1 className="works_title">How it works</h1>
    <section className="ondc_data_container works_inner_container">
      <div className="works_data_left">
      <Image
          src={"/../public/ondcProductImg2.png"}
         width="508"
         height="500"
         alt=""
        />
      </div>

      <ul className="ondc_ul">
         <li >Install the ONDC plugin on your Fastor Dashboard         </li>
         <li >All products in your catalogue will automatically get listed         </li>
         <li >Receive orders and dispatch orders          </li>
         <li >Track your order status          </li>
         <li >Plan accordingly </li>
         <li >Our delivery partners will help you fulfil orders         </li>
      </ul>

    </section>
    </div>
          {/* button container 2*/}
          <div className="btn_container_wrapper">
      <div className="button_container_bg_wrapper">    </div>
      <div className="button_container_bg_wrapper wrapper_2">    </div>
        <div className="benefits_below_btn_container btn_container2">
        <p className="btn_data"> 
            We will enable ONDC access for your store.
        </p>
        <Link className="ondc_btn" href="https://becho.fastor.ai/">
            <button id="ondc_btn_id" className="btn btn-primary">
              Get Started
              <Image style="display: inline-block; margin-left: 0.5rem" 
              src={rightArrow} 
              width="20"
              height="20"
              alt="arrow-right"/>
            </button>
        </Link>
        </div>
        </div>
    </div>

    <div className="features_and_faq">
      <Features/>
      <div className="faq_bg"></div>
      <Faq/>
    </div>

    <Footer/>
    </>
  )

}