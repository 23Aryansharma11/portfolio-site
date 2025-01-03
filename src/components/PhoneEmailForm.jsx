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
  const [msg, setMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Sending...");
    const templateParams = {
      from_name: formData.subject,
      from_email: formData.from,
      to_name: "Aryan Sharma",
      message: formData.message
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setFormData({ from: '', subject: '', message: '' });
      setMsg("✅ Sent");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMsg("❎ Error");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  };

  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      {/* iPhone Body */}
      <div className="w-64 h-[32rem] border bg-gray-200 rounded-[2.5rem] relative flex flex-col items-center">
        {/* Notch */}
        <div className="w-[40%] h-4 bg-gray-800 rounded-lg mt-2"></div>

        {/* Screen */}
        <div className="w-[90%] h-[85%] bg-white-200 rounded-xl mt-4 p-4 flex flex-col justify-between shadow-inner overflow-scroll relative">
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
            <label className="text-sm font-medium text-gray-600">From:</label>
            <input
              type="email"
              name="from"
              placeholder="Your email"
              value={formData.from}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full focus:ring-0 focus:outline-none"
            />
            <label className="text-sm font-medium text-gray-600">To:</label>
            <input
              type="text"
              value={myEmail}
              readOnly
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full focus:ring-0 focus:outline-none"
            />
            <label className="text-sm font-medium text-gray-600">Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full focus:ring-0 focus:outline-none"
            />
            <label className="text-sm font-medium text-gray-600">Message:</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full h-20 focus:ring-0 focus:outline-none"
            ></textarea>
          </form>
          <button type="submit" onClick={(e) => handleSubmit(e)} className="mt-4 bg-[#3A6EA5] text-white-100 py-2 px-6 rounded focus:outline-none focus:ring-0">
            Send
          </button>
          {/* Notification */}
          {msg && (
            <div className={`absolute top-[-50px] left-0 w-full text-center text-white bg-white-300 border p-2 rounded-lg font-bold tracking-wider animate-slideInOut`}>
              {msg}
            </div>
          )}
        </div>

        {/* Bottom Line (like iPhone's dock area) */}
        <div className="absolute bottom-4 w-[40%] h-1 bg-gray-400 rounded-full"></div>
      </div>

      <style>
        {`
          @keyframes slideInOut {
            0% {
              top: -50px;
            }
            50% {
              top: 10px;
            }
            100% {
              top: -50px;
            }
          }

          .animate-slideInOut {
            animation: slideInOut 2s forwards ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default PhoneEmailForm;
