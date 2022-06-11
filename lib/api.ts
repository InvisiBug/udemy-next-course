import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

export const urlFor = (source: object | string) => {
  return imageUrlBuilder(client).image(source);
};

const blogCardFields = `
  Title,
  subTitle,
  "slug": slug.current,
  "image": coverImage,
  "author": author->{name, "avatar":avatar.asset->url},
  date,
`;

// Cheet sheet https://www.sanity.io/docs/query-cheat-sheet
export const getAllBlogs = async () => {
  const query = `*[_type == "blog"]{
    ${blogCardFields}
  }`;

  const results = await client.fetch(query);

  return results;
};

export const getBlogBySlug = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == $slug]{
    ${blogCardFields}
    content[]{..., "asset": asset->}
  }`;

  const params = { slug };

  const results = await client.fetch(query, params).then((response) => response?.[0]);

  // console.log(results);
  return results;
};
