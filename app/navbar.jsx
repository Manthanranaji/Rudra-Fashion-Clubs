'use client';

export default function Navbar(){

   
    return(
        <div className="w-[95%] z-50 fixed h-20 bg-[#F7F3ED]/60 md:bg-[#f7f3ed]/80 md:ml-8 backdrop-blur-lg shadow-md mt-4 ml-2 flex items-center justify-between px-6 rounded-2xl border border-[#2a2018]/15">
            <div>
                <a href="#home" className="px-2 font-cormorant text-[#2A2018] font-semibold italic uppercase text-xl">RFC</a>
            </div>
            <div className="px-2 gap-4 flex text-[#4a3f35] font-black text-lg font-cormorant md:gap-12">
            <a  className="relative"
            href="#home">
                Home
                </a>
            
            <a href="#about" className="relative">
                About
                </a>

            <a href="#contact" className="relative">
                Contact
            </a>

            </div>
        </div>
    )
}