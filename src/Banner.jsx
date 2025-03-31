import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import Header from "./Header";
import './Banner.css';



function Banner() {

    const [isOpen, setOpen] = useState(false);
    const OpenMenu = () => {
        setOpen(!isOpen);
    }

    return <>
        <div className="relative">
            <div className={`w-[80vw] h-[100vh] transition-all duration-500 ease-in-out bg-orange-500 
                            absolute top-0 ${isOpen ? 'right-[0vw]' : 'right-[-76vw]'} 
                            flex items-start justify-center z-[9999]`}>

                <div className="absolute mt-20 left-[-40px] z-[-10]">
                    <div className="w-40 h-40 bg-orange-500 text-white pl-5 text-2xl rounded-full flex items-center justify-start cursor-pointer">
                        <RiMenu3Line onClick={OpenMenu} />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 mt-10 w-full">
                    <h1 className="text-white text-[24px] font-bold">Mahima Chaudhary</h1>

                    <div className="flex flex-col justify-center gap-6 w-[80%] mt-10 text-white">
                        <button className="neuromorphic-btn">HOME</button>
                        <button className="neuromorphic-btn">ABOUT ME</button>
                        <button className="neuromorphic-btn">SERVICES</button>
                        <button className="neuromorphic-btn">BLOGS</button>
                        <button className="neuromorphic-btn">CONTACT ME</button>
                    </div>
                </div>

            </div>
        </div>



        <section className="banner flex flex-col justify-start">

            <Header isMenuOpen={isOpen} />


            <div className="bg-red-300 rounded-[50%] w-[60vw] h-[60vw] mt-20 md:w-[50vh] md:h-[50vh]">
                <img className="rounded-[50%] w-full h-full object-cover object-top" src={process.env.PUBLIC_URL + "/bg.png"} alt="Profile Picture" />
            </div>



            <div className="text-center p-[10%] text-white">
                <p className="text-[16px] font-bold">Hi, I am <span className="text-orange-500 text-[24px]">Mahima</span>, Corporate Lawyer | Executive - Compliance, Ethics & Investigations</p>
            </div>

            <div className="px-[10%] text-center text-gray-200 text-[12px]">
                I am a corporate law professional with expertise in *corporate advisory, capital markets, infrastructure and project finance, and regulatory compliance*.
            </div>


            <button className="primary-btn mt-14 w-[50%] h-[7%] bg-orange-500 text-[14px]">Download Resume</button>



            {/* <section className="title container">
            <p className="banner-subheading">Protect | Grow | Succeed – Corporate Legal Expertise You Can Trust.</p>
            <h3 className="banner-heading">
                Your Partner in Business Law/Compliance
            </h3>
            <p className="banner-rhym"> I specialize in corporate
                law, contract drafting, business compliance, and dispute
                resolution. <br /> Let's protect and grow your business together.</p>
            <div style={{ marginTop: "20px" }}>
                <button className="primary-btn">View My Services</button>
                <button className="sec-btn">Schedule a Consultation</button>
            </div>
        </section> */}
        </section>
    </>

}

export default Banner;