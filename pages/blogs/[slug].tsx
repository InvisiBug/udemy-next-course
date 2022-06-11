import React, { FC } from "react";
import Layout from "components/Layout";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Blog } from "types";
import { Row, Col } from "react-bootstrap";
import BlogHeader from "components/BlogHeader";

const BlogDetail: FC<any> = ({ blogContent }) => {
  console.log(blogContent);
  return (
    <>
      <Layout className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader blogContent={blogContent} />
            <hr />
            {/* Blog Content Here */}
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
            a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
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
