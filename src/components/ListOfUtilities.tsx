import { kv } from "@vercel/kv"
import Link from "next/link"
import { ArrowUp } from "./icons/ArrowUp"
import { Utility } from "./Utility"

interface ValueKey {
  title: string
  description: string
  use_case: string
  code: string
  language: string
  timestamp: number
}

export async function ListOfUtilities() {
  const listKeysUtilities = (await kv.keys("*")).splice(0, 10)
  const listUtilities = await Promise.all(listKeysUtilities.map(async (key) => {
    const value: ValueKey | null = await kv.get(key)
    if (!value) return null

    const { title, description, use_case, code, language, timestamp } = value
    return { key, title, description, use_case, code, language, timestamp }
  }).filter(Boolean))
  console.log(listUtilities)

  return (
    <section className="flex flex-col gap-12 px-10 py-16 w-full">
      <h1 className="text-6xl text-[#EE81C3] font-bold">Last utilities created</h1>
      <div className="flex items-center justify-center gap-4">
        {listUtilities.map((utility) => (
          <Utility
            key={utility?.key}
            title={utility?.title}
            description={utility?.description}
          />
        ))}
      </div>
    </section>
  )
}