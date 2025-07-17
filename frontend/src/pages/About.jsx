import React from "react";
import Title from "./../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "./../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, a
            iure possimus repellat dolorum, facere architecto eum minima quas,
            quasi aspernatur consectetur nulla magnam voluptatem cum. Velit
            explicabo necessitatibus quod.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quia quae necessitatibus odio corrupti nobis aliquid laudantium,
            iste eveniet eum pariatur ad est laborum, quam perferendis iure
            consequatur doloribus tenetur.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
            doloribus similique ab magnam accusantium, modi quas incidunt odit,
            cumque perspiciatis cum? Sunt unde ex est. Voluptatum doloribus
            officia quidem.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur ipsum, saepe sit, ut tempora porro, dolor quo quos unde
            officiis dolorum maiores deleniti neque nostrum numquam sint
            quibusdam voluptatum! Modi.
          </p>
        </div>
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur ipsum, saepe sit, ut tempora porro, dolor quo quos unde
            officiis dolorum maiores deleniti neque nostrum numquam sint
            quibusdam voluptatum! Modi.
          </p>
        </div>
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur ipsum, saepe sit, ut tempora porro, dolor quo quos unde
            officiis dolorum maiores deleniti neque nostrum numquam sint
            quibusdam voluptatum! Modi.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
