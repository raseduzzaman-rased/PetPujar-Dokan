import React from "react";
import LottieAnimation from "./LottieAnimation";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 pb-12 pt-4 px-4">
      <div className="max-w-6xl w-full  grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white rounded-2xl shadow-xl">
        {/* Left Side (Lottie Animation placeholder) */}
        <div className="flex items-center justify-center  p-6">
          <LottieAnimation></LottieAnimation>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 ">
          <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
            Get In <span className="text-green-400">Touch</span>
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="What's the topic?"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-green-300 text-black font-semibold py-2 px-4 rounded-xl hover:bg-green-400 hover:text-black transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
