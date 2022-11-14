import Image from 'next/image'
import Link from 'next/link';
import Ondcbutton from '../components/Ondcbutton';

// images
import lineDrawOrangeImg from "../public/lineDrawImg.png";
import orangeLineSolidImg from "../public/orangeLineSolidImg.png";
import productImg from "../public/productImg.png";
import benifitsImg0 from "../public/benifitsImg0.png";
import benifitsImg1 from "../public/benifitsImg1.png";
import benifitsImg2 from "../public/benifitsImg2.png";
import benifitsImg3 from "../public/benifitsImg3.png";
import benifitsImg4 from "../public/benifitsImg4.png";

import rightArrow from "../public/arrow-right.svg";

import lineUp from "../public/line_top.svg";
import lineMiddle from "../public/line_st.svg";
import lineDown from "../public/line_bottom.svg";

import ProfileImg from "../public/reviewProfileImg.png";
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Faq from '../components/Faq';
import Header from '../components/Header';

export default function Home(){




  return (
    <>

    <Header/>
    
      <div className='ondc_main_container'>

      <div className="ondc_header_container">
      <div>
        <h1 className="ondc_main_title">Open Network for Digital Commerce</h1>
        <p className="ondc_main_description">
         Now power up your online business by making shipping easy!
        </p>
      </div>

      <div  className="ondc_img_line">
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
    <Image className="orange_solid_line"width="auto" height="auto" alt="" src={orangeLineSolidImg}/>
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

         <div className="ondc_data_right_inner_container">
          <Image
          alt="img0"
          width="auto"
          height="auto"
          src={benifitsImg0}
          />
          <p className="ondc_data_right_description">
          Sell along with millions of sellers
          </p>
         </div>

         <div className="ondc_data_right_inner_container">
          <Image
          alt="img1"
          width="auto"
          height="auto"
          src={benifitsImg1}
          />
          <p className="ondc_data_right_description">
          Lower cost of doing business
          </p>
         </div>

         <div className="ondc_data_right_inner_container">
          <Image 
          alt="img2"
          width="auto"
          height="auto"
          src={benifitsImg2}
          />
          <p className="ondc_data_right_description">
          More options for logistics and fulfilment
          </p>
         </div>

         <div className="ondc_data_right_inner_container">
          <Image 
          alt="img3"
          width="auto"
          height="auto"
          src={benifitsImg3}
          />
          <p className="ondc_data_right_description">
          Easily expand your reach
          </p>
         </div>

         <div className="ondc_data_right_inner_container">
          <Image 
          alt="img4"
          width="auto"
          height="auto"
          src={benifitsImg4}
          />
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
        <Link className="ondc_btn" href="#">
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
          {/* <Image
          src="/../public/ondcFastorMobile.svg"
          width="33"
          height="68"
          alt="ondc_fastor"
          // style={{margin:"8% 28%"}}
          /> */}
        </div>
      </div>
    <div className='ondc_circle_lines_container'>
      <Image src={lineUp} alt="" width="auto" height="auto"/>
      <div className='ondc_circle_middleLine_container'>
        <div className='line_dot'>..</div>
        <Image className="middle_line"src={lineMiddle}alt="" width="auto" height="auto"/>
      </div>
      <Image src={lineDown}alt="" width="auto" height="auto"/>
    </div>
    <div className="ondc_circle_btns_container">
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

      <ul className=" ondc_ul">
         <li >Install the ONDC plugin on your Fastor Dashboard         </li>
         <li >All products in your catalogue will automatically get listed         </li>
         <li >Receive orders and dispatch orders          </li>
         <li >Track your order status          </li>
         <li >Plan accordingly          </li>
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
          Enable ONDC access for your store and reach million of people
        </p>
        <Link className="ondc_btn" href="#">
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