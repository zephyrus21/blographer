import React from "react";

interface AuthorProps {
  name: string;
  bio: string;
  photo: string;
}

const Author: React.FC<AuthorProps> = ({ name, bio, photo }) => {
  return (
    <div>
      {name}
      {bio}
      {photo}
    </div>
  );
};

export default Author;
