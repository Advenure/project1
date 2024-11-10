import Image from "next/image"
import Link from "next/link"

export default function Service(){
    return(
        <div className="">
            <div className="md:mt-20 lg:justify-items-center w-full ">
        <div className="transform hover:scale-105 transition-transform duration-200">
            <Image src={"/title.png"} width={370}height={213}alt="title"></Image>
        </div>
       
        <div className= "mt-5 md:justify-items-center px-20 mt-5 lg:px-40">
        <Image src={"/navbar.png"} width={370}height={213}alt="title"></Image>
        </div>
       

        <div className=" mt-5 transform hover:scale-105 transition-transform duration-200 ">
       
        <Image src={"/Title section.png"} width={370}height={213}alt="title"></Image>
        </div>
        <div className="  px-5 md:mt-6 flex gap-6">

        <div className="mt-4 transform hover:scale-105 transition-transform duration-200">
        <Image src={"/box.png"} width={370}height={213}alt="title"></Image>
        </div>
        <div className="mt-4 transform hover:scale-105 transition-transform duration-200">
        <Image src={"/box (1).png"} width={370}height={213}alt="title"></Image>
        </div>
        <div className="mt-4 transform hover:scale-105 transition-transform duration-200">
        <Image src={"/box (2).png"} width={370}height={213}alt="title"></Image>
        </div>
        </div>
    
        </div>
        

        <div className=" font-bold text-xl bg-blue-600  mt-7">
                <ul className="justify-center text-center  md:hidden lg:hidden xl:hidden">
                   <Link href={'/'}> <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Home</li></Link>
                   <Link href={"/about"}> <li className="  transform hover:scale-105 transition-transform duration-200 hover:underline">About Us</li></Link>
                   <Link href={'/service'}>  <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Service</li> </Link>
                   <Link href={''}>  <li className="  transform hover:scale-105 transition-transform duration-200 hover:underline">Blog</li> </Link>
                   <Link href={'/contact'}> <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Contact us</li> </Link>
                </ul>
            </div>
        <div className="place-items-center mt-4 py-5 bg-blue-600">
                
                <Image  src={'/Frame 13.png'}width={370}height={40}alt="facebook"></Image>
               
              </div>
  
       
        </div>
        
       

        
        
    )
}