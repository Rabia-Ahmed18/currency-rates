"use client";



import { Button } from '@/components/ui/button';
import  Link from 'next/link';


export default function Home() {
  return (
    <>
    

    <div className=" flex flex-col p-6 bg-gradient-to-r from-blue-600 to-yellow-700 shadow-2xl justify-between items-center text-7xl font-bold text-white p-2 ">
      Check Coin-Market 
      
     
      </div>
   
      <div className="flex justify-center  items-center  h-[500px] bg-gray-300  rounded-1xl">

      <div className="  w-full  flex flex-col justify-center items-center font-bold  p-8 text-5xl    "  >


              Just a click away !!

            <br/>
            <br/>
            
            <Button variant="outline" size="default">
            <Link href='/coin-ssr'>Coin Market-SSR</Link>
            </Button>
            <br />
            <Button variant="outline" size="default">
            <Link href='/coin-ssg'>Coin Market-SSG</Link>

             
            </Button>
            <br/>
            <Button variant="outline" size="default">
              <Link href='/coin-isr'>Coin Market-ISR</Link>
            </Button>
               <br/>
            <Button variant="outline" size="default">             
               <Link href='/coin-csr'>Coin Market-CSR</Link>

            </Button>
           
           
            </div>

      </div>
 
    </>
  );
}

