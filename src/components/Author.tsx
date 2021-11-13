import React from "react";
import Image from "next/image";

interface AuthorProps {
  name: string;
  bio: string;
  photo: string;
}

const Author: React.FC<AuthorProps> = ({ name, bio, photo }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          unoptimized
          alt={name}
          height='100px'
          width='100px'
          className='align-middle rounded-full'
          src={photo}
        />
      </div>
      <h3 className='text-white mt-4 mb-4 text-xl font-bold'>{name}</h3>
      <p className='text-white text-ls'>{bio}</p>
    </div>
  );
};

export default Author;
