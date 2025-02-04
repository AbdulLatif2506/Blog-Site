import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about flex flex-col lg:flex-row items-center bg-white px-6 py-12 md:px-12 lg:px-20 xl:px-32">
      {/* Left Section for Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          width={1000}
          height={1000}
          src="/AbdulLatif.jpeg" // Replace this with your image path
          alt="Abdul Latif"
          className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-lg md:text-xl text-purple-600 font-semibold mb-4">
          Abdul Latif - Developer
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
          I have built this blog website to share engaging content with my
          audience. The website leverages modern technologies like Sanity CMS to
          fetch and manage data efficiently. My aim is to create a seamless
          reading experience with dynamic and up-to-date posts.
        </p>
        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <Link href="https://facebook.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <FaFacebook />
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <FaInstagram />
            </div>
          </Link>
          <Link href="https://linkedin.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <FaLinkedin />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;