import Image from "next/image";
import CommaUp from "../public/CommaUp.png";
import CommaDown from "../public/CommaDown.png";
import ProfileImg from "../public/reviewProfileImg.png";


function Reviews(){
    return (
        <div className="reviews_main_container">

         <h1 className="reviews_title">What people say about us</h1>
         <div className="reviews_data_container">

            <div className="reviews_profile_container">
                <Image
                width="auto"
                height="auto"
                src={ProfileImg}
                 alt=""
                 class="profileImg"
                />
                <div className="reviews_profile_data">
                    <p>James</p>
                    <p>Business Analist</p>
                </div>
            </div>

            <div className="reviews_data_right_container">
                <Image
                className="commaUp comma"
                width="auto"
                height="auto"
                alt="comma"
                src={CommaUp}
                />
                <p>
                From the moment the crew everything went smoothly and much more quickly than I ever would have expected! Now I have a beautiful water feature, patio, fire pit (that looks like a real tree stump!), and retaining wall in my own backyard! 
                </p>
                <Image
                className="commaDown comma"
                width="auto"
                height="auto"
                alt="comma"
                src={CommaDown}
                />
            </div>
         </div>

         <div className="reviews_dots_container">
              <span className="dot" onClick={()=>{}}></span>
              <span className="dot" onClick={()=>{}}></span>
              <span className="dot" onClick={()=>{}}></span>
          </div>

        </div>
    )
}

export default Reviews;