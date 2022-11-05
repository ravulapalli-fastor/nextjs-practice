import Image from 'next/image'
import Link from "next/link";

export default function Product(){
    return (
        <div>
           {
            ["reviewImg1","reviewImg2","reviewImg3","reviewImg4","reviewImg5","faqPlusImg"]
            .map((ele,index)=>(
                <Link key={ele} href={`/product/${index}`}>
                   <Image src={`/${ele}.png`} width="100" height="100"/>
                </Link>
            ))
           }
        </div>
    )
}