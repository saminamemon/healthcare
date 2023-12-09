 "use client"





import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

export default function Header() {
  const slides = [
    {
      url: 'https://media.istockphoto.com/id/1413031831/photo/medicine-doctor-holding-red-heart-shape-in-hand-medical-concept-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=QIzCtiV_e_YIyWNejIS2H28jyJDxG-XxNSbCyD6UKHM=',
    },
    {
      url: 'https://media.istockphoto.com/id/1656550397/photo/doctor-using-laptop-with-medical-medical-network-connection-icons.jpg?s=612x612&w=0&k=20&c=8_b8hpT_Nl08YiJxUhVytrpQiVWowUcLWJSbDTNTogs=',
    },
    {
      url: 'https://media.istockphoto.com/id/1722288539/photo/doctor-touch-hologram-of-human-system-medical-future-technology-and-innovative-concept-the.jpg?s=612x612&w=0&k=20&c=PICE3-0-Q6h__JosmC2M3VynQ0HIm6IUPbRYweOdkts=',
    },

    {
      url: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0ZXRob3Njb3BlfGVufDB8fDB8fHww',
    },
    {
      url: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlsbHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='bg-gradient-to-r from-indigo-200 to-white-200'>
    <div className='max-w-[1800px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center contrast-125 bg-cover duration-500'
      ></div>
    
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
    
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
           <div
           key={slideIndex}
           onClick={() => goToSlide(slideIndex)}
           className='text-2xl cursor-pointer'
         >
            <RxDotFilled />
          </div>
        ))}
          </div>
  </div>
           <div className="bg-gradient-to-r from-indigo-200 to-white-500  py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-4xl font-semibold leading-8 text-indigo-900">Trusted by the world’s most innovative teams</h2>
     <div className="mx-auto  mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-10 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      
       <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 lg:col-span-1" src="/logo1.jpeg" alt="Transistor" width="208" height="48"/>
      <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 lg:col-span-1" src="/Hamdard.png" alt="Reform" width="158" height="48"/>
       <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 lg:col-span-1" src="/Martin.jpg" alt="Tuple" width="158" height="48"/>
       <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 sm:col-start-2 lg:col-span-1" src="/Kaizen.jpeg" alt="SavvyCal" width="146" height="158"/>
       <Image className="col-span-2 col-start-2 max-h-90 w-full contrast-125 object-contain sm:col-start-auto lg:col-span-1" src="/Royal.jpg" alt="Statamic" width="158" height="48"/>
      

</div>
      </div>
    </div>
    </div>
  );
}


