import React from "react";

interface PostCardProps {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <div>
      {title}
      {excerpt}
    </div>
  );
};

export default PostCard;
