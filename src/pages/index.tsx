import { type } from "os";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";

interface HomeProps {
  posts: any[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      FeaturedPosts
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.node.title}
              excerpt={post.node.excerpt}
              imageUrl={post.node.image.url}
              slug={post.node.slug}
              author={post.node.author.name}
              photo={post.node.author.photo.url}
              createdAt={post.node.createdAt}
            />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};

export default Home;
