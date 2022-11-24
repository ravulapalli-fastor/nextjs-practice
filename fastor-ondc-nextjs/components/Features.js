import Image from "next/image";

// images
import fetureIcon1 from "../public/fetureIcon1.svg";
import fetureIcon2 from "../public/fetureIcon2.svg";
import fetureIcon3 from "../public/fetureIcon3.svg";
import fetureIcon4 from "../public/fetureIcon4.svg";
import fetureIcon5 from "../public/fetureIcon5.svg";
import fetureIcon6 from "../public/fetureIcon6.svg";
import fetureIcon7 from "../public/fetureIcon7.svg";
import fetureIcon8 from "../public/fetureIcon8.svg";
import fetureIcon9 from "../public/fetureIcon9.svg";



function Features() {
  return (
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
          <div className="features__card pos_desktop">
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
        <div className="features__card pos_mobile">
            <Image  className="features__card_img" src={fetureIcon3} alt="feature"/>
            <h3 className="features__card_title">POS</h3>
          </div>

        <div className="features__card">
          <Image className="features__card_img" src={fetureIcon9} alt="feature"/>
          <h3 className="features__card_title">Custom Domain</h3>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Features