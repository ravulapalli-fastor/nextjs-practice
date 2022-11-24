import Image from "next/image";

import FaqPlus from "../public/faqPlusImg.svg";

const Faq = () => {
  return (
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

  )
}

export default Faq