import client from "./sanity";

const blogCardFields = `
  Title,
  subTitle,
  "slug": slug.current,
  "image": coverImage.asset->url,
  "author": author->{name, "avatar":avatar.asset->url},
  date
`;

// Cheet sheet https://www.sanity.io/docs/query-cheat-sheet
export const getAllBlogs = async () => {
  const query = `*[_type == "blog"]{
    ${blogCardFields}
  }`;

  const results = await client.fetch(query);

  return results;
};

const blogFields = `

`;

export const getBlogBySlug = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == $slug]{
    ${blogCardFields}
  }`;

  const params = { slug };

  const results = await client.fetch(query, params).then((response) => response?.[0]);

  console.log(results);
  return results;
};
