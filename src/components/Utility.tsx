import Link from "next/link"
import { ArrowUp } from "./icons/ArrowUp"

const COLORS_ARTICLES = {
  1: "bg-yellow-200",
  2: "bg-blue-200",
  3: "bg-green-200",
  4: "bg-red-200",
  5: "bg-purple-200",
  6: "bg-pink-200",
  7: "bg-indigo-200",
  8: "bg-gray-200",
  9: "bg-orange-200",
  10: "bg-teal-200"
}

const randomColor = () => COLORS_ARTICLES[Math.floor(Math.random() * 10) + 1 as keyof typeof COLORS_ARTICLES]

export function Utility({ title, description, key }: { title: string | undefined, description: string | undefined, key: string | undefined }) {
  return (
    <article className={`${randomColor()} flex flex-col rounded-lg gap-2 py-4 px-6 h-40 w-1/5`} >
      <header className="flex items-center justify-between px-2 py-2">
        <h2 className="text-[#14151A] text-xl font-medium">{title}</h2>
        <Link href={`/${key}`}>
          <ArrowUp width={40} height={40} />
        </Link>
      </header>
      <div className="px-2">
        <p className="text-[#14151A]">{description}</p>
      </div>
      <footer className="flex items-center justify-end mt-2 px-2 w-full">
        <p className="text-[#14151A] font-medium text-sm italic">By @vab1997</p>
      </footer>
    </article>
  )
}