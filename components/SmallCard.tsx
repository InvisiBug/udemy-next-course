import React, { FC } from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import { Blog } from "types";
import { urlFor } from "lib/api";

const SmallCard: FC<Props> = ({ blog, link }) => {
  const { image, Title: title, subTitle: subtitle, date, slug, author } = blog;

  return (
    <>
      <Card className={`fj-card`}>
        <div className="card-body-wrapper">
          <Card.Header className="d-flex flex-row">
            <img src={author?.avatar || "https://via.placeholder.com/150"} className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
            <div>
              <Card.Title className="font-weight-bold mb-1">{author?.name || ""}</Card.Title>
              <Card.Text className="card-date">{date}</Card.Text>
            </div>
          </Card.Header>
          <div className="view overlay">
            <Card.Img src={urlFor(image).crop("center").fit("clip").url()} alt="Card image cap" />
          </div>
          <Card.Body>
            <Card.Title className="card-main-title">{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
          </Card.Body>
        </div>
        {link && (
          <Link {...link}>
            <a className="card-button">Read More</a>
          </Link>
        )}
      </Card>
    </>
  );
};

export default SmallCard;

interface Props {
  blog: Blog;
  link?: {
    href: string;
    as: string;
  };
}
