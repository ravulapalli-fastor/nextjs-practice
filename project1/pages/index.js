
import Link from "next/link"
export default function Home(){
   return (
    <div>
        <header style={{display:"flex",justifyContent:"space-evenly"}}>
          <Link href="/">
            Home
          </Link> 
          <Link href="/product">
          Products
          </Link> 
        </header>
    </div>
   )
}