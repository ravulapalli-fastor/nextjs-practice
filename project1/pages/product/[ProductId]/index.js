
import {useRouter} from "next/router";
import Link from "next/link";

export default function ProductId(){
    const router=useRouter();
    const {ProductId}=router.query;
    console.log(ProductId);
    return (
        <div style={{margin:'auto'}}>
              <Link href={`/product/${ProductId}/NextPage`}>
                <h1>ProductId is : {ProductId}</h1>
                </Link>
        </div>
    )
}