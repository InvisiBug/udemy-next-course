import { Row, Col } from "react-bootstrap";
import Layout from "components/Layout";
import AuthorInfo from "components/AuthorIntro";
import LargeCard from "components/LargeCard";
import SmallCard from "components/SmallCard";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <hr />
        <AuthorInfo />

        <Row className="mb-5">
          <Col md="10">
            <LargeCard />
          </Col>

          <Col md="4">
            <SmallCard />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default IndexPage;
