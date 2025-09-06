import fs from "fs";
import path from "path";
import matter from "gray-matter";


export async function generateStaticParams() {
    const files = fs.readdirSync("content");

    return files.map((filename) => {
        return { slug: filename.replace(".md", "") };

    });
}
