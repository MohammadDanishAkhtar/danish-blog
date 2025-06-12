import React from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image';
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container px-6 py-10 mx-auto lg:h-128 lg:flex lg:items-center lg:space-x-8">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community
            <br className="hidden lg:block" /> components using
            <span className="font-semibold underline decoration-primary"> Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects, or landing sites!
          </p>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
          <Image
          width={100}
          height={100}
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Choose Your Plan</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Select a plan that fits your needs</p>

          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Basic', price: '$10 / month', features: ['10 Projects', '5GB Storage', 'Basic Support'] },
              { title: 'Pro', price: '$25 / month', features: ['50 Projects', '50GB Storage', 'Priority Support'], highlight: true },
              { title: 'Premium', price: '$50 / month', features: ['Unlimited Projects', '200GB Storage', '24/7 Support'] },
            ].map((plan, index) => (
              <div key={index} className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg ${plan.highlight ? 'border-2 border-primary' : ''}`}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{plan.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 bg-violet-600 text-white dark:bg-yellow-500 dark:text-gray-900 hover:bg-violet-700 dark:hover:bg-yellow-600 rounded-lg transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Choose Us?</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Here’s what makes us different from the rest</p>

          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">High Quality</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Our services ensure the best quality at affordable prices.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Your data is protected with top-tier security measures.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">We are here to help you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}