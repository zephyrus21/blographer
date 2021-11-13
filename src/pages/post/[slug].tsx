import React from "react";
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from "../../components";
import { getPostDetails, getPosts } from "../../services";

interface PostDetailsProps {
  post: any;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  console.log(post);
  return (
    <>
      <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail
              title={post.title}
              image={post.image.url}
              author={post.author.name}
              createdAt={post.createdAt}
              photo={post.author.photo.url}
            />
            <Author
              name={post.author.name}
              bio={post.author.bio}
              photo={post.author.photo.url}
            />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export const getStaticProps = async ({ params }) => {
  const data = (await getPostDetails(params.slug)) || [];

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};
