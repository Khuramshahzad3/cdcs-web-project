import React from 'react'
import Rectangle4 from '../../assets/Images/Rectangle4.png'
import St1 from '../../assets/Images/abt1.png'
import St2 from '../../assets/Images/abt2.png'
const Section3 = () => {
  return (
    <section>
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            <div className="p-2 flex flex-col items-center relative">
              <h1 className=" text-[#210F03] whitespace-nowrap text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center  text-center" data-aos="fade-left">

                About <span className="text-[#03A651]">Us</span>
              </h1>
              <img src={Rectangle4} alt="" className='md:mt-20 mt-5' data-aos="fade-left" />
              <div className="max-w-[1110px] max-h-[440px] flex items-center justify-center flex-col  px-5 h-[370px] xs:h-[450px] bg-[#F9FDFF] rounded-[16px]  shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[12rem] absolute top-40 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] md:h-[240px] lg:h-[280px] xl:h-[250px] xl:top-[575.796px] " data-aos="fade-left">
                {/*  */}
                <p className="max-w-[1095px]   text-[#210F03] text-center font-Poppins lg:text-[18px]  lg:leading-[30px] xl:leading-[37px] font-light   text-sm xs:text-base">
                  <span className="text-[#03A651] font-bold">The Corporate Debt Collection Services</span>, is formed by leading Lawyers associates and former executives of Banks/DFIs l who are having proven record in recovery of stuck-up and non performing loans. The Corporate Debt Collection Services is registered with Federal Board of Revenue (FBR), Government of Pakistan. The objective of CDCS is to build a partnership with clients to develop a plan to reduce short and long terms debts, speed up cash flow and reduces the cost.
                </p>
              </div>


            </div>
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2 mt-96 md:mt-48 flex flex-col md:flex-row md:gap-20 md:items-start items-center  justify-center  lg:mt-44  xl:mt-28 md:mb-20 xl:gap-28">
              {/* images */}
              <div className="grid grid-cols-2 md:grid-cols-1 max-lg:md:w-[279.5px] max-xl:lg:w-[347.672px] flex-col items-center justify-center mt-20  md:flex-col relative  max-md:gap-3 md:mt-32  lg:mt-52 xl:mt-60  gap-[51px] lg:ml-5 xl:gap-[60px] lg:gap-[50px] md:gap-10">
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%] md:h-[100%] " data-aos="fade-right">
                  <img src={St1} alt="" className=' shadow-2xl rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%]" data-aos="fade-right">

                  <img src={St2} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />

                </div>
                
               
            
                
              </div>

              <div className="mt-10 md:mt-0 lg:mt-10 xl:mt-20 flex flex-col items-center md:items-start gap-3  max-md:mb-10">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" data-aos="fade-left">
                  WELCOME TO OUR SITE!
                </h1>
                <p className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start" data-aos="fade-left">
                  About us
                </p>
                {/* <p className="text-[#03A651] font-bold font-Poppins text-xs mt-[-15px] cursor-pointer ">Click The <span className="text-black">Strategy</span> To Explore</p> */}
                <span className="font-semibold" data-aos="fade-left">The CDCS will provide the following services to its clients:  </span>
                <ul className="   text-[#210F03] font-Poppins lg:text-[18px] lg:leading-[30px] xl:leading-[37px] font-light  md:text-start list-disc flex flex-col gap-10   max-md:ml-7 text-sm  sm:text-base  md:leading-[30px] md:gap-[5vw]  lg:gap-[4vw] xl:gap-[80px] md:mt-5  max-w-[647px] max-lg:md:w-[376.5px] max-xl:lg:w-[559.406px]">



                  <li  data-aos="fade-left">
                    Collection of commercial Receivables (A/R), Bad Debts, Debts recovery of commercial entities including banks and DFIs.
                    <li>   Skip Tracing.</li>
                    <li>CAAP (Credit Application Assistance Programme)</li>
                    <li> Supply of Professional Manpower Services</li>
                    <li>  Consultancy on Micro Credit and SMEs Lending</li>
                    <li> IT. Solutions, Web Site Development, Software development</li>
                    <li> Recovery of NPLs</li>
                    <li> Recovery of self employment schemes</li>
                    <li>Consumer Loans</li>
                    <li> Vehicle Loans</li>
                    <li> Commercial Loans</li>
                    <li> Bad Cheque</li>
                    <li>  Overdraft Facilities</li>
                    <li>Credit Card Accounts</li>
                    <li> Mortgage Home Loans</li>
                    <li>Utilities</li>
                    <li>   Retail and Department Store Accounts</li>
                  </li>

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