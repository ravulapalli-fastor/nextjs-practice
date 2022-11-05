
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
        <h1>Welcome to Nextjs </h1>
        <h3>Project1</h3>
    </div>
   )
}