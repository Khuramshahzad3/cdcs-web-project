import React, { useState } from 'react'
import Rectangle4 from '../../assets/Images/Rectangle4.png'
import St1 from '../../assets/Images/faq1.png'
import St2 from '../../assets/Images/faq2.png'
import St3 from '../../assets/Images/faq3.png'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const Section3 = () => {
  const faqData = [
    {
      question: 'Why use a collection agency?',
      answer: 'Many debtors will pay a collection agency even though they never cooperated with the original creditor. The debtors sometimes realize you are serious or don\'t want a damaged credit rating or to go to court.'
    },
    {
      question: 'How long will it take for you to collect my money?',
      answer: 'Not all claims are collectible as some debtors may skip, file bankruptcy, become deceased or just refuse to pay.'
    },
    {
      question: 'What if the debtor disputes the debt or just refuses to pay?',
      answer: 'If the debtor disputes the debt, we will provide them with documentation to prove the validity of the debt.'
    },
    {
      question: 'How actively do you pursue bad addresses?',
      answer: 'We continue to try to locate debtors for at least 6 months to a year, then keep checking back monthly for updated information.'
    },
    {
      question: 'Does the age of the debt make it more difficult to collect?',
      answer: 'Yes, the older a debt is, the harder it is to collect.'
    },
    {
      question: 'Does your company charge an annual fee?',
      answer: 'No, we do not charge an annual or monthly fee.'
    },
    {
      question: 'What info would you need from me in order to get started?',
      answer: 'Your company name, address, contact details, the debtor\'s contact information, total amount owed, and when it was due.'
    },
    {
      question: 'Is there a minimum amount someone needs to owe me?',
      answer: 'No, we do not have a minimum or maximum limit on accounts placed.'
    },
    {
      question: 'Do you purchase the debts outright or charge a percentage?',
      answer: 'We charge a percentage of the debt collected. No charge if nothing is collected.'
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      <div className="bg-Artboardlarge  overflow-x-hidden ">
        <div className="max-w-[1440px] mx-auto  lg:px-10  xl:px-24 p-2  md:p-10 md:py-10">
         
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
                <div className="max-w-[439.052px] max-h-[367.6px]  rounded-[21px_21px_11px_11px] bg-[rgba(217,217,217,0.39)]  xl:hidden  md:w-[100%]" data-aos="fade-right">

                  <img src={St3} alt="" className='   md:left-[8.542vw] md:top-[16.628vw] 2xl:left-[124.03px] 2xl:top-[241.439px] shadow-2xl    md:w-[100%] rounded-3xl' />
                </div>
               
               

              </div>


              <div className="faq-container  mx-auto my-10 bg-white shadow-2xl p-6 md:w-[600px] rounded-lg xl:w-[700px]" data-aos="fade-left">
                <h1 className="text-2xl md:text-4xl font-bold text-[#03A651] text-center mb-6">
                  FAQs 
                </h1>

                {faqData.map((faq, index) => (
                  <div key={index} className="faq-item border-b py-5">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg md:text-xl font-medium">
                        {faq.question}
                      </h3>
                      <span>
                        {openIndex === index ? (
                          <FaChevronUp className="text-[#03A651]" />
                        ) : (
                          <FaChevronDown className="text-[#03A651]" />
                        )}
                      </span>
                    </div>
                    {openIndex === index && (
                      <p className="mt-2 text-sm md:text-base text-gray-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Section3
