import { Rule } from "@sanity/types/dist/dts";

export const blogCard = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "Title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => {
        return Rule.required().min(5).max(25);
      },
    },
    {
      name: "subTitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "date",
      title: "date",
      type: "datetime",
      validation: (Rule: Rule) => {
        return Rule.required();
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule: Rule) => {
        return Rule.required();
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule: Rule) => {
        return Rule.required().error("You done goofed");
      },
    },
  ],
};
