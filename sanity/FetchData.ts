
import { client } from "@/lib/sanityClient"
export default async function FetchData() {
  const data = await client.fetch(`*[_type=="products" && category=="refills"]`)
  return data
}
