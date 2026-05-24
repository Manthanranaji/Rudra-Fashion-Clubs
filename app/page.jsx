'use client'

import Navbar from "./navbar";
import Reveal from "./reveal";


export default function Home(){

  return(
    <div className="min-h-screen w-full bg-[#F7F3ED] relative scroll-smooth overflow-x-hidden">
      <Navbar/>
    
      <div className="absolute inset-0 pointer-events-none opacity-[0.5] z-30
        bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:70px_70px] md:bg-[size:120px_120px] md:opacity-[0.7]
        " 
      />

      {/* REMOVED pointer-events-none FROM THIS WRAPPER */}
      <div className="relative">

        <div className="absolute inset-0 pointer-events-none">

          <div className="
            absolute top-[-180px] left-[-180px]
            w-[520px] h-[520px]
            rounded-full blur-[160px]
            bg-[#C6A15B]/5
          "/>

          <div className="
            absolute top-[200px] left-[350px]
            w-[380px] h-[380px]
            rounded-full blur-[180px]
            bg-[#A68A72]/15
          "/>

        </div>
    
        <span className="absolute z-30 top-1 right-[-20px] text-[300px] font-playfair font-black text-[#0d0d0d]/[0.08] italic">
          R
        </span>

        <section id="home" className="relative min-h-screen">

          <img
            src={"/cloth.jpg"}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 text-left flex flex-col items-start text-left md:px-20 justify-start pt-48 md:pt-40 min-h-screen px-6">
            
            <span className="opacity-0 animate-fadeup font-cormorant md:text-2xl tracking-wider mb-6 bg-[#1b3a4b]/35 px-4 rounded-md backdrop-blur-md shadow-2xl text-white/60 border border-[#6b7f8a]/40">&mdash; Curated for daily wear</span>
            
            <h1 className="opacity-0 animate-fadeup [animation-delay:500ms] font-lovers sm:text-[3rem] text-[4rem] text-[#F7F3ED]/80 italic tracking-widest md:text-[12rem] md:tracking-wider md:leading-none leading-none">Rudra Fashion
              <span className="opacity-0 animate-fadeup [animation-delay:750ms] block -mt-2 md:-mt-8 text-[3.3rem] font-cormorant text-[#C17F3E] font-semibold md:text-7xl">Clubs</span>  
            </h1>
            <p className="opacity-0 animate-fadeup [animation-delay:1100ms] px-2 mt-4 md:text-xl text-white/60 tracking-widest text-sm font-lato">Luxury crafted with elegance. Every cloth is hand stitched</p>
          
            <a href="#contact" 
            className="opacity-0 animate-fadeup [animation-delay:1900ms] bg-[#1b3a4b]/95 md:text-4xl md:text-white/60 font-medium shadow-xl background-blur-md mt-6 px-2 py-1 text-xl font-cormorant tracking-wider text-white/70 border border-[#6b7f8a]/40 rounded-md">
              
              Level Up Your Fit
              
            </a>

          </div>

        </section>

        <section className="bg-[#F7F3ED] min-h-7xl md:h-[6rem] md:py-56 py-20 px-6 relative overflow-hidden flex items-start justify-start">

        <div className="absolute inset-0 pointer-events-none opacity-[0.5] z-30
        bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
        bg-[size:70px_70px] md:bg-[size:120px_120px] md:opacity-[0.7]
        " 
      />
        <div className="relative">

<div className="absolute inset-0 pointer-events-none">

  <div className="
    absolute top-[-180px] left-[-180px]
    w-[520px] h-[520px]
    rounded-full blur-[160px]
    bg-[#C6A15B]/5
  "/>

  <div className="
    absolute top-[200px] left-[350px]
    w-[380px] h-[380px]
    rounded-full blur-[180px]
    bg-[#A68A72]/15
  "/>

</div>
</div>

        <div className="max-w-2xl flex mx-auto relative"></div>

        <span className="text-[#2A2018]/10 text-[120px] md:absolute md:left-[60px] leading-none font-black font-playfair">“</span>
        
        <h2 className="font-cormorant text-4xl text-[#2A2018] md:text-7xl md:absolute md:left-[140px]">Born from fire. Worn with <span className="text-[#C17F3E]">purpose</span></h2>
        </section>


        <section id="about" className="bg-[#EFE7DC]/80 backdrop-blur-md min-h-screen px-6 py-28 mb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.35] z-30
        bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
        bg-[size:70px_70px] md:bg-[size:120px_120px] md:opacity-[0.7]
        " 
      />
        <div className="relative">

<div className="absolute inset-0 pointer-events-none">

  <div className="
    absolute top-[-180px] left-[-180px]
    w-[520px] h-[520px]
    rounded-full blur-[160px]
    bg-[#C6A15B]/5
  "/>

  <div className="
    absolute top-[200px] left-[350px]
    w-[380px] h-[380px]
    rounded-full blur-[180px]
    bg-[#A68A72]/15
  "/>

</div>
</div>

        <span className="font-black font-cormorant md:text-[400px] absolute top-1 left-[-40px] text-[200px] text-[#0d0d0d]/[0.03] italic">A</span>

        <div className="relative z-10 max-w-3xl pt-2 ">
  
  <span className="text-[#2A2018]/70 uppercase text-xs tracking-widest font-cormorant">
    &mdash; Our story
  </span>

  <h3 className="text-[5rem] -mt-[2px] font-lovers tracking-wider text-[#0d0d0d]/80">
    About
  </h3>
  
    <h4 className=" mb-12 text-xl font-cormorant italic font-semibold tracking-widest text-[#2a2018]/80">
    “ Wear the <span className="uppercase text-[#c17f3e] tracking-tight">Extraordinary</span>. ”
    </h4>

  <p className="font-cormorant text-md tracking-wider leading-8 text-[#2A2018]/90">
          Rudra Fashion Clubs doesn’t follow trends.
It was created for people who walk into a room and leave a memory behind.

Born from the idea that clothing should feel powerful, timeless, and deeply personal, the brand blends modern luxury with old-world craftsmanship. Every stitch, texture, and silhouette is chosen with intention — not to demand attention, but to command presence naturally.

In a world flooded with fast fashion and forgettable designs, Rudra Fashion Clubs stands for something slower, rarer, and more meaningful. Clothing that carries character. Pieces that feel collected, not manufactured.

The name “Rudra” represents intensity, confidence, and transformation. That spirit lives in every collection — refined elegance with an untamed edge. Soft fabrics meet bold structure. Minimalism meets authority. Tradition meets modern identity.

This is not fashion made for everyone.

It is made for those who refuse ordinary.
For those who wear ambition like armor.
For those building a legacy long before the world notices it.
          </p>

          <h5 className="font-lovers text-[2rem] text-[#2a2018]/50 mt-12 tracking-widest">Where Elegance meets fabrics</h5>
        </div>


        </section>

        <section
  id="contact"
  className="relative bg-[#F3EEE6]/80 backdrop-blur-md min-h-screen px-6 py-28 mb-24 overflow-hidden"
>

  {/* GRID */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.25] z-30
    bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),
    linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
    bg-[size:70px_70px] md:bg-[size:120px_120px] md:opacity-[0.7]"
  />

  {/* BLURS */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-[-180px] left-[-180px] w-[520px] h-[520px] rounded-full blur-[160px] bg-[#C6A15B]/5" />
    <div className="absolute top-[200px] left-[350px] w-[380px] h-[380px] rounded-full blur-[180px] bg-[#A68A72]/15" />
  </div>

  {/* CONTENT WRAPPER (KEY FIX) */}
  <div className="relative z-10 w-full max-w-3xl mx-auto h-[700px] md:h-[650px]">

    {/* BIG LETTER */}
    <span className="font-playfair absolute text-[#2a2018]/[0.05] italic left-[-80px] top-[-100px] text-[200px]">
      C
    </span>

    <span className="font-cormorant text-[#2a2018] tracking-widest absolute left-[10px]">
      &mdash; Begin a conversation
    </span>

    <h2 className="text-[#0d0d0d]/80 font-lovers tracking-widest text-[5rem] absolute left-[10px] top-[20px]">
      Contact
    </h2>

    <h3 className="font-cormorant text-2xl italic tracking-widest text-[#4A3F35] absolute left-[10px] top-[160px]">
      “ <span className="text-[#c17f3e] uppercase">Find us</span> below at: ”
    </h3>

    {/* WHATSAPP */}
    <h4 className="font-lovers text-[#7A6A58] text-[3rem] absolute top-[260px] tracking-widest left-[10px]">
      WhatsApp:
    </h4>

    <p className="font-cormorant text-[#7A6A58]/70 text-lg absolute top-[320px] tracking-widest left-[10px]">
      For orders and assistance, connect with us on WhatsApp.
    </p>

    <a
      href="https://wa.me/917710326008"
      target="_blank"
      rel="noopener noreferrer"
      className="font-cormorant text-blue-700 absolute top-[400px] left-[10px] text-xl italic tracking-widest"
    >
      → Talk to us here
    </a>

    {/* INSTAGRAM */}
    <h5 className="text-[3rem] text-[#7A6A58] tracking-widest font-lovers absolute top-[450px] left-[10px]">
      Instagram:
    </h5>

    <p className="font-cormorant text-[#7A6A58]/70 text-lg absolute top-[510px] tracking-widest left-[10px]">
      Discover our collections on Instagram.
    </p>

    <a
      href="https://www.instagram.com/rudra_clubfashionlabs/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-cormorant text-blue-700 absolute top-[560px] left-[10px] text-xl italic tracking-widest"
    >
      → Explore Our collection
    </a>

    {/* FIXED H6 */}
    <h6 className="font-cormorant text-xl tracking-widest text-[#2a2018]/80 absolute top-[640px] left-[10px] z-20">
      We respect your messages and enquiries.
    </h6>

  </div>
</section>
    
            
      </div>
    </div>
  );
}