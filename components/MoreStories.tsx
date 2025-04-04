import { Post } from "interfaces/post";
import { PostPreview } from "./PostPreview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      {/* <div className="mb-8 text-3xl font-bold leading-tight tracking-tighter">
        More Stories
      </div> */}
      <div className="mb-8 grid grid-cols-1 gap-y-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
