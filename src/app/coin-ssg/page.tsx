import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CoinMarketSSG() {
    const API_KEY = "b93b89ca9f5dc27571635fa38e1c0fcb";
    const res = await fetch(
      `http://api.coinlayer.com/live?access_key=${API_KEY}`);
    const data = await res.json();
  
    return (
      <>
       <div className=" flex flex-colsticky top-0 left-0 w-full p-6 bg-gradient-to-r from-blue-600 to-yellow-700 shadow-2xl justify-between items-center text-7xl font-bold text-white p-2 ">
      Check Coin-Market 
      
     
      </div>
         <div  className="flex justify-center   items-center flex-col   " 
               >
            <div className=" bg-gray-300 w-96  rounded-2xl  p-8 flex flex-col justify-center   font-bold m-2  text-5xl ">
              Coin ISR
            <br/>
            <br/>
            <Button variant="default" size="lg">
              {" "}
              BTC: {data?.rates?.BTC}
            </Button>
            <br />
            <Button variant="destructive" size="lg">
              {" "}
              BNB: {data?.rates?.BNB}
            </Button>
           
             
            <br />
            <Button variant="destructive" size="lg">
              
              USDT: {data?.rates?.USDT}
            </Button>
            <br/>
            <Button variant="secondary" size="lg">
              
              SOL: {data?.rates?.SOL}
            </Button>
            <br/>
            <Button variant="default" size="lg">
              
              DOGE: {data?.rates?.DOGE}
            </Button>
           
            <br/>
            <Button variant="secondary" size="lg">
              
              ADA: {data?.rates?.ADA}
            </Button>
            </div>
           < Button variant="ghost" size="sm">
              <Link href="/"></Link>
                Back</Button>
            </div>

      </>

    );
  }

  