const ContactUsHero = () => {
  return (
    <div className="relative xl:mt-[25px] lg:mt-[20px] mt-[10px]">
      <div
        style={{
          backgroundImage: `url("/EduBg.png")`,
        }}
        className="bg-no-repeat  bg-cover w-full  md:h-[400px] 2xl:h-[600px]
              h-[300px] flex justify-center items-center"
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto ">
        <h1 className="BannerHead text-black font-extrabold pb-[25px] text-center">
          Contact Us
        </h1>
        {/* <p className="text-[#FFFFFF]/[.8] BannerPara pb-[35px]">
          Home &gt; Contact Us
        </p> */}
      </div>
    </div>
  );
};

export default ContactUsHero;
