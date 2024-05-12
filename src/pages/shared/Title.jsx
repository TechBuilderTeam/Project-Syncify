const Title = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl  py-10 md:py-10 font-bold ">
        {title}
      </h1>
      {/* <hr className="w-[70%]"/> */}
    </div>
  );
};

export default Title;
