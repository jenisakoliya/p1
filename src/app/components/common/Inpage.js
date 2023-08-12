import React from "react";


const Inpage = () => {
  const images = [
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
    "https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg",
    "https://www.imgonline.com.ua/examples/extract-color-channel-green.jpg",
  ];

  return (
    <>
    

      <div className="bg-red-400 mt-20">
        <div className=" bg-yellow-500 grid lg:grid-cols-5 lg:ml-auto md:grid-cols-4 md:ml-25 grid-cols-2 ml-20 gap-2">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    
    </>
  );
};

export default Inpage;