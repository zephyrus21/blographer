import moment from "moment";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import Link from "next/link";

const PostWidget: React.FC = ({ slug, categories }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug)
      getSimilarPosts(slug, categories).then((data) => setRelatedPosts(data));
    else getRecentPosts().then((data) => setRelatedPosts(data));
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-full'
              src={post.image.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
