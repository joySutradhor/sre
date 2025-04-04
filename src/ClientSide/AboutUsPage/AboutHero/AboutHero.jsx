const AboutHero = () => {
  return (
    <div className="xl:mt-[25px] lg:mt-[20px] mt-[10px] group">
      <div className="">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/dM5DM24/About-Us-Edn.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[400px] 2xl:h-[600px] h-[300px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto 2xl:max-w-[1000px] xl:max-w-[700px] lg:max-w-[500px] px-2">
            <h1 className="hidden md:block BannerHead text-[#FFFFFF] pb-[35px] text-center relative group">
              A Large Range of Course{" "}
              <span className="relative text-[#FFD300] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full">
                Learning Paths Home
              </span>
            </h1>
            <h1 className="block md:hidden BannerHead text-[#FFFFFF] pb-[25px] text-center">
              A Large Range of Course{" "}
              <span className="relative text-[#FFD300] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-[#FFD300] after:transition-all after:duration-300 hover:after:w-full">
                Learning Paths Home
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
