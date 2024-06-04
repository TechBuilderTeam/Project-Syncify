import { FiSend } from "react-icons/fi";
import { MdOutlineContactSupport } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useState } from "react";
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
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <h3 className="text-lg font-semibold my-4">
          Have any question? We would love to hear from you.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center gap-x-10">
        <div className="h-auto md:h-[300px] lg:h-[200px] shadow-md px-10 py-8 space-y-3 rounded-lg border-t-4 border-t-purple-700">
          <h1 className="text-lg font-semibold">User Guide</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae non nesciunt sequi neque! Neque.
          </p>
        </div>
        <div className="h-auto md:h-[350px] lg:h-[250px]  shadow-md px-10 py-8 space-y-3 rounded-lg border-t-4 border-t-cyan-500">
          <h1 className="text-lg font-semibold">Help & Support</h1>
          <p className="mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae non nesciunt sequi neque! Neque.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="#contact"
              className="px-3 py-2 flex justify-between items-center gap-3 dark:bg-white dark:text-black  rounded-md hover:bg-black hover:text-white outline-none border-2 "
            >
              Contact <MdOutlineContactSupport className="text-lg" />
            </a>
          </div>
        </div>
        <div className="h-auto md:h-[300px] lg:h-[200px] shadow-md px-10 py-8 space-y-3 rounded-lg border-t-4 border-t-purple-700">
          <h1 className="text-lg font-semibold">Premium Account?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae non nesciunt sequi neque! Neque.
          </p>
        </div>
      </div>

      <section>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <div className="w-full md:w-1/2 h-[300px] md:h-[350px] flex justify-center ">
            <img
              src="https://i.ibb.co/m6VC4xg/Online-report-bro.png"
              alt=""
              className="h-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold mt-10 text-center md:text-start md:mt-0">
              Get in touch
            </h1>
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
                className="px-4 py-3 outline-none rounded-lg text-lg border-2 bg-gray-50 dark:bg-black"
              />
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 outline-none rounded-lg text-lg border-2 bg-gray-50 dark:bg-black"
              />
              <textarea
                required
                name="message"
                placeholder="Enter your message..."
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-4 py-3 outline-none rounded-lg text-lg border-2 bg-gray-50 dark:bg-black"
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
