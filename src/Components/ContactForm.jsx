import React from "react";
import { FaDownload } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="flex justify-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-6">
        
        <div className="flex-1 ">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Let's Talk
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
            Ready to go global this summer?
            <br /> Drop us a line. Our program advisors will help you choose the
            right fit.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
            />
            <input
              type="email"
              placeholder="abc@example.com"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
            />
            <input
              type="text"
              placeholder="City, country"
              className="w-full border rounded-lg p-3 focus:outline-blue-500"
            />
            <textarea
              placeholder="Write your message"
              className="w-full border rounded-lg p-3 h-24 focus:outline-blue-500"
            ></textarea>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Send Message
              </button>
              <button className="flex justify-center items-center gap-2 border px-6 py-3 rounded-lg font-semibold text-blue-600 border-blue-600 hover:bg-blue-50 w-full md:w-auto">
                <FaDownload className="text-lg" />{" "}
                <span>Download Program Catalog</span>
              </button>
            </div>
          </form>
        </div>

        
        <div className="flex-1 hidden md:flex justify-center items-center">
          <img
            src="/contact.jpeg"
            alt="Contact Us"
            className="rounded-xl w-full max-w-xs object-cover border-2 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
