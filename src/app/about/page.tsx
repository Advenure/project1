
import Image from "next/image"
import Link from "next/link"
export default function Aboutus(){
    return(
        <div className=" w-390 h-870  px-5 md:justify-between  xl:px-10 ">

            <div className=" ">
            {/* right side  */}
            <div className=" "> 
           <Image className="mt-5 md:float-right mt-[10px] px-5  lg:mt-5 float-right  lg:mt-[-10px]  " src={'/about.png'} width={400} height={354} alt="image"></Image>
            </div >
        {/* left side */}
        <div className="w-full h-[] mt-5  pt-[400px] py-9 text-center  text-[#222222]  justify-center items-center text-center  md:mt-[10px] lg:mt-[30px]  font-bold ">
            <div className="mt-5  2xl:float-left justify-center text-center mt-[-400px] px-[10]  ">
        <p className=" w-full h-15 text-center justify-center  text-[18px] font-semibold mt-3  md:px-6 lg:mt-[40px] ">About Me</p> 
        <h1 className="w-370  h-[70] font-bold  text-[40px] md:text-3xl md:mt-5  lg:text-5xl mt-5 "> 01 Year’s
           <span className="text-[#0077FF]  "> Experience </span> <br />
           on Product Design </h1>
            <h3 className="w-375 h- text-[12px] mt-3 mt-5 lg:mt-10">Collaborating with highly skilled individuals, our agency delivers top-quality services.</h3>
            <div className="lg:flex gap-5 mt-5 justify-center items-center py-5 md:mt-8 lg:mt-8 ">
            <button className=" mt-2 border border-red-100 bg-blue-600  px-11 py-2 text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-transform duration-300 ">Main Skills</button> <br />
            <button className="border mt-2 border-red-100 px-6 py-2 text-bg-blue-600 hover:bg-blue-600 hover:text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-transform duration-300 ">Education </button>
            </div>
            </div>
   
        </div >
        </div>
        <div className=" font-bold text-xl bg-blue-600 ">
                <ul className="justify-center text-center  md:hidden lg:hidden xl:hidden">
                   <Link href={'/'}> <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Home</li></Link>
                   <Link href={"/about"}> <li className="  transform hover:scale-105 transition-transform duration-200 hover:underline">About Us</li></Link>
                   <Link href={'/service'}>  <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Service</li> </Link>
                   <Link href={'/contact'}>  <li className="  transform hover:scale-105 transition-transform duration-200 hover:underline">Blog</li> </Link>
                   <Link href={''}> <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Contact us</li> </Link>
                </ul>
            </div>
        <div className="place-items-center mt-4 py-5 bg-blue-600">
                
                <Image  src={'/Frame 13.png'}width={370}height={40}alt="facebook"></Image>
               
              </div>
  
       
        </div>
    )
}
