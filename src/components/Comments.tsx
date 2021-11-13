import React from "react";

interface CommentsProps {
  slug: string;
}

const Comments: React.FC<CommentsProps> = ({ slug }) => {
  return <div>{slug}</div>;
};

export default Comments;
