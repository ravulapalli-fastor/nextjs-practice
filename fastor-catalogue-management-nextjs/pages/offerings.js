import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



import review1 from "../public/reviewImg1.png";
import review2 from "../public/reviewImg2.png";
import review3 from "../public/reviewImg3.png";
import review4 from "../public/reviewImg4.png";
import review5 from "../public/reviewImg5.png";

function Offerings(){

      // reviews cards
      // var initialReviewIndex=0;
      var reviews_data_obj=
        [
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"1. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"2. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"3. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"4. It was a very good experience",
            },
            {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. ",
            title:"5. It was a very good experience",
            }
       ];
      const [initialReviewIndex,setReviewIndex]=useState(Math.floor(reviews_data_obj.length/2));

       var userProfileImgArr=[
        "../public/reviewImg1.png",        
        "../public/reviewImg2.png",
        "../public/reviewImg3.png",        
        "../public/reviewImg4.png",
        "../public/reviewImg5.png"       
       ];
      const [profile,setProfile]=useState(userProfileImgArr);
      function displayReviewCard(index){
        console.log(index,"disFunc")
            document.querySelector(".reviews__card_mobile_containerM")
            .innerText="";

        let reviews_card= document.createElement("div");
        reviews_card.setAttribute("class","reviews__cardM");

        let reviews_card_description= document.createElement("p");
        reviews_card_description.setAttribute("class","reviews__card_descriptionM");
        let reviews_card_title= document.createElement("h3");
        reviews_card_title.setAttribute("class","reviews__card_titleM");
        
        reviews_card_description.innerText=`${reviews_data_obj[index].description}`;
        reviews_card_title.innerText=`${reviews_data_obj[index].title}`;

        reviews_card.append(reviews_card_title,reviews_card_description);
        // reviews_card_cont.append(reviews_card);

        document.querySelector(".reviews__card_mobile_container")
        .append(reviews_card);

      }
      useEffect(()=>{
        displayReviewCard(initialReviewIndex);
    },[]);

    // ,displayReviewCard
            // scroll left
            function scrollLeftOnClicked(elmentclassName) {
                var container = document.querySelector(`.${elmentclassName}`);
                // sideScroll(container, "right", 5, 600, 5);
                let profileNew=[...profile];
                if(initialReviewIndex<reviews_data_obj.length-1){
                  setReviewIndex(prev=>prev+1);
                  let lastImg=profileNew.shift();
                  profileNew.push(lastImg);
                  setProfile(profileNew);
                }
                displayReviewCard(initialReviewIndex);
                // setProfile(profileNew);
              }
              
              // scroll right
              function scrollRightOnClicked(elmentclassName) {
                var container = document.querySelector(`.${elmentclassName}`);
                // sideScroll(container, "left", 5, 600, 5);
                let profileNew=[...profile];
                if(initialReviewIndex>0){
                  setReviewIndex(prev=>prev-1);
                  let lastImg=profileNew.pop();
                  profileNew.unshift(lastImg);
                  setProfile(profileNew);
                }
                
                displayReviewCard(initialReviewIndex);
                // setProfile(profileNew);
              }



    return (
        <>
 
          <div className="reviews__card_container">
            <div className="reviews__next_btnM" onClick={()=>scrollRightOnClicked('reviews__card_containerM')}>
              <i  className="fa fa-angle-left">
              <Image
              width="20"
              height="30"
              alt=""
              src="/../public/toLeftIcon.png"
              />
              </i> 
            </div>
            <div className="reviews__prev_btnM" onClick={()=>scrollLeftOnClicked('reviews__card_containerM')}>
              <i  className="fa fa-angle-right">
              <Image
              width="20"
              height="30"
              alt=""
              src="/../public/toRightIcon.png"
              /> 
              </i>           
            </div>
            <div className="reviews__card_mobile_containerM"></div>
          </div>

          <div style={{textAlign:"center"}} className="user_profile_main_containerM">
          
          {profile?.map((e)=>(
            <span className="user_profile_containerM" key={e}>
              <Image className="user_profile_img" id="profile_img1"
              width="100" height="100" alt={e}
              src={`/${e}`}
              />
            </span> 
         ))} 

        </div>
   <div style={{textAlign:"center"}}>
    <span class="dot dot1" ></span>
    <span class="dot dot2" ></span>
    <span class="dot dot3"></span>
   </div>
  </>
)
}

export default Offerings;