import { Button } from "@/components/ui/button";
import Image from "next/image";
import ButtonUsed from "./components/ButtonUsed";

export default function Home() {
  return (
    <div className="container flex gap-8 mx-auto mt-10 h-screen  ">
      {/* right */}
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="capitalize text-blue-700 bold text-6xl"> +966563646538 Maids by the month in Jeddah</h1>
        <p className="text-blue-950 tracking-widest font-light">
        Maid rental service in Jeddah has been known since ancient times.
         This service has been in demand for decades. 
         It is one of the most important needs of the Saudi home, 
         as working on a monthly system saves the customer a lot of money from spending money on 
         short-term reservations or requesting workers according to the agreement system. 
         It also saves the customer the time of calling and waiting each time to request the service, 
         unlike the monthly maid system. 
         We have made it easy for the customer to request the service and the ease of contracting, 
         unlike most cleaning companies that work on a difficult and expensive contract system.
          Customer
        </p>
        <div>
        <ButtonUsed phoneNumber={+966563646538 }/>
        </div>
       
        
       
      </div>
      {/* left */}
      <div className="flex-1">
      <Image 
      width={1000}
      height={1000} 
     alt="maids are making beds" 
     src='/images/maid_bed.jpg' 
/>
      </div>
    </div>
    
  );
}
