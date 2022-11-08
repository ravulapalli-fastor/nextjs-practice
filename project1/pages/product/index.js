import Image from 'next/image'
import Link from "next/link";
import img from '../../public/logo.svg'

export default function Product(){
    return (
        <div>
            <Image src={img} width="100" height="100" alt=""/>
            <div>
                
            </div>
           {/* {
            ["reviewImg1","reviewImg2","reviewImg3","reviewImg4","reviewImg5","faqPlusImg"]
            .map((ele,index)=>(
                <Link key={ele} href={`/product/${index}`}>
                   <Image src={`/${ele}.png`} width="100" height="100" alt=""/>
                </Link>
            ))
           }
           {
            ["logo"].map((e)=>
            (
            <Image src={`/${e}.svg`} width="100" height="100" alt=""/>

            ))
           } */}
        </div>
    )
}