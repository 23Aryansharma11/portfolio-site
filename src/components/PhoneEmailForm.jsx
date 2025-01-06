import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const serviceId = "service_gg9b0d3";
const templateId = "template_ry3ed0h";
const publicKey = "Sg87HvsjULMUtAoxL";

const PhoneEmailForm = ({ myEmail }) => {
  const [formData, setFormData] = useState({
    from: '',
    subject: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState("Send")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from || !formData.subject || !formData.message) {
      alert("All fields are mandatory");
      return;
    }
    setButtonText("Sending...")
    const templateParams = {
      from_name: formData.subject,
      from_email: formData.from,
      to_name: "Aryan Sharma",
      message: formData.message
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setFormData({ from: '', subject: '', message: '' });
      alert("✅ Sent");
      setButtonText("Send")
    } catch (error) {
      console.error(error);
      alert("❎ Error");
      setButtonText("Send")
    }
  };

  return (
    <div className="relative flex justify-center items-center overflow-hidden dark:bg-dark-100 dark:text-white">
      {/* iPhone Body */}
      <div className="w-64 h-[32rem] border bg-gray-200 rounded-[2.5rem] relative flex flex-col items-center dark:bg-dark-200">
        {/* Notch */}
        <div className="w-[40%] h-4 bg-gray-800 rounded-lg mt-2"></div>

        {/* Screen */}
        <div className="w-[90%] h-[85%] bg-white-200 rounded-xl mt-4 p-4 flex flex-col justify-between shadow-inner overflow-scroll relative dark:bg-gray-800">
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">From:</label>
            <input
              type="email"
              name="from"
              placeholder="Your email"
              required
              min={3}
              value={formData.from}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full focus:ring-0 focus:outline-none dark:border-gray-500 dark:bg-dark-200 dark:text-gray-200"
            />
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">To:</label>
            <input
              type="text"
              value={myEmail}
              readOnly
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full focus:ring-0 focus:outline-none dark:border-gray-500 dark:bg-dark-200 dark:text-gray-200"
            />
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Subject:</label>
            <input
              type="text"
              name="subject"
              min={3}
              required
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full focus:ring-0 focus:outline-none dark:border-gray-500 dark:bg-dark-200 dark:text-gray-200"
            />
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Message:</label>
            <textarea
              name="message"
              required
              min={3}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full h-20 focus:ring-0 focus:outline-none dark:border-gray-500 dark:bg-dark-200 dark:text-gray-200"
            ></textarea>
          </form>
          <button type="submit" onClick={handleSubmit} className="mt-4 bg-[#3A6EA5] text-white-100 py-2 px-6 rounded focus:outline-none focus:ring-0 hover:bg-[#2A5680] dark:bg-blue-700 dark:hover:bg-blue-800">
            {buttonText}
          </button>
        </div>

        {/* Bottom Line (like iPhone's dock area) */}
        <div className="absolute bottom-4 w-[40%] h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneEmailForm;
