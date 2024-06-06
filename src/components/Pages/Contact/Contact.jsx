import { FiSend } from "react-icons/fi";
import { MdOutlineContactSupport } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Con from "../../../../public/contact.json";
import Lottie from "lottie-react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_paazs8s";
    const templateId = "template_wtff4y4";
    const publicKey = "-JYW9yU44lnGatpYW";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Project Syncify",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
        toast.error("Error sending email. Please try again.");
      });
  };
  return (
    <div className="px-10 py-20">
      <div className="text-center mt-3 mb-5">
        <div className="flex flex-col md:flex-row-reverse  items-center justify-between mt-0 mb-10">
          <div className="w-full md:w-1/3 mx-10 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl font-bold  ">Contact Us</h1>
            <p className="text-sm  my-2 ">Get in touch with us. We will respond as soon as possible.</p>
            <p className="text-sm  my-2 ">Reach Out for any type of Inquiries, or Just to Say Hi!</p>
            <p className="text-sm  my-2 ">Send us a message!</p>
          </div>
          <div className="w-full md:w-1/2 ml-10">
            <Lottie animationData={Con} loop={true} />
          </div>
          </div>
        </div>
        <div className="py-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl  pt-10 md:pt-10 font-bold ">
            Have any question? We would love to hear from you.       
             </h1>
          <hr className="hidden md:flex md:w-[70%] h-1 bg-gradient-to-r from-[#141679] to-[#73e9fe] mt-1" />
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 justify-center items-center gap-x-10 mt-10 md:mt-20">
          <div className="h-auto md:h-[320px] lg:h-[200px] shadow-md px-10 py-8 space-y-3 rounded-lg border-t-4 border-t-blue-700">
            <h1 className="text-lg font-semibold">User Guide</h1>
            <p>
              User guide provides detailed information on how to use project
              management tools, including how to set goals, track progress, and
              communicate with team members.
            </p>
          </div>
          <div className="h-auto md:h-[350px] lg:h-[250px]  shadow-md px-10 py-8 space-y-3 rounded-lg border-t-4 border-t-cyan-500">
            <h1 className="text-lg font-semibold">Help & Support</h1>
            <p className="mb-10">
              Providing comprehensive help and support for project management
              involves offering resources, tools, and assistance to team members
              and stakeholders.
            </p>
          </div>
          <div className="h-auto md:h-[320px] lg:h-[200px] shadow-md px-10 py-8 space-y-3 rounded-lg border-t-4 border-t-blue-700">
            <h1 className="text-lg font-semibold">Exclusive Services</h1>
            <ul className="list-disc list-inside ml-10" >
              <li>Project Management</li>
              <li>Task Management</li>
              <li>Team Collaboration</li>
              <li>Project Planning</li>
            </ul>
          </div>
        </div>
 
        </div>

      <section>
        <h1 className="text-3xl md:text-4xl  pt-10 md:pt-10 font-bold ">
          Get in Touch
        </h1>
        <hr className="w-[44%] md:w-[18%] h-1 bg-gradient-to-r from-[#141679] to-[#73e9fe] " />
        <div className="flex flex-col md:flex-row justify-center items-center mt-6">

          <div className="w-full md:w-1/2 h-[300px] md:h-[350px] flex justify-center ">
            <img
              src="https://i.ibb.co/m6VC4xg/Online-report-bro.png"
              alt=""
              className="h-full"
            />
          </div>
          <div className="w-full md:w-1/2">

            <form
              onSubmit={handleSubmit}
              className=" flex flex-col justify-center  gap-4 h-[500px]"
            >
              <input
                required
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="px-4 py-3 outline-none rounded-lg text-lg border-2 bg-gray-50 dark:bg-slate-950"
              />
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 outline-none rounded-lg text-lg border-2 bg-gray-50 dark:bg-slate-950"
              />
              <textarea
                required
                name="message"
                placeholder="Enter your message..."
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-4 py-3 outline-none rounded-lg text-lg border-2 bg-gray-50 dark:bg-slate-950"
              ></textarea>

              <div className="flex w-full justify-end p-2">
                <button value="Send" type="submit" className="btn px-5 py-3">
                  Send <FiSend className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
