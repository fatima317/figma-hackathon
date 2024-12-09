import Image from "next/image";
import Link from "next/link";


const Hero = () => {

  return (
    <section className="relative bg-gray-100 py-10 px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-250px] left-[-40px] z-10">
          <Image
            src="/lamp.png"
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/2 max-w-[644] text-center md:text-left flex flex-col mr-8">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
        New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] text-sm font-medium mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-3 rounded-sm mt-6 hover:bg-pink-600 transition-all duration-300 w-1/4 text-center"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src="/sofa promotional header.png"
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>

      {/* Navigation Dots
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-pink-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button> */}
        {/* ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❯
      </button> */} 
    </section>
  );
}

export default Hero;