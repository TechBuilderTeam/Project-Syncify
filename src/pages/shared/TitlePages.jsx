const TitlePages = ({ title, subTitle }) => {
    return (
        <div className="px-10 pt-10 md:pt-14 pb-4">
            <h1 className="text-3xl   pb-2 font-semibold ">
                {title}
            </h1>
            <hr className="w-full h-1 bg-gradient-to-r from-[#9d11bd] to-[#73e9fe] "/>
            <p className="text-sm  font-semibold mt-2 text-black dark:text-white ">
                {subTitle}
            </p>
        </div>
    );
};

export default TitlePages;