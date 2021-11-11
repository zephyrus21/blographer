import { Categories, PostCard, PostWidget } from "../components";

const posts = [
  { title: "Post One", excerpt: "This is post one" },
  { title: "Post Two", excerpt: "This is post two" },
];

const Home: React.FC = ({}) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      FeaturedPosts
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard key={index} title={post.title} excerpt={post.excerpt} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget /> <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
