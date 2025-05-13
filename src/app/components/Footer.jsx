import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";


const Hero = () => {
    return (
        <div className='h-[50vh] bg-[#2A8892] bg-cover bg-center bg-no-repeat text-white flex flex-col gap-4 justify-center items-center'>
            <img src="/whiteLogo.svg" width={"200px"} alt="" />
            <div className="flex gap-2">
                <Link href={"#"}>
                    <FaFacebook  className="text-white text-4xl"/>
                </Link>
                <Link href={"#"}>
                    <LuInstagram  className="text-white text-4xl"/>
                </Link>
            </div>
            <Link href={"#"} className="text-2xl font-medium font-Poppins">@cultivatumente</Link>
        </div>
    )
}

export default Hero
