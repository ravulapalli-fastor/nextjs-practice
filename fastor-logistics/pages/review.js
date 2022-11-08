import { useState } from "react";
import Image from "next/image";

export default function Review(){
    const images=["fetureIcon1","fetureIcon2","fetureIcon3","fetureIcon4","fetureIcon5"];
    const [imgArr,setImgArr]=useState(images);
    console.log(imgArr);

    const handleArr=(x)=>{
        let newA=[...imgArr];
        if(x===1){
          let p=newA.pop();
          newA.unshift(p);
        }else{
            let p=newA.shift();
            newA.push(p);
          }
          setImgArr(newA);
          console.log(imgArr,"dsad",x);

    }
    console.log(imgArr)

    return (
        <>
        <div style={{display:"flex",gap:"2%"}}>
            {imgArr?.map((e)=>(
                <Image key={e}
                src={`/..public/${e}.svg`}
                width="100"
                height="100"
                alt={e}
                />
            ))}
            
            <Image src="/../public/fetureIcon1.svg"                
            width="100"
                height="100"
                alt=""
/>

        </div>
        <button onClick={()=>handleArr(-1)}>Prev</button>
        <button onClick={()=>handleArr(1)}>Next</button>
        </>

    )
}