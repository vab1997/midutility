import Link from "next/link"
import { GithubIcon } from "./icons/GithubIcon"
import { TwitterIcon } from "./icons/TwitterIcon"

export function Footer() {
  return (
    <footer className="flex items-center justify-between mt-24 py-10 px-10 w-full">
      <div>
        <p className="text-xl text-gray-50 italic">
          Create by Victor Bejas
        </p>
      </div>
      <div className="flex items-center justify-center gap-6 text-gray-50">
        <a href="https://github.com/vab1997" target="_blank" rel="noreferrer nopener">
          <GithubIcon width={40} height={40} />
        </a>
        <a href="https://twitter.com/victorbejas" target="_blank" rel="noreferrer nopener">
          <TwitterIcon width={40} height={40} />
        </a> 
      </div>
    </footer>
  )
}