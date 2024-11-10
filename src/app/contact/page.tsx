import Link from "next/link"
import Image from "next/image"
export default function Contact(){
    return(
        <div>
        <div className="px-7  mt-5 items-center mt-5 ">
                <p className="flex gap-3 items-center justify-center"><h1 className="font-blod text-xl">Address:</h1> house 268 st 02 korangi karachi </p> 
                   <p className="flex gap-3 items-center justify-center"> <h1 className="font-blod text-xl" >Email:</h1> <a className="text-red-700 font-bold text-center items-center" href="/">kamrantasleemahmed.@gmail.com</a></p>  </div>
                  <div className=" bg-blue-600  items-center px-5  w-full mt-5 text-pretty md:justify-center items-center text-center ">
    <input className="h-6 mt-4 w-[300px] rounded-lg text-center  "  type="text"placeholder="Name*" /> <br /> <br />
    <input className="h-6 w-[300px] rounded-lg text-center " type="text"placeholder="Email Address*" /> <br /> <br />
    <input className="h-6 w-[300px] rounded-lg  text-center" type="text"placeholder="How can we help you?" />  <br /> <br />
    <input className="h-20 w-[300px] rounded-lg mb-10 text-center " type ="text " placeholder ="How can we help you?" />       
            </div>
            <div className="flex gap-5 px-4 items-center md:items-center justify-center">
                <input className=" mb-6 w-10 md:mb-0" type="checkbox" />
                <p className="text-xl px-4 ">By submitting, i’m agreed to the Terms & Conditons</p>
                
            
            </div>
            <div className=" font-bold text-xl mt-5">
                <ul className="justify-center text-center md:hidden lg:hidden xl:hidden">
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