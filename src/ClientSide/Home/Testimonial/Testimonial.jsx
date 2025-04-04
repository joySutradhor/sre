import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './Testimonial.css'

const Testimonial = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 })
  const isXl = useMediaQuery({ minWidth: 1366 })
  const isLg = useMediaQuery({ minWidth: 1024 })
  const isMd = useMediaQuery({ minWidth: 768 })

  let slidesToShow = 1
  //   let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 1
    // slidesToScroll = 4;
  } else if (isXl) {
    slidesToShow = 1
    // slidesToScroll = 3;
  } else if (isLg) {
    slidesToShow = 1
    // slidesToScroll = 3;
  } else if (isMd) {
    slidesToShow = 1
    // slidesToScroll = 2;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow
    // slidesToScroll: slidesToScroll,
  }
  return (
    <div className='section'>
      <div className='relative'>
        <div
          style={{
            // backgroundImage: `url("https://i.ibb.co.com/wBkKgnw/group-1088-66f6576d0b079.webp")`,
            backgroundImage: `url("assets/images/testimonial-bg.png")`
          }}
          className='bg-no-repeat bg-center bg-cover w-full h-[684px] flex justify-center items-center opacity-40'
        ></div>
        {/* large */}
        <div className='hidden md:block '>
          <div className=' px-[7%] absolute inset-0 grid grid-cols-2 items-center justify-between lg:gap-[119px] gap-[30px]'>
            {/* ------slider */}

            <div className='slider-container   '>
              <Slider {...settings}>
                <div className='text-[#FFFFFF] rounded-[10px]   max-w-[95%] pt-[50px] pb-[50px] pl-[35px]  relative bg-[#22212199]/[.6]'>
                  <div className='flex justify-between items-start'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className='  text-[#FFFFFF] pb-[15px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center pb-[25px] text-[#FFD300] gap-x-[6px] pr-[46px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]'>
                      "I entered this course with meager experience in design,
                      and I would say that the course has really changed the way
                      I've been thinking about digital design.
                      {/* & has literally
                      gone through the entire process, from user research to
                      wireframing, prototyping, and usability testing. */}
                      I would recommend this course to anyone who wants to make
                      a career in UI/UX design.
                    </p>
                  </div>

                  <div className='flex items-center mb-5'>
                    <div>
                      <img
                        className='w-[50px] h-[50px] object-cover rounded-full'
                        src='https://i.ibb.co.com/6tyPyMD/output-5.jpg'
                        alt='Sarah Chowdhury'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <p className='text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#FFD300]'>
                        Sarah Chowdhury
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]'>
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[50px] pb-[50px] pl-[35px]  relative bg-[#22212199]/[.6] '>
                  <div className='flex justify-between items-start'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className='  text-[#FFFFFF] pb-[15px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center pb-[25px] text-[#FFD300] gap-x-[6px] pr-[46px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]'>
                      The website was great. Entered the course with zero
                      knowledge of coding but by the end of it, I was able to
                      create complete and fully functional websites.I am now
                      working as a junior web developer, and really, I can't ask
                      for a better foundation.
                    </p>
                  </div>

                  <div className='flex items-center mb-5'>
                    <div>
                      <img
                        className='w-[50px] h-[50px] object-cover rounded-full'
                        src='https://i.ibb.co.com/8XkWXPb/output-6.jpg'
                        alt='Audry Roy'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <p className='text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#FFD300]'>
                        Audry Roy
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]'>
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[50px] pb-[50px] pl-[35px]  relative bg-[#22212199]/[.6] '>
                  <div className='flex justify-between items-start'>
                    <FaQuoteLeft
                      size={45}
                      className='  text-[#FFFFFF] pb-[15px]'
                    />

                    <div className='flex items-center pb-[25px] text-[#FFD300] gap-x-[6px] pr-[46px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]'>
                      I've got a history relating to art and drawing which has
                      always gripped me.
                      {/* however, it felt appropriate to make a
                      big move to put this area of passion into full throttle
                      with graphic design.  */}
                      Case studies were very hands-on and enabled me to build a
                      diverse portfolio, now ready to tackle both print and
                      digital design projects. I would recommend this to anyone
                      keen to step into the realm of graphic design.
                    </p>
                  </div>

                  <div className='flex items-center mb-5'>
                    <div>
                      <img
                        className='w-[50px] h-[50px] object-cover rounded-full'
                        src='https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp'
                        alt='Lisa Dowen'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <p className='text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#FFD300]'>
                        Nazmul Islam
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]'>
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            {/* text */}

            <div className=' '>
              <h1 className=' text-[#FFD300] testimonialSub pb-[25px]'>
                Testimonial
              </h1>
              <h1 className='popularCategoryHead text-[#FFFFFF]  pb-[25px] '>
                What students say
              </h1>
              <div className='pb-[35px]'>
                <p className='joinClanSubPara text-[#FFFFFF] pb-[10px]'>
                  I Never Thought Learning Could Be This Fun! Studying feels so
                  easy with all the hands-on activities and engaging quizzes.
                  This website made learning so much more fun, and I'm able to
                  track my progress step by step. It's like having a tutor in my
                  pocket 24/7!
                </p>
                <p className="joinClanSubPara text-[#FFFFFF] text-center ">
                  {" "}
                  - Adnan Mahmud, College Student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* phone */}
        <div className='md:hidden block'>
          <div className=' sectionGap absolute inset-0 grid grid-cols-1 items-center justify-between gap-x-[30px]'>
            {/* text */}

            <div className=' text-center'>
              <h1 className=' text-[#FFD300] testimonialSub mb-[5px] '>
                Testimonial
              </h1>
              <h1 className='popularCategoryHead text-[#FFFFFF]  '>
                What students say
              </h1>
              <div className='pt-[20px]'>
                <p className='joinClanSubPara text-[#FFFFFF] '>
                  `I Never Thought Learning Could Be This Fun! Studying feels so
                  easy with all the hands-on activities and engaging quizzes.
                  This website made learning so much more fun, and I'm able to
                  track my progress step by step. It's like having a tutor in my
                  pocket 24/7!`
                </p>
                <p className='joinClanSubPara text-[#FFFFFF] text-center pt-[10px]'>
                  {' '}
                  - Adnan Mahmud, College Student
                </p>
              </div>

              {/* <button className="text-[#010101] buttonPara"></button> */}
            </div>
            {/* ------slider */}
            <div className='slider-container mb-[50px]'>
              <Slider {...settings}>
                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] '>
                  <div className='flex justify-between items-start'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className='  text-[#FFFFFF] mb-[10px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center mb-[10px] text-[#FFD300]  gap-x-[6px] pr-[20px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] customPara pr-[5px] pb-[10px]'>
                      "I entered this course with meager experience in design,
                      and I would say that the course has really changed the way
                      I've been thinking about digital design.
                      {/* & has literally
                      gone through the entire process, from user research to
                      wireframing, prototyping, and usability testing. */}
                      I would recommend this course to anyone who wants to make
                      a career in UI/UX design.
                    </p>
                  </div>

                  <div className='flex items-center mb-[5px]'>
                    <div>
                      <img
                        className='w-[40px] h-[40px] object-cover  rounded-full'
                        src='https://i.ibb.co.com/6tyPyMD/output-5.jpg'
                        alt='Sarah Chowdhury'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <p className='text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300]'>
                        Sarah Chowdhury
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[10px] text-[#FFFFFF]'>
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] '>
                  <div className='flex justify-between items-start'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className='  text-[#FFFFFF] mb-[10px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] customPara pr-[5px] pb-[10px]'>
                      The website was great. Entered the course with zero
                      knowledge of coding but by the end of it, I was able to
                      create complete and fully functional websites.I am now
                      working as a junior web developer, and really, I can't ask
                      for a better foundation.
                    </p>
                  </div>

                  <div className='flex items-center mb-[5px]'>
                    <div>
                      <img
                        className='w-[40px] h-[40px] object-cover rounded-full'
                        src='https://i.ibb.co.com/8XkWXPb/output-6.jpg'
                        alt='Audry Roy'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <p className='text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] '>
                        Audry Roy
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[10px] text-[#FFFFFF]'>
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] '>
                  <div className='flex justify-between items-start'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className='  text-[#FFFFFF] mb-[10px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] customPara pr-[5px] pb-[10px]'>
                      I've got a history relating to art and drawing which has
                      always gripped me.
                      {/* however, it felt appropriate to make a
                      big move to put this area of passion into full throttle
                      with graphic design.  */}
                      Case studies were very hands-on and enabled me to build a
                      diverse portfolio, now ready to tackle both print and
                      digital design projects. I would recommend this to anyone
                      keen to step into the realm of graphic design.
                    </p>
                  </div>

                  <div className='flex items-center mb-[5px]'>
                    <div>
                      <img
                        className='w-[40px] h-[40px] object-cover rounded-full'
                        src='https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp'
                        alt='Lisa Dowen'
                      />
                    </div>
                    <div className='ml-[12px]'>
                      <p className='text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] '>
                        Nazmul Islam – Graphic Designer
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[10px] text-[#FFFFFF]'>
                        Graphic Designer
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
