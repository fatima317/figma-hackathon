import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="relative bg-gray-100 py-10 px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-290px] left-[-40px] z-10">
          <Image
            src='/lamp.png'
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/2 max-w-[644] text-center md:text-left flex flex-col ">
        <p className="text-sm text-pink-500 font-semibold">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-[40px] font-bold text-black tracking-wide mt-2">
        New Furniture Collection Trends in 2020
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src='/sofa promotional header.png'
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
        

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        
        
      </div>

      </div>
    </section>
  )
}

export default Hero;