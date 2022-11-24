import Rectangle from "../public/Rectangle 10020.png";
import Image from "next/image";

export default function Offer(){
    return (
        <div className="benefits_card_main_container">
        <h3 className="simplify_title">What do we offer?</h3>
        <div className="benefits_card_container">
          <div className="benefits_card_image" >
          <Image src={Rectangle} alt=""/>
          </div>
            <div className="benefits_card_data_container">
            <h3 className="benefits_card_data_title">Staff Management</h3>
            <p className="benefits_card_data_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>

        <div className="benefits_card_container reverse_flex">
          <div className="benefits_card_image" >
          <Image src={Rectangle} alt=""/>
          </div>
          <div className="benefits_card_data_container align_right" >
            <h3 className="benefits_card_data_title">Role Management</h3>
            <p className="benefits_card_data_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>

        <div className="benefits_card_container">
          <div className="benefits_card_image" >
            <Image src={Rectangle} alt=""/>
          </div>
            <div className="benefits_card_data_container">
            <h3 className="benefits_card_data_title">Activity tracking </h3>
            <p className="benefits_card_data_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>
      </div>    )
}