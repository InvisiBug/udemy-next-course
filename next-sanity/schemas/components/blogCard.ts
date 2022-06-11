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
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Description",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
            {
              type: "text",
              name: "alt",
              title: "Description",
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          type: "code",
          options: {
            withFilename: true,
          },
        },
      ],
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
