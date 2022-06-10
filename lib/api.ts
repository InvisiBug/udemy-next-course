import client from "./sanity";

const blogFields = `
  Title,
  subTitle,
  "slug": slug.current,
  "image": coverImage.asset->url,
  "author": author->{name, "avatar":avatar.asset->url},
  date
`;

// Cheet sheet https://www.sanity.io/docs/query-cheat-sheet
export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{
    ${blogFields}
  }`);

  return results;
};
