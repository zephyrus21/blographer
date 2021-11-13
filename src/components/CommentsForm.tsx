import React from "react";

interface CommentsFormProps {
  slug: string;
}

const CommentsForm: React.FC<CommentsFormProps> = ({ slug }) => {
  return <div>{slug}</div>;
};

export default CommentsForm;
