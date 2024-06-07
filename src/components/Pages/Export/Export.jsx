import Lottie from "lottie-react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import pdfani from "../../../../public/pdf.json";
import pdfani2 from "../../../../public/pdf2.json";
import pdfanimation from "../../../../public/pdft.json";
const Export = () => {
    const [file, setFile] = useState(null);
    const { id } = useParams();
    console.log({ id });

    useEffect(() => {
        fetch(`https://projectsyncifyapi.onrender.com/workspace/pdf/${id}/`)
            .then((res) => res.blob())
            .then((data) => {
                setFile(data);
                console.log(data);
            });
    }, [id]);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "document.pdf";
        link.click();
    };


    return (
        <div className="h-screen">
            <div className="py-2 mt-6">
                <div className="flex justify-between items-center pb-2">
                    <h1 className="text-3xl pb-2 font-semibold">
                        Export Project Documentation
                    </h1>
                    <button
                        className="bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white font-bold px-4 py-2 rounded-md"
                        onClick={handleDownload} title={"Download"}
                    >
                        Download
                    </button>
                </div>

                <hr className="w-full h-1 bg-gradient-to-r from-[#0c01a1] to-[#73e9fe]" />
                <p className="text-sm font-semibold mt-2 text-black dark:text-white">
                    Export all the data associated with your project. To keep a Documentation
                    of your project. With the workflow of your project. Thank you for
                    using our Project Syncify .
                </p>
            </div>
            <div className="flex justify-center items-center">

                <div className="hidden dark:flex justify-center items-center  text-center">
                    <div className="w-[480px]">
                        <Lottie animationData={pdfanimation} loop={true} />

                    </div>
                    <div className="w-[480px]">
                        <Lottie animationData={pdfani2} loop={true} />
                    </div>
                </div>

                <div className="w-[480px] dark:hidden">
                    <Lottie animationData={pdfani} loop={true} />
                </div>



            </div>

        </div>
    );
};

export default Export;