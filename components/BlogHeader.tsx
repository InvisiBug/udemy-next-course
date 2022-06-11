import React, { FC } from "react";
import { Blog } from "types";
import { urlFor } from "lib/api";

const BlogHeader: FC<Props> = ({ blogContent }) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img src={blogContent.author.avatar} className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
        {blogContent.author.name}
        {", "} {blogContent.Title}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{blogContent.Title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{blogContent.subTitle}</h2>
      {/* Check if contains cover image */}
      <img className="img-fluid rounded" src={urlFor(blogContent.image).height(300).url()} alt="" />
    </div>
  );
};

interface Props {
  blogContent: Blog;
}

export default BlogHeader;
