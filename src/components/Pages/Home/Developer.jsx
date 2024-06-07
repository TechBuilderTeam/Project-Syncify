import { MdOutlineMail } from "react-icons/md";
import Title from "../../../pages/shared/Title";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";


const Developer = () => {
    const teamMembers = [
        {
            name: "Sabrina Rashid",
            position: "Team Leader",
            role: "Frontend Developer",
            email: "sabrina.rashid.sara@gmail.com",
            linkedin: "https://www.linkedin.com/in/sabrina--rashid",
            github: "https://github.com/sabrinara",
            imageSrc: "https://i.ibb.co/RvJtjZD/429823336-448305350855105-1214185624739971414-n.png",
        },
        {
            name: "Nazmul Islam",
            position: "Co-Leader",
            role: "Backend Developer",
            email: "najmulislamru@gmail.com",
            linkedin: "https://www.linkedin.com/in/najmulislamnajimofficial",
            github: "https://github.com/najmulislamnajim",
            imageSrc: "https://avatars.githubusercontent.com/u/78375634?v=4",
        },
        {
            name: "Rasel Chowdhury",
            position: "Member",
            role: "Frontend Developer",
            email: "chowdhuryrasel040@gmail.com",
            linkedin: "https://www.linkedin.com/in/rasel-chowdhury-4a27a220a/",
            github: "https://github.com/rasel-chowdhury1",
            imageSrc: "https://avatars.githubusercontent.com/u/87080744?v=4",
        },
        {
            name: "Md Akther Hosen",
            position: "Member",
            role: "Frontend Developer",
            email: "dev.aktherhosen@gmail.com",
            linkedin: "https://www.linkedin.com/in/md-akther-hosen/",
            github: "https://github.com/AktherHosen",
            imageSrc: "https://avatars.githubusercontent.com/u/79582560?v=4",
        },
        {
            name: "Sifath Islam",
            position: "Member",
            role: "Backend Developer",
            email: "sifathislam790@gmail.com",
            linkedin: "https://www.linkedin.com/in/mohaimenulislam1/",
            github: "https://github.com/Sifathislam",
            imageSrc: "https://avatars.githubusercontent.com/u/105329974?v=4",
        },


    ];

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success(`${label} copied to clipboard!`);
            // alert(`${label} copied to clipboard!`);
        }).catch(err => {
            console.error(`Failed to copy ${label}: `, err);
        });
    };
    return (
        <div>
            <div className=" px-10 py-8 mb-20">
                <Title title="Developers of Project Syncify " />

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  p-5 gap-3 justify-center mx-auto rounded-md">

                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center space-y-1">
                            <img
                                className="mx-auto rounded-full object-cover h-32 w-32"
                                src={member.imageSrc}
                                alt={`${member.name}'s image`}
                                width={300}
                                height={300}
                            />
                            <h2 className="text-xl font-semibold mt-2">{member.name}</h2>
                            <h2 className="text-md font-semibold">{member.position} <span className="text-xs">({member.role})</span></h2>
                            {/* <h2 className="text-sm font-semibold">({member.role})</h2> */}
                            <div className="flex justify-center items-center mt-1">
                                <div onClick={() => copyToClipboard(member.email, 'Email address')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <MdOutlineMail style={{ marginRight: '5px' }} />
                                    {/* {member.email} */}
                                </div>
                                <div onClick={() => copyToClipboard(member.github, 'GitHub username')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <IoLogoGithub style={{ marginRight: '5px' }} />
                                    {/* {member.github} */}
                                </div>
                                <div onClick={() => copyToClipboard(member.linkedin, 'LinkedIn profile URL')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <FaLinkedin style={{ marginRight: '5px' }} />
                                    {/* {member.linkedin} */}
                                </div>
                            </div>

                        </div>
                    ))}


                    <div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Developer;