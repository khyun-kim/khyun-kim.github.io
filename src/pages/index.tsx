import { graphql } from "gatsby";
import * as React from "react";

const IndexPage = (props: {
  data: {
    allSanityPost: {
      totalCount: number;
      edges: {
        node: {
          id: string;
          title: string;
          _createdAt: string;
        };
      }[];
    };
  };
}) => {
  console.log(props);
  return (
    <div>
      {props.data.allSanityPost.edges.map(({ node: v }) => (
        <div>
          <h2>{v.title}</h2>
          <p>{v._createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query PostGetList {
    allSanityPost(limit: 5) {
      totalCount
      edges {
        node {
          id
          title
          _createdAt
        }
      }
    }
  }
`;
