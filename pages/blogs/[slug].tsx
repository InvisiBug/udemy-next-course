import React, { FC } from "react";
import Layout from "components/Layout";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Blog } from "types";
import { Row, Col } from "react-bootstrap";
import BlogHeader from "components/BlogHeader";
import BlogContent from "components/BlogContent";

const BlogDetail: FC<any> = ({ blogContent }) => {
  return (
    <>
      <Layout className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader blogContent={blogContent} />
            <hr />
            <BlogContent blogContent={blogContent} />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default BlogDetail;

//* Run time rendering
// Use this one
export const getServerSideProps = async ({ params }) => {
  const blogContent: Blog = await getBlogBySlug(params.slug);

  return {
    props: { blogContent },
  };
};

// //* Build time rendering
// //! Dont do this for blogs, use run time rendering
// export const getStaticProps = async ({ params }) => {
//   const blogContent = await getBlogBySlug(params.slug);

//   console.log("hello");
//   return {
//     props: { blogContent },
//   };
// };

// export const getStaticPaths = async () => {
//   const blogs = await getAllBlogs();
//   const paths = blogs?.map((blog: Blog) => {
//     return {
//       params: {
//         slug: blog.slug,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false, // Display default 404 page if things go wrong
//   };
// };
