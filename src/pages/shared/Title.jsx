

const Title = ({ title , subTitle}) => {
    return (
        <div>
             <h1 className="text-3xl md:text-5xl py-10 md:py-16 font-semibold font-serif">{title}</h1>
             {/* <hr className="w-[70%]"/> */}
        </div>
    );
};

export default Title;