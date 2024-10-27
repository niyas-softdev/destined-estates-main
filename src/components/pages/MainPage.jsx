import React from 'react'
import HeroBanner1 from "@/components/molecules/HeroBanner1";
import Menu from "@/components/molecules/Menu";
import Solutions from "@/components/molecules/Solutions";
import { FaCirclePlay } from "react-icons/fa6";

const MainPage = () => {
  return (
    <div>
      <div className="relative">

        <div className="absolute top-0 left-0 w-full z-10">
          <Menu />
        </div>


        <HeroBanner1 />
      </div>


      

    </div>
  )
}

export default MainPage