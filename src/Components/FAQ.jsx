import React from "react";
import FaqAnimation from "./FaqAnimation";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-200 pb-12 pt-4 px-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8">
        {/* Title and Short Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-gray-600">
            Find answers to the most common questions about{" "}
            <span className="font-semibold">PetPujar Dokan</span> and our fast
            food services.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Side - FAQs */}
          <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
              <div className="space-y-4">
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 cursor-pointer font-medium focus:outline-none focus-visible:ring focus-visible:ring-green-400">
                    What type of food do you serve?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    We serve a wide range of delicious fast food such as
                    burgers, fries, sandwiches, fried chicken, and refreshing
                    drinks.
                  </p>
                </details>

                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 cursor-pointer font-medium focus:outline-none focus-visible:ring focus-visible:ring-green-400">
                    Do you provide home delivery?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Yes! We deliver hot and fresh food straight to your doorstep
                    within minutes.
                  </p>
                </details>

                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 cursor-pointer font-medium focus:outline-none focus-visible:ring focus-visible:ring-green-400">
                    Do you have vegetarian options?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Of course! We offer tasty vegetarian options like veggie
                    burgers, fries, and fresh salads for our customers.
                  </p>
                </details>

                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 cursor-pointer font-medium focus:outline-none focus-visible:ring focus-visible:ring-green-400">
                    What are your business hours?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    We are open daily from 10:00 AM to 11:00 PM, ready to serve
                    you fresh meals anytime.
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* Right Side - Lottie */}
          <div className="flex items-center justify-center">
            <FaqAnimation></FaqAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
