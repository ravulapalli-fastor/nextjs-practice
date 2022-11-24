import Image from "next/image";
import Left from "../public/toLeftIcon.png";
import Right from "../public/toRightIcon.png";
import user1 from "../public/UserPic1.svg";
import user2 from "../public/UserPic2.svg";


function Reviews(){

    const userArray=[
        {
            image:"/../public/UserPic1.svg",
            data:"Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
            name:"Rayhan Curran"
        },
        {
            image:"/../public/UserPic2.svg",
            data:"As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
            name:"Kayley Frame"
        },
        {
            image:"../public/UserPic1.svg",
            data:"Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
            name:"Rayhan Curran"
        },
        {
            image:"../public/UserPic2.svg",
            data:"As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
            name:"Kayley Frame"
        }
    ]

    return (
        <>
          <div className="reviews_main_container">

            <div className="reviews_bg_container"> </div>
            <div className="reviews_inner_container">
                <h3 className="reviews_title">Our Happy Clients</h3>
                <div className="reviews_data_container">
                    <Image
                    alt="arrow"
                    width="30"
                    height="40"
                    src={Left}
                    />
                    <div className="reviews_data_inner_container">
                        
                        {/* {userArray?.map((e,index)=>( */}
                        <div className="review_card" >
                            <Image
                            width="100"
                            height="100"
                            alt="user"
                            src={user1}
                            />
                            <div className="review_card_data">
                                <p>Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
                                <p>Rayhan Curran</p>
                            </div>
                        </div>
                        <div className="review_card" >
                            <Image
                            width="100"
                            height="100"
                            alt="user"
                            src={user2}
                            />
                            <div className="review_card_data">
                                <p>As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p>
                                <p>Kayley Frame</p>
                            </div>
                        </div>

                        {/* ))} */}
                    </div>
                    <Image
                    alt="arrow"
                    width="30"
                    height="40"
                    src={Right}

                    />
                </div>
            </div>
          </div>
        </>
    )
}

export default Reviews;