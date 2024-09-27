import React, { useEffect, useRef, useState } from 'react'
import Rectangle from '../../assets/Images/Rectangle.png'
import Rectangledown from '../../assets/Images/Rectangledown.png'
import Rectanglebg from '../../assets/Images/Rectanglebg.png'
import Rectangleuper from '../../assets/Images/Rectangleuper.png'

const Section3 = () => {
 
  const [experience, setExperience] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [services, setServices] = useState(0);
  const [guides, setGuides] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  const animateValue = (setValue, end, duration) => {
    let start = 0;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let current = start;

    const timer = setInterval(() => {
      current += increment;
      setValue((prev) => Math.min(prev + 1, end));
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  // Set up IntersectionObserver for triggering animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Reset counters when scrolling away
          setExperience(0);
          setCustomers(0);
          setServices(0);
          setGuides(0);
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger the counter animations when the section comes into view
  useEffect(() => {
    if (isInView) {
      animateValue(setExperience, 20, 1000);
      animateValue(setCustomers, 100, 1000);
      animateValue(setServices, 15, 1000);
      animateValue(setGuides, 20, 1000);
    }
  }, [isInView]);
  return (
    <section>
      <div className="bg-Artboard overflow-x-hidden overflow-y-hidden  lg:h-[1904px]">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            <div className="p-2 flex flex-col items-center relative">
              <h1 className="max-w-[850px] text-[#210F03] text-center text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center" data-aos="fade-up">

                Welcome to <span className="text-[#03A651]">Corporate Debt</span>  Services
              </h1>
              <img src={Rectangle} alt="" className='md:mt-20 mt-5' data-aos="fade-up" />
              <div className="max-w-[1110px] max-h-[240px] flex items-center justify-center flex-col  px-5 h-[180px]  rounded-[16px] bg-[#F9FDFF] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[14rem] absolute top-48 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] lg:h-[240px] xl:top-[700.796px]" data-aos="fade-up">
                <p className="max-w-[1095px] max-h-[149.14px]  text-[#210F03] text-center font-Poppins xl:text-[30px] lg:text-2xl font-light  xl:leading-[45px] text-sm xs:text-base">
                  The <span className="text-[#03A651] font-bold">Corporate Debt Collection Services</span>, a pioneer and leading debt collection agency. A specialized institution especially established to render the Debt Collection Services in Pakistan.
                </p>
              </div>


            </div>
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2 mt-44 md:mt-32 flex flex-col md:flex-row md:gap-20 md:items-start items-center  lg:gap-32 xl:gap-40">
              {/* images */}
              <div className="flex flex-row md:flex-col relative  max-md:gap-3 md:mt-20 lg:mt-32 xl:mt-40" data-aos="fade-right">
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[100%] md:h-[100%] "  >
                  <img src={Rectangleuper} alt="" className=' shadow-2xl rounded-[21px_21px_11px_11px]' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[90%] lg:w-[100%]" >

                  <img src={Rectangledown} alt="" className='opacity-90 md:absolute md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl   md:w-[90%] lg:w-[100%]' />

                </div>
              </div>

              <div className="mt-10 md:mt-0 lg:mt-10 xl:mt-20 flex flex-col items-center md:items-start gap-3">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" data-aos="fade-left">
                  WELCOME TO OUR SITE!
                </h1>
                <p className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start" data-aos="fade-left">
                  We Are The Best Corporate Debt Services
                </p>
                <p className="max-w-[665px] max-h-[444px]  text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start" data-aos="fade-left">
                  It also renders the services in Credit Application Assistance <span className="text-[#03A651] font-bold">(CAA),</span> Attorney and consultant, consultancy on Micro Credit & SME’s Lending and supply of professional manpower through outsourcing process. We are specialized in the collection of commercial accounts <span className="text-[#03A651] font-bold">receivable (A/R),</span> bad debts,<span className="text-[#03A651] font-bold">pre-collection</span> outsourcing services, as well as many other aspects of recovery and debt collection services. Our professional collectors are having rich and diversified experience. <span className="text-[#03A651] font-bold">CDCS's</span> Collectors boast a long and proven history in commercial debt collection and related third-party collection services. Our Debt Collection Service is generally based on <span className="text-[#03A651] font-bold">“No Recovery -- No Fee”,</span> commission basis on monies collected whether paid directly in the bank by customer or through our office, once the file is placed with us.
                </p>
                

                <div ref={sectionRef} className="mt-60 xs:mt-20 sm:mt-2 flex flex-wrap xl:gap-16 gap-10 max-md:p-3 lg:text-lg lg:mt-14 xl:mt-2">
                  <div className="font-Poppins" data-aos="fade-left">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">{experience}+</span>
                    <br />
                    <p className="opacity-60 leading-6">Years<br />Experience</p>
                  </div>
                  <div className="font-Poppins" data-aos="fade-left">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">{customers}+</span>
                    <br />
                    <p className="opacity-60 leading-6">Happy<br />Customers</p>
                  </div>
                  <div className="font-Poppins" data-aos="fade-left">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">{services}+</span>
                    <br />
                    <p className="opacity-60 leading-6">Choice<br />of Services</p>
                  </div>
                  <div className="font-Poppins" data-aos="fade-left">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">{guides}+</span>
                    <br />
                    <p className="opacity-60 leading-6">Professional<br />Guides</p>
                  </div>
                </div>







              </div>

            </div>







          </div>
        </div>
      </div >
    </section >
  )
}

export default Section3