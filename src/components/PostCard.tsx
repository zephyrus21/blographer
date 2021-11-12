import React from "react";
import Link from "next/link";
import moment from "moment";

interface PostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  author: string;
  photo: string;
  createdAt: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  imageUrl,
  slug,
  author,
  photo,
  createdAt,
}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={imageUrl}
          alt={title}
          className='object-top absolute h-70 h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold'>
        <Link href={`/post/${slug}`}>{title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img
            src={photo}
            alt={author}
            height='40px'
            width='40px'
            className='align-middle rounded-full'
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            {author}
          </p>
        </div>
        <div className='font-medium text-gray-700'>
          <span>{moment(createdAt).format("DD MMM, YYYY")}</span>
        </div>
      </div>
      <p className='text-center text-lg text-blue-900 font-normal px-4 lg:px-20 mb-8'>
        {excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 hover:bg-blue-700 inline-block bg-blue-500 text-lg text-white rounded-full font-medium px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
