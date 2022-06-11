import React, { FC } from "react";
import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "components/HighlightCode";
import { urlFor } from "lib/api";

const BlogContent: FC<Props> = ({ blogContent }) => {
  return (
    <>
      <BlockContent serializers={serializers} blocks={blogContent.content} />
    </>
  );
};

interface Props {
  blogContent: any;
}

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <>
          <HighlightCode language={language}>{code}</HighlightCode>
          <div className="code-filename">{filename}</div>
        </>
      );
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      // let styles = {
      //   float: undefined,
      //   marginLeft: undefined,
      //   marginRight: undefined,
      // };

      // if (position === "left") {
      //   styles.float = position;
      //   styles.marginRight = "30px";
      // }
      // if (position === "right") {
      //   styles.float = position;
      //   styles.marginLeft = "30px";
      // }

      // return (
      //   <>
      //     <div className="blog-image" style={{ ...styles }}>
      //       <img src={urlFor(asset).height(300).fit("max").url()} />
      //       <div className="image-alt">{alt}</div>
      //     </div>
      //   </>
      // );

      let styles = {
        float: undefined,
        marginLeft: undefined,
        marginRight: undefined,
      };

      if (position === "left") {
        styles.float = position;
        styles.marginRight = "30px";
      }
      if (position === "right") {
        styles.float = position;
        styles.marginLeft = "30px";
      }

      return (
        <>
          <div className={`blog-image blog0image-${position}`}>
            <img src={urlFor(asset).height(300).fit("max").url()} />
            <div className="image-alt">{alt}</div>
          </div>
        </>
      );
    },
  },
};

export default BlogContent;
