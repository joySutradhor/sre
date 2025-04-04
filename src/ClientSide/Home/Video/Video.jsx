import "./Video.css";

const Video = () => {
	return (
		<div className="flex justify-center items-center mt-[60px] md:mt-[80px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[100px]">
			<div
				className="relative w-full overflow-hidden"
				style={{ paddingTop: "56.25%" }}
			>
				<iframe
					className="absolute top-0 left-0 w-full h-full"
					src="https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default Video;
