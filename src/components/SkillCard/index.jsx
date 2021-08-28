const SkillCard = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={500 * props?.counter}
      className="flex rounded-lg  transition-colors duration-200 mb-4 bg-veryGray justify-center items-center w-full cursor-pointer  h-12"
    >
      <div className="bg-greyish  w-1/3 h-full flex items-center justify-center">
        <i data-feather="star" className="cursor-pointer text-whitish" />
      </div>
      <div className="w-2/3 p-4 md:pl-1 lg:pl-4">{props?.item}</div>
    </div>
  );
};

export default SkillCard;
