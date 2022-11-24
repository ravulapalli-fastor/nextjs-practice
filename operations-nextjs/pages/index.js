import Image from 'next/image'
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Manage from '../components/Manage';
import Offer from '../components/Offer';
import Reviews from '../components/Reviews';

export default function Home(){


  return (
    <>

    {/* <Header/> */}

    <div className='operations_main_container'>
       
      <div className="operations_header_container">
        <h1 className="operations_main_title">Operations</h1>
        <p className="operations_main_description">Now power up your online business by making shipping easy!
        </p>
      </div>
      
       {/* manage section */}
       <Manage/>
       <Reviews/>
       <Offer/>

    </div>
    

    {/* <Footer/> */}
    </>
  )

}