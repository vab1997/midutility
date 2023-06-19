/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const codeExample = `import { Dispatch, SetStateAction, useState } from 'react'

interface UseCounterOutput {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: Dispatch<SetStateAction<number>>
}

export function useCounter(initialValue?: number): UseCounterOutput {
  const [count, setCount] = useState(initialValue || 0)

  const increment = () => setCount(x => x + 1)
  const decrement = () => setCount(x => x - 1)
  const reset = () => setCount(initialValue || 0)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}`

export const DEFAULT_VALUE = {
  html: `<div class="container">
  <h1 class="title">Hello World</h1>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
</div>`,
  css: `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}`,
  javascript: `function hello() {
  console.log("Hello world!");
}`,
  javascriptJSX: `import { useCustomHook } from './useCustomHook'
  
export function hello() {
  const { isLoading, data } = useCustomHook()
  const { name } = data

  if (isLoading) return <div>loading...</div>

  return (
    <div>hello {name}</div>
  )
}`,
  CustomHook: `import {useState, useEffect} from 'react'
  
export function useCustomHook() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json)
        setIsLoading(false)
      })
  }, [])

  return { isLoading, data }
}`
}
