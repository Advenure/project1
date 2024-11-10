import Image from "next/image"

export default function Section1(){
    return(
        // nav elsment main
        <div className=" w-390 h-870  px-5 md:justify-between  xl:px-10 ">

            <div className=" ">
            {/* right side  */}
            <div className=" "> 
           <Image className="mt-5 md:float-right mt-[10px] px-5  lg:mt-5 float-right  lg:mt-[-10px]  " src={'/imagemy/personalimage.png'} width={400} height={354} alt="image"></Image>
            </div >
        {/* left side */}
        <div className="w-full h-[] mt-5  pt-[400px] py-9 text-center  text-[#222222]  justify-center items-center text-center  md:mt-[10px] lg:mt-[30px]  font-bold ">
            <div className="mt-5  2xl:float-left justify-center text-center mt-[-400px] px-[10]  ">
        <p className=" w-full h-15 text-center justify-center  text-[18px] font-semibold mt-3  md:px-6 lg:mt-[40px] ">Welcome to my Portfolio</p> 
        <h1 className="w-370  h-[70] font-bold  text-[40px] md:text-3xl md:mt-5  lg:text-5xl mt-5 ">  Hi I’m 
           <span className="text-[#0077FF]  "> Kamran Tasleem </span> <br />
               web Developer </h1>
            <h3 className="w-375 h- text-[12px] mt-3 mt-5 lg:mt-10">Collaborating with highly skilled individuals, our agency delivers top-quality services.</h3>
            <div className="lg:flex gap-5 mt-5 justify-center items-center py-5 md:mt-8 lg:mt-8 ">
            <button className=" mt-2 border border-red-100 bg-blue-600  px-11 py-2 text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-transform duration-300 ">Hire Me!</button> <br />
            <button className="border mt-2 border-red-100 px-6 py-2 text-bg-blue-600 hover:bg-blue-600 hover:text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-transform duration-300 ">Download CV </button>
            </div>
            </div>
   
        </div >
        </div>
       
        </div>
       
    )
}