import { client } from "@/lib/sanityClient"
export default async function FetchDataDoctor() {
  const data = await client.fetch(`*[_type=="doctor"]`)
  return data
}