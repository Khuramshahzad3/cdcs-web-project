import React from 'react'
import Rectangle4 from '../../assets/Images/Rectangle4.png'
import St1 from '../../assets/Images/St1.png'
import St2 from '../../assets/Images/St2.png'
import St3 from '../../assets/Images/St3.png'
import St4 from '../../assets/Images/St4.png'
import St5 from '../../assets/Images/St5.png'
const Section3 = () => {
  return (
    <section>
      <div className="bg-Artboardlarge   ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            <div className="p-2 flex flex-col items-center relative">
              <h1 class=" text-[#210F03] text-center text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center whitespace-nowrap">

                Welcome to <span className="text-[#03A651]">Our</span>  Strategy
              </h1>
              {/* <img src={Rectangle4} alt="" className='md:mt-20 mt-5' />
              <div className="max-w-[1110px] max-h-[240px] flex items-center justify-center flex-col  px-5 h-[180px]  rounded-[16px] bg-[#F9FDFF] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[12rem] absolute top-40 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] lg:h-[240px] xl:top-[575.796px]">
                <p className="max-w-[1095px] max-h-[149.14px]  text-[#210F03] text-center font-Poppins xl:text-[30px] lg:text-2xl font-light  xl:leading-[45px] text-sm xs:text-base">
                  <span className="text-[#03A651] font-bold">Our Services</span>, We offer expert financial solutions, including receivables collection, bad debt recovery, and IT services. Trust us for effective management of non-performing loans and diverse loan types
                </p>
              </div> */}


            </div>
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2 flex flex-col md:flex-row md:gap-20 md:items-start items-center    md:mb-20 xl:gap-28">
              {/* images */}
              <div className="flex flex-col items-center justify-center   md:flex-col relative  max-md:gap-3 md:top-10   gap-[51px] lg:ml-5 xl:gap-[60px] lg:gap-[50px] md:gap-7">
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[100%] md:h-[100%] ">
                  <img src={St1} alt="" className=' shadow-2xl rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%] md:w-[100%]">

                  <img src={St2} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />

                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%]  md:w-[100%]">

                  <img src={St3} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%]  md:w-[100%]">

                  <img src={St4} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)] w-[50%] h-[50%]  md:w-[100%]">

                  <img src={St5} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
              </div>

              <div className="mt-10 md:mt-0  flex flex-col items-center md:items-start gap-3 h-full mb-[35rem] xs:mb-[32rem] sm:mb-[20rem] md:mb-0">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start">
                  WELCOME TO OUR SITE!
                </h1>
                <p className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start">
                  Our Strategy


                </p>
                <p className="text-[#03A651] font-bold font-Poppins text-xs mt-[-15px] cursor-pointer ">Click The <span className="text-black">Strategy</span> To Explore</p>
                <ul className=" max-h-[444px]  text-[#210F03] font-Poppins lg:text-[22px] font-light  md:text-start list-disc flex flex-col gap-10 xl:text-2xl  max-md:ml-7 text-sm  sm:text-base  md:leading-[30px] lg:leading-[40px] xl:leading-[53px] md:gap-[5vw]  lg:gap-[7vw] xl:gap-[100px] md:mt-5  max-w-[647px]">


                  <li >
                    <span className="font-semibold">Experienced collectors: </span>
                    <br />
                    Our collection staffs have the experience and training to maintain a consistent high rate of recovery. Our training includes sales as well as collection tactics to assist our collectors in getting past the gatekeeper, identifying the decision maker, overcoming objections, and convincing your customer it is in their best interest to pay your outstanding amounts.</li>
                  <li >
                    <span className="font-semibold">  Flexible Approach: </span>
                    <br />
                  CDCS maintains a client profile that identifies the tenor of the collection tactics you want us to use on your   Our standard objective is to collect your accounts while maintaining your relationship with your customer.</li>
                  <li >
                    <span className="font-semibold">Personalized Service: </span>
                    <br />
                    The same staff member will handle your account from beginning to end. Our acknowledgement will identify the collector handling each account so you know whom to contact should the need arise.</li>
                  <li >
                    <span className="font-semibold">Comprehensive Reports: </span>
                    <br />
                    Each collector is trained to report developments to you as they occur or at least every thirty days, whichever is more frequent. Summary reports listing each account or just listing the statistics can be tailored to meet your needs.</li>
                  <li className='md:mt-10 xl:mt-0'>
                    <span className="font-semibold">Quality Legal/Attorney Services: </span>
                    <br />
                     If we are unable to collect an account, we forward the account onto an attorney/Legal Advisor in the debtor's area who specializes in commercial and banking court laws.</li>
                  

                  
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