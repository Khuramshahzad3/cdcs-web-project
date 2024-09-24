import React from 'react'
import Rectangle3 from '../../assets/Images/Rectangle3.png'
import Service1 from '../../assets/Images/Service1.png'
import Service2 from '../../assets/Images/Service2.png'
import Service3 from '../../assets/Images/Service3.png'
const Section3 = () => {
  return (
    <section>
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto   lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            {/* <div className="p-2 flex flex-col items-center relative">
              <h1 class="max-w-[850px] text-[#210F03] text-center text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl xl:leading-[81px] w-full self-center whitespace-nowrap">

                Welcome to <span className="text-[#03A651]">Our</span>  Services
              </h1>
              <img src={Rectangle3} alt="" className='md:mt-20 mt-5' />
              <div className="max-w-[1110px] max-h-[240px] flex items-center justify-center flex-col  px-5 h-[180px]  rounded-[16px] bg-[#F9FDFF] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[12rem] absolute top-40 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] lg:h-[240px] xl:top-[575.796px]">
                <p className="max-w-[1095px] max-h-[149.14px]  text-[#210F03] text-center font-Poppins xl:text-[30px] lg:text-2xl font-light  xl:leading-[45px] text-sm xs:text-base">
                  <span className="text-[#03A651] font-bold">Our Services</span>, We offer expert financial solutions, including receivables collection, bad debt recovery, and IT services. Trust us for effective management of non-performing loans and diverse loan types
                </p>
              </div>


            </div> */}
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2   ">
          <div className=" ">
            <div className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center  md:mb-20 xl:gap-28">
              {/* images */}
              <div className="flex  flex-row md:flex-col relative  max-md:gap-3 md:mt-12  gap-[51px] lg:ml-5" data-aos="fade-right">
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[100%] md:h-[100%] "data-aos="fade-right">
                  <img src={Service1} alt="" className=' shadow-2xl rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[100%]" data-aos="fade-right" data-aos-delay="500">

                  <img src={Service2} alt="" className='  md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />

                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%]  md:w-[100%]" data-aos="fade-right" data-aos-delay="700">

                  <img src={Service3} alt="" className='  md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
              </div>

              <div className="mt-10 md:mt-0  flex flex-col items-center md:items-start gap-3" >
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start"data-aos="fade-left">
                  WELCOME TO OUR SITE!
                </h1>
                <p className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start" data-aos="fade-left">
                  Our Services


                </p>
             
                <ul className="max-w-[665px] max-h-[444px]  text-[#210F03] font-Poppins lg:text-[18px] font-light lg:leading-[30px] xl:leading-[37px]   md:text-start list-disc flex flex-col gap-3  xl:gap-7 max-md:ml-7 text-sm max-md:mb-80 " data-aos="fade-left">


                  <li>Collection of commercial Receivables (A/R), Bad Debts, Debts recovery of commercial entities including banks and DFIs.</li>

                  <li>  Skip Tracing.</li>
                  <li>  CAAP (Credit Application Assistance Programme)</li>
                  <li>  Supply of Professional Manpower Services</li>
                  <li> Consultancy on Micro Credit and SMEs Lending</li>
                  <li>IT. Solutions, Web Site Development, Software development</li>
                  <li>Recovery of NPLs</li>
                  <li> Recovery of self employment schemes</li>
                  <li> Consumer Loans</li>
                  <li>Vehicle Loans</li>
                  <li>  Commercial Loans</li>
                  <li>Bad Cheque</li>
                  <li>Overdraft Facilities</li>
                  <li> Credit Card Accounts</li>

                  <li>Mortgage Home Loans</li>
                  <li> Utilities</li>
                  <li> Retail and Department Store Accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Section3