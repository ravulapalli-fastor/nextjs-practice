import Head from 'next/head'
import Image from 'next/image'

// images
import lineDrawOrangeImg from "../public/lineDrawImg.png";
import orangeLineSolidImg from "../public/orangeLineSolidImg.png";
import productImg from "../public/productImg.png";
import benifitsImg0 from "../public/benifitsImg0.png";
import benifitsImg1 from "../public/benifitsImg1.png";
import benifitsImg2 from "../public/benifitsImg2.png";
import benifitsImg3 from "../public/benifitsImg3.png";
import benifitsImg4 from "../public/benifitsImg4.png";


export default function Home(){

  return (
    <>
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
    <h1 className="benefits_title">Benefits of selling on ONDC</h1>
    <Image className="orange_solid_line"width="auto" height="auto" alt="" src={orangeLineSolidImg}/>
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
   {/* ondc section end */}



    </div>
    </>
  )

}