import React from 'react';
import Image from 'next/image';

const MiddleFour = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-white py-8">
      {/* Container for the centered image */}
      <div className="flex items-center justify-center px-4">
        <Image
          src="/image 1174.png" // Source for the image
          alt="Footer Logo" // Accessible alternative text
          width={904} // Fixed original width of the image
          height={93} // Fixed original height of the image
          className="w-full max-w-[904px] h-auto" // Ensure the image is responsive
        />
      </div>
    </div>
  );
};

export default MiddleFour;
