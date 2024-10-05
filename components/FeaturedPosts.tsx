export default function FeaturedPosts() {
  const posts = [
    { title: 'The Joy of Coding', excerpt: 'Exploring the art of writing clean and efficient code.', image: '/coding.jpg' },
    { title: 'Design Tips for Beginners', excerpt: 'Essential design principles for beautiful web layouts.', image: '/design.jpg' },
    { title: 'The Future of AI', excerpt: 'What lies ahead in the world of artificial intelligence?', image: '/ai.jpg' },
  ];
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Posts</h2>
      <div className="flex justify-center space-x-8">
        {posts.map((post, index) => (
          <div key={index} className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} className="w-full h-48 object-cover" alt={post.title} />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
