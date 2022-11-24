import Image from "next/image";

import ShopAddImg from "../public/shop-add.svg";
import SettingImg from "../public/setting-3.svg";
import emptyWalletImg from "../public/empty-wallet-tick.svg";

export default function Manage(){
    return (
        <div className="simplify__container">
        <h3 className="simplify_title">Manage everything for your online bussiness from a single dashboard</h3>
        <div className="simplify__inner_container">

          <div className="simplify__card_container">
            <Image  src={ShopAddImg} alt=""/>
            <p style={{textAlign: "center"}}>
            No need for a physical store manager
            </p>
          </div>
          <div className="simplify__card_container">
            <Image  src={SettingImg} alt=""/>
            <p style={{textAlign: "center"}}>
            Easily manageable for multiple branches of one store
            </p>
          </div>
          <div className="simplify__card_container">
            <Image  src={emptyWalletImg} alt=""/>
            <p style={{textAlign: "center"}}>
            Save your money upto 3 times.             
            </p>
          </div>
          {/* <div className="simplify__card_container">
            <Image style={{marginLeft: "35%"}} src={BoxTick} alt=""/>
            <p style={{textAlign: "center"}}>
              Provide your customers option of both Pickup and Delivery           
            </p>
          </div> */}

        </div>
               
      </div>

    )
}