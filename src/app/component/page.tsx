
import Link from "next/link"
import Image from "next/image"


export default function Header(){
    return(
        // nav elsment main
        <div className="mt-3 w-390 h-38 py-6 flex justify-between px-2 lg:w-1440 h-88 px-5 text-center items-center">


            <div className="flex text-center justify-center gap-2  place-items-center    "> 
            <Image className=" " src={'/logo icon.png'} width={30} height={40} alt="img"></Image>
            <h1 className="font-extrabold font-sans text-xl lg:text-1xl">My Portfolio</h1>
            </div>
            <div className=" font-bold text-xl ">
                <ul className="hidden lg:flex gap-6">
                   <Link href={'/'}> <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Home</li></Link>
                   <Link href={"/about"}> <li className="  transform hover:scale-105 transition-transform duration-200 hover:underline">About Us</li></Link>
                   <Link href={'/service'}>  <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Service</li> </Link>
                   <Link href={''}>  <li className="  transform hover:scale-105 transition-transform duration-200 hover:underline">Blog</li> </Link>
                   <Link href={'/contact'}> <li className=" transform hover:scale-105 transition-transform duration-200 hover:underline">Contact us</li> </Link>
                </ul>
            </div>
            <div className="hidden lg:flex border border-red-100 bg-blue-600  px-8 py-2 text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-transform duration-100">
                <button>Let’s  chat</button>
            </div>

        <div className="lg:hidden md:hidden">
        <button id="menu-button" className="text-black focus:outline-none"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg></button>
        </div>

        </div>
    )
}