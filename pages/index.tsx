import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "components/Layout";
import AuthorInfo from "components/AuthorIntro";
import LargeCard from "components/LargeCard";
import SmallCard from "components/SmallCard";
import { getAllBlogs } from "lib/api";

import { Blog } from "types";

const IndexPage: FC<Props> = ({ blogs }) => {
  return (
    <>
      <Layout>
        <hr />
        {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
        <Row className="mb-5">
          {blogs.map((blog: Blog, index: number) => {
            return (
              <Col md="4" key={index}>
                <SmallCard blog={blog} link={{ href: "/blogs/[slug]", as: `/blogs/${blog.slug}` }} />
              </Col>
            );
          })}

          <AuthorInfo />

          <Col md="10">
            <LargeCard />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default IndexPage;

// Function called during build time
// Only called on the server, not the client
// Provides props to the page
// Creates static page
export const getStaticProps = async () => {
  const blogs: Blog[] = await getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

// export const getServerSideProps = async () => {
//   const blogs: Blog[] = await getAllBlogs();

//   return {
//     props: {
//       blogs,
//     },
//   };
// };

interface Props {
  blogs: Blog[];
}
