import { Parallax } from "react-parallax";
import FirstSection from "../../app/who-we-are/section1";
import SecondSection from "../../app/who-we-are/secion2";
import ThirdSection from "../../app/who-we-are/section3";
import FourthSection from "../../app/who-we-are/section4";
import FifthSection from "../../app/who-we-are/section5";

const WhoWeAre = () => {
  return (
    <>
      <div className="text-gray-800">
        {/* 1st Section */}
        <FirstSection />

        {/* 2nd Section */}
        <SecondSection />

        {/* 3rd Section */}
        <ThirdSection />

        {/* 4th Section */}
        <FourthSection />

        {/* 5th Section */}
        <FifthSection />
      </div>
    </>
  );
};

export default WhoWeAre;
