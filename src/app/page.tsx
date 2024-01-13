"use client";

import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/*
      <video className="video_bk" src={require("../../public/img/BackgroundVideo.mp4")} autoPlay loop muted /> 
      */}
      

      <div className="Background">
        <div className="bk_gradient" />
        <div className="polka" />
        <Image 
          alt="Peiko" 
          className="rays"       
          src="/img/Rays.png"         
          width={1920} 
          height={1080}
        />  
      {/*
        <section className="starburst starburst--both">
          <div></div> 
        </section>
      */}
      </div>

      <Image alt="Peiko" className="PenguinElement" src="/img/PenguinElement.png"   width={400} height={600}/>
{/*
      <Image 
        alt="Peiko" 
        className="element1"       
        src="/img/element1.png"         
        width={1920} 
        height={1080}
        />  

      <Image alt="Peiko" className="ColorElement"   src="/img/ColorElement.png"     width={400} height={200}/>

      <Image alt="Peiko" className="Menu"           src="/img/MenuElement_1.png"    width={400} height={600}/>
*/}


    </main>
  )
}
