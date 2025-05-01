import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// This is a **server component**
const dirContent = fs.readdirSync("content", "utf-8")
  
  const blog = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const {data}=matter(fileContent)
  return data

})
export default async function Page() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        My Top Blogs
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Explore the latest insights and trends in web development.
      </p>

      <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {blog.map((blog, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{blog.description}</p>
              <Link className={buttonVariants({ variant: "outline" })} href={`/blogpost/${blog.slug}`}>
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
