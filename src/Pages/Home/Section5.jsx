import React from 'react'
import personImage from '../../assets/Images/person1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './Section5Styles.css'
const Section5 = () => {

  const testimonials = [
    {
      id: 1,
      name: "Ama Anonmah",
      role: "CEO & Founder YXC",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      image: personImage, // Add the path to your image here
    },
    {
      id: 2,
      name: "John Doe",
      role: "Software Engineer",
      rating: 4,
      feedback:
        "Lorem Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      image: personImage,
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Product Manager",
      rating: 4,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      image: personImage,
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Product Manager",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      image: personImage,
    },
    {
      id: 5,
      name: "Jane Smith",
      role: "Product Manager",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      image: personImage,
    },
    {
      id: 6,
      name: "Jane Smith",
      role: "Product Manager",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ",
      image: personImage,
    },
  ];
  return (
    <section className='bg-Artboard overflow-x-hidden overflow-y-hidden'>
      <div className="max-w-[1440px] mx-auto">
        <div className="py-16 max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className="text-center mb-12 flex flex-col gap-5 items-center xl:gap-10">
            <h4 className="text-xl lg:text-2xl text-green-600 font-Poppins xl:text-[2.625rem] text-center font-bold uppercase" data-aos="fade-left">
              Testimonial
            </h4>
            <h1 className="max-w-[761px] text-[#210F03] text-center font-poppins text-xl md:text-3xl xl:text-[70px] font-semibold xl:leading-[70px] capitalize md:px-40 xl:px-0" data-aos="fade-right">
              See What Others People Are Saying
            </h1>
            <p className="text-[#210F03] mt-4 max-w-[761px] text-center lg:text-xl lg:px-28 xl:px-0" data-aos="fade-left">
              Expert Commercial Debt Collection, Proven Results.
              Tailored Debt Solutions for Businesses That Matter.
            </p>
          </div>

          {/* Swiper Container */}






        </div>
        <div className="mx-auto flex items-center justify-center " data-aos="fade-up">
          <Swiper

            centeredSlides={true}
            slidesPerView={2.5}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='mySwiper xl:h-[600px] h-[600px] sm:h-[600px] '
            breakpoints={{
              240: {
                spaceBetween: 200,
                slidesPerView: 1
              },
              768: {
                spaceBetween: 400,
                slidesPerView: 2.5
              },
              1024: {
                spaceBetween: 600,
                slidesPerView: 2.5
              },
              1280: {
                spaceBetween: 700
              }
            }}

          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className='flex flex-col items-center justify-center '>
                <div className="bg-[#F3F3F3] drop-shadow-xl  rounded-tl-[7rem] rounded-br-[7rem] w-[250px] xs:w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[639px] xl:h-[391px] rounded-tr-[3rem] rounded-bl-[3rem] p-10 text-center flex flex-col xl:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className=" rounded-full mx-auto mb-4 mt-[-100px]"
                  />
                  <div className="mb-2">
                    <div className="flex justify-center mb-2  gap-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-3xl ">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 xl:px-20">{testimonial.feedback}</p>
                  <h5 className="font-bold text-lg">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Section5