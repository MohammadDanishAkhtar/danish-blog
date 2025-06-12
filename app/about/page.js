import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/images/sample profile.jpeg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello, my name is Mohammad Danish Akhtar and I am a web developer.

                I’m a Computer Science student with a strong foundation in front-end technologies like HTML, CSS, JavaScript, React, and Next.js. I enjoy building responsive and interactive user interfaces, and I’ve developed projects like a financial calculator and a tour booking website to showcase my skills.

                This blog is a part of my learning journey—designed and developed using Next.js for fast performance and server-side rendering, Tailwind CSS for utility-first styling, and JavaScript for interactive features. It’s built to be clean, responsive, and easy to navigate, allowing me to share insights, tutorials, and experiences as I grow in the field of web development
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out to me anytime</p>

          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Mobile</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">📱 7798869115</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">📧 danishmda77@gmail.com</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                🔗 <a href="https://linkedin.com/in/mohammad-danish-akhtar" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">mohammad-danish-akhtar</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
