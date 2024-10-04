import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "2fukw4d9",
  dataset: "production",
  apiVersion: "2024-09-18",
  useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}