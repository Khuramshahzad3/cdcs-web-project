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
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
          <div className=" ">
            {/* upper div */}

            {/* <div className="p-2 flex flex-col items-center relative">
              <h1 className=" text-[#210F03] xs:whitespace-nowrap text-xl font-Poppins xl:text-[70px] md:text-3xl font-semibold xs:text-2xl lg:leading-[81px] w-full self-center  text-center">

                Welcome to <span className="text-[#03A651]">Our</span>  Outsourcing
              </h1>
              <img src={Rectangle4} alt="" className='md:mt-20 mt-5' />
              <div className="max-w-[1110px] max-h-[240px] flex items-center justify-center flex-col  px-5 h-[180px]  rounded-[16px] bg-[#F9FDFF] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] xs:top-[12rem] absolute top-40 sm:top-[18rem] md:top-[50.417vw] w-[83.333vw] lg:h-[240px] xl:top-[575.796px]">
                <p className="max-w-[1095px] max-h-[149.14px]  text-[#210F03] text-center font-Poppins xl:text-[30px] lg:text-2xl font-light  xl:leading-[45px] text-sm xs:text-base">
                  <span className="text-[#03A651] font-bold">Our Services</span>, We offer expert financial solutions, including receivables collection, bad debt recovery, and IT services. Trust us for effective management of non-performing loans and diverse loan types
                </p>
              </div>


            </div> */}
          </div>
        </div>
        {/* lower div */}
        <div className="max-w-[1440px] mx-auto  lg:px-6  xl:px-12 max-md:p-2  md:p-5 ">
          <div className=" ">
            <div className="p-2  flex flex-col md:flex-row md:gap-20 md:items-start items-center  justify-center  md:mb-20 xl:gap-28">
              {/* images */}
              <div className="grid grid-cols-2 md:grid-cols-1 max-lg:md:w-[279.5px] max-xl:lg:w-[347.672px] flex-col items-center justify-center   md:flex-col relative  max-md:gap-3  md:mt-16 lg:mt-20 gap-[51px] xl:mt-28 lg:ml-5 xl:gap-[60px] lg:gap-[50px] md:gap-10">
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%] md:h-[100%] " data-aos="fade-right">
                  <img src={St1} alt="" className=' shadow-2xl rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]   md:w-[100%]" data-aos="fade-right">

                  <img src={St2} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />

                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]    md:w-[100%]" data-aos="fade-right">

                  <img src={St3} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]    md:w-[100%]" data-aos="fade-right">

                  <img src={St4} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]    md:w-[100%]" data-aos="fade-right">

                  <img src={St5} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]    md:w-[100%]" data-aos="fade-right">

                  <img src={St3} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]  lg:hidden  md:w-[100%]" data-aos="fade-right">

                  <img src={St5} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>

              </div>

              <div className="mt-10 md:mt-0  flex flex-col items-center md:items-start gap-3  max-md:mb-10">
                <h1 className="text-[#03A651] font-poppins text-[20px] font-semibold leading-normal text-center md:text-start" data-aos="fade-left">
                  WELCOME TO OUR SITE!
                </h1>
                <p className="max-w-[497px] text-[#333] font-Poppins text-lg lg:text-[32px] text-center font-semibold leading-normal md:text-start" data-aos="fade-left">
                  FAQS
                </p>

                <ul className="   text-[#210F03] font-Poppins lg:text-[18px]  lg:leading-[30px] xl:leading-[37px] font-light  md:text-start list-disc flex flex-col gap-10  max-md:ml-7 text-sm  sm:text-base  md:leading-[30px] md:gap-[3vw] lg:gap-[4vw] xl:gap-[130px] md:mt-5  max-w-[647px] max-lg:md:w-[396.5px] max-xl:lg:w-[559.406px]">
                  <li data-aos="fade-left">
                    <span className="font-semibold"> Why use a collection agency? </span>
                    <br />
                    Many debtors will pay a collection agency even though they never cooperated with the original creditor. The debtors sometimes realize you are serious or don't want a damaged credit rating or to go to court, therefore it is sometimes possible for the agency to collect when the client was not able to.</li>
                  <li data-aos="fade-left">
                    <span className="font-semibold">       How long will it take for you to collect my money? </span>
                    <br />

                    Not all claims are collectible as some debtors may skip, file bankruptcy, become deceased or just refuse to pay. The age of the debt also plays a part in how long it may take to collect anything, if the debt is old and/or the debtor requires backup paperwork, that can prolong any collections</li>
                  <li data-aos="fade-left">
                    <span className="font-semibold">What if the debtor disputes the debt or just refuses to pay?
                    </span>
                    <br />
                    If the debtor disputes the debt, we will provide them with an documentation you can provide us to prove the validity of the debt. If the debtor refuses to pay, we will suggest legal action.</li>
                  <li data-aos="fade-left">
                    <span className="font-semibold"> How actively do you pursue bad addresses?
                    </span>
                    <br />
                    We continue to try to locate debtors for at least 6 months to a year, then we usually keep checking back on the account monthly to see if any files have been updated, such as credit bureau files, new address, employment, so we can locate them. The account is looked at weekly to make sure every effort has been made to locate the debtor so that we can then try to collect.</li>
                  <li className='md:mt-10 xl:mt-0' data-aos="fade-left">
                    <span className="font-semibold">                    Does the age of the debt make it more difficult to collect?
                    </span>
                    <br />
                    Yes, the older a debt is, the harder it is to collect.
                  </li>
                  <li className='md:mt-10 xl:mt-0' data-aos="fade-left">
                    <span className="font-semibold">  Does your company charge an annual fee? </span>
                    <br />
                    No, we do not charge an annual or monthly fee.

                  </li>
                  <li className='md:mt-10 xl:mt-0' data-aos="fade-left">
                    <span className="font-semibold">                     What info would you need from me in order to get started?
                    </span>
                    <br />
                    Your company name, address, fax, phone, and email.
                    The debtor's contact information, name, address, any contact phone numbers, email etc.
                    Total amount owed and when it was due.
                  </li>
                  <li className='md:mt-10 xl:mt-0' data-aos="fade-left">
                    <span className="font-semibold"> Is there a minimum amount someone needs to owe me in order for you to get involved? </span>
                    <br />
                    No, we do not have a minimum or maximum limit on accounts placed.

                  </li>
                  <li className='md:mt-10 xl:mt-0' data-aos="fade-left">
                    <span className="font-semibold">  Do you purchase the debts outright from us or do you charge a percentage of the debt collected? </span>
                    <br />

                    A percentage of the debt collected. No charge if nothing is collected.

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