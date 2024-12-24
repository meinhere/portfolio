import React, {useState} from "react";
import contact from "../assets/Contact.json";
import Lottie from "lottie-react";
import { sendCustomEmail } from "../email";

const Contact = () => {
  const [status, setStatus] = useState(false);
  const [details, setDetails] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const handleChangeDetails = (e) => {
    const {name, value} = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendCustomEmail(details);
    if (res.status == "200") {
      setDetails((prevDetails) => {
        return {
          from_name: "",
          from_email: "",
          message: ""
        }
      })

      setStatus(true);
      setTimeout(() => setStatus(false), 5000);
    }
  }

  return (
    <section id="contact" className="bg-gray-100 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-amber-500">Lets Connect</h2>
            <p className="mb-4">I'm always open to new opportunities and collaboration. Lets connect with me!</p>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>
          <form onSubmit={handleSubmit} method="post" className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-amber-300 shadow-lg shadow-amber-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Full Name"
                value={details.from_name}
                onChange={handleChangeDetails}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Email"
                value={details.from_email}
                onChange={handleChangeDetails}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                value={details.message}
                onChange={handleChangeDetails}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {status && (
              <p className="text-green-500 font-base text-sm mb-3">Pesan berhasil dikirim</p>
            )}

            <button className="bg-amber-500 text-white px-3 py-2 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
