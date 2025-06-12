import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { reporter } from 'vfile-reporter'
import matter from "gray-matter"
import fs from 'fs'
import { notFound } from "next/navigation"
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {
    const filePath = `content/${params.slug}.md`

    if (!fs.existsSync(filePath)) {
        notFound()
        // return
    }

    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { content, data } = matter(fileContent)
    const processer = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })

    const htmlContnet = (await processer.process(content)).toString()
    return (
        <div className="mx-auto p-4 max-w-5xl">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-1-4 border-gray-500 pl-4 italic">&quot;{data.description}</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">{data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: htmlContnet }}
                className="prose dark:prose-invert [&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:bg-gray-800"
            ></div>

        </div>
    )
}