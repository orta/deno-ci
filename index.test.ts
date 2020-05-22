import { shouty } from "./index.ts"

Deno.test("upper cases the string", () =>{
  const shouted = shouty("Hello World")

  if ("HELLO WORLD" !== shouted) {
    throw new Error("Did not match")
  }
})
