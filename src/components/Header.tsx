import React from "react";

import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "Node", slug: "node" },
  { name: "Next", slug: "next" },
];

const Header: React.FC = ({}) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Blographer
            </span>
          </Link>
        </div>
        <div className='hidden md:contents md:float-left'>
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
