import React from 'react'
import Rectangle2 from '../../assets/Images/Rectangle2.png'
import Rectangledown from '../../assets/Images/woman-business-advisor-tech-companys-office-helping-client-with-financial-planning1.png'
import Rectanglebg from '../../assets/Images/Rectanglebg.png'
import Rectangleuper from '../../assets/Images/man-woman-are-looking-tablet-with-green-tag-that-says-f1.png'

const Section3 = () => {
  return (
    <section>
      <div className="bg-Artboard md:h-[550px] lg:h-[700px]  xl:h-[800px]">
       
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2 mt-5  flex flex-col md:flex-row md:gap-20 md:items-start items-center  lg:gap-32 xl:gap-40 mb-10 ">
              {/* images */}
              <div className="flex flex-row md:flex-col relative  max-md:gap-3 my-10 xl:mt-20">
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[100%] md:h-[100%] ">
                  <img src={Rectangleuper} alt="" className=' shadow-2xl rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[90%] lg:w-[100%]">

                  <img src={Rectangledown} alt="" className='opacity-80 md:absolute md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl   md:w-[90%] lg:w-[100%] rounded-3xl' />

                </div>
              </div>

              <div className="mt-10 md:mt-0 lg:mt-10 xl:mt-20 flex flex-col items-center md:items-start gap-3">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                  WELCOME TO OUR SITE!
                </h1>
                <p className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start">
                  Choosing a professional collection service
                </p>
                <p className="max-w-[665px] max-h-[444px]  text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px] text-center md:text-start">
                 

                  The current competition among collection services is good for you as the client. This competition contributes to a more <span  className="text-[#03A651] font-bold">professional</span> and efficient industry. By carefully <span  className="text-[#03A651] font-bold">evaluating</span> your company's  needs, as well as the capabilities of the collection servi       ces available, you can                        maximize your accounts receivable income and ensure that your customers are handled properly. Careful selection of a third party <span  className="text-[#03A651] font-bold">collection agency</span>  strengthens your bottom line and helps you to retain customers, leading to a more profit able business.
                </p>
                {/* <div className="mt-60 xs:mt-20 sm:mt-2 flex flex-wrap xl:gap-16 gap-10 max-md:p-3 lg:text-lg lg:mt-14 xl:mt-2">
                  <div className="font-Poppins">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">20+</span>
                    <br />
                    <p className="opacity-60 leading-6">Years
                      <br />Experience</p>
                  </div>
                  <div className="font-Poppins">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">100+</span>
                    <br />
                    <p className="opacity-60 leading-6">Happy
                      <br />Customer</p>
                  </div>
                  <div className="font-Poppins">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">15+</span>
                    <br />
                    <p className="opacity-60 leading-6">Choice
                      <br />of Services</p>
                  </div>
                  <div className="font-Poppins">
                    <span className="text-[#03A651] font-semibold leading-3 lg:text-2xl xl:text-3xl">20+</span>
                    <br />
                    <p className="opacity-60 leading-6">Professional

                      <br />Guides</p>
                  </div>

                </div> */}








              </div>

            </div>







          </div>
        </div>
      </div >
    </section >
  )
}

export default Section3