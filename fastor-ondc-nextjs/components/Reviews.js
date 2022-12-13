import Image from "next/image";
import CommaUp from "../public/CommaUp.svg";
import CommaDown from "../public/CommaDown.svg";
import reviewProfileImg from "../public/reviewProfileImg.png";
import arrowLeft from "../public/toLeftIcon.png";
import arrowRight from "../public/toRightIcon.png";

import { useEffect, useState } from "react";


function Reviews(){

    const [activeReview, setactiveReview] = useState(0);

    const REVIEW_LIST=[
        {image:reviewProfileImg,
        title:"James",
        sub_title:"Business Analist",
        description:"From the moment the crew everything went smoothly and much more quickly than I ever would have expected! Now I have a beautiful water feature, patio, fire pit (that looks like a real tree stump!), and retaining wall in my own backyard! "
       },
       {image:reviewProfileImg,
       title:"James2",
       sub_title:"Business Analist",
       description:"From the moment the crew everything went smoothly and much more quickly than I ever would have expected! Now I have a beautiful water feature, patio, fire pit (that looks like a real tree stump!), and retaining wall in my own backyard! "
      },
      {image:reviewProfileImg,
      title:"James3",
      sub_title:"Business Analist",
      description:"From the moment the crew everything went smoothly and much more quickly than I ever would have expected! Now I have a beautiful water feature, patio, fire pit (that looks like a real tree stump!), and retaining wall in my own backyard! "
     },


    ];

    useEffect(()=>{

    });

    

    // const [arr,setArr]=useState(reviewArr);

    const handleArrNext=()=>{
        console.log(activeReview);
        setactiveReview(prev=>(prev+1)%(REVIEW_LIST.length));
        console.log(activeReview);
    }
    const handleArrPrev=()=>{
        if(activeReview===0){
            setactiveReview(REVIEW_LIST.length-1);
           }else{
            setactiveReview(prev=>prev-1);
           }
    }

    return (
        <div className="reviews_main_container">

         <h1 className="reviews_title">What people say about us</h1>
         <div className="reviews_data_arrow_container">
         <div className="reviews__next_btn" onClick={()=>handleArrPrev()}>
              <i style={{marginLeft: "-0.2rem"}} className="fa fa-angle-left">
              <Image
              width={15}
              height={20}
              alt="left"
              src={arrowLeft}
              />
              </i> 
            </div>   
            <div className="reviews_data_container">
      
            <div className="reviews_profile_container">
                <Image
                width={100}
                height={100}
                src={REVIEW_LIST[activeReview]?.image}
                 alt="image"
                 class="profileImg"
                />
                <div className="reviews_profile_data">
                    <p>{REVIEW_LIST[activeReview]?.title}</p>
                    <p>{REVIEW_LIST[activeReview]?.sub_title}</p>
                </div>
            </div>

            <div className="reviews_data_right_container">
                <Image
                className="commaUp comma"
                width={100}
                height={100}
                alt="comma"
                src={CommaUp}
                />
                <p>
                {REVIEW_LIST[activeReview]?.description}
                </p>
                <Image
                className="commaDown comma"
                width={100}
                height={100}
                alt="comma"
                src={CommaDown}
                />
            </div>
            </div>
            <div className="reviews__prev_btn" onClick={()=>handleArrNext()}>
              <i style={{marginRight: "-0.2rem"}} className="fa fa-angle-right">
              <Image
              width={15}
              height={20}
              alt="right"
              src={arrowRight}
              /> 
              </i>           
            </div>

         </div>

         <div className="reviews_dots_container">
              <span className="dot" style={{background:activeReview===0?"#FF681A":"#df9656"}}></span>
              <span className="dot" style={{background:activeReview===1?"#FF681A":"#df9656"}}></span>
              <span className="dot" style={{background:activeReview===2?"#FF681A":"#df9656"}}></span>
          </div>

        </div>
    )
}

export default Reviews;