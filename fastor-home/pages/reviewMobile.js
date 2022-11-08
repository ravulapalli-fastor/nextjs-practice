import reviewImage1 from "../public/reviewImage1.png"
import reviewImage2 from "../public/reviewImage2.png"
import reviewImage3 from "../public/reviewImage3.png"
import Image from "next/image"
import { useEffect } from "react"

export default function ReviewMobile(){

        var reviews_data_obj=
    [
        {
        description:"Fastor is a one stop solution for all your business needs. They have helped me to grow my business exponentially and now I am able to reach more customers.",
        title:"Nikhil Athani",
        sub_title:"Electronics Shop",
        image:reviewImage1
        },
        {
        "description":"Never knew that taking my grocery business online will be this quick and easy. The Fastor team assisted with everything and now I sell online too.They have definitely added so much value to my small offline business.",
        "title":"Mohit Pau",
        "sub_title":"Grocery Shop Owner",
        "image":reviewImage2
        },
        {
        "description":"I could not imagine that selling online would be this easy. Was able to launch my website within the same day.Great experience with Fastor.",
        "title":"Veer Vaddar",
        "sub_title":" Clothing Shop",
        "image":reviewImage3
        }
   ]

//    var displayReviewCard;
//   useEffect(()=>{
//    const displayReviewCard=(index)=>{
//         document.querySelector(".reviews__card_mobile_container")
//         .innerText=" ";

//         console.log("hellofirst",reviews_data_obj[0],index);

//     let reviews_card_cont= document.createElement("div");
//     reviews_card_cont.setAttribute("class","reviews__card_mobile_container");
//     let reviews_card= document.createElement("div");
//     reviews_card.setAttribute("class","reviews__card");
//     let reviews_card_description= document.createElement("p");
//     reviews_card_description.setAttribute("class","reviews__card_description");
//     let reviews_card_img= document.createElement("Image");
//     reviews_card_img.setAttribute("class","reviews__card_img");
//     let next_div=document.createElement("div");
//     let reviews_card_title= document.createElement("h3");
//     reviews_card_title.setAttribute("class","reviews__card_title");
//     let reviews_card_sub_title= document.createElement("p");
//     reviews_card_sub_title.setAttribute("class","reviews__card_sub_title");
    
//     reviews_card_description.innerText=`${reviews_data_obj[index].description}`;
//     reviews_card_img.src=`/${reviews_data_obj[index].image.png}`;
//     reviews_card_title.innerText=`${reviews_data_obj[index].title}`;
//     reviews_card_sub_title.innerText=`${reviews_data_obj[index].sub_title}`;

//     next_div.append(reviews_card_title,reviews_card_sub_title);
//     reviews_card.append(reviews_card_description,reviews_card_img,next_div);
//     reviews_card_cont.append(reviews_card);
//     console.log("hello",reviews_data_obj[2]);

//     document.querySelector(".reviews__card_mobile_container")
//     .append(reviews_card_cont);
//   }
//   displayReviewCard(0);

//   },[])
// displayReviewCard(0);

const displayReviewCard=()=>{
    console.log("hi")
    let prev=reviews_data_obj.pop();
    reviews_data_obj.unshift(prev);
}

    return (
          <div class="reviews__card_mobile_view">
            <div class="reviews__card_mobile_container">
                <div class="reviews__card">
                    <p>{reviews_data_obj[0].description}</p>
                    <Image src={`/${reviews_data_obj[0].image}.png`} width="50" height="50" alt="" class="reviews__card_img"/>
                    <h3>{reviews_data_obj[0].title}</h3>
                    <p>{reviews_data_obj[0].sub_title}</p>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
              <span class="dot" onClick={()=>displayReviewCard()}></span>
              <span class="dot" onClick={()=>displayReviewCard()}></span>
              <span class="dot" onClick={()=>displayReviewCard()}></span>
             </div>
          </div>
        // <h1>Hi hello</h1>
    )

}