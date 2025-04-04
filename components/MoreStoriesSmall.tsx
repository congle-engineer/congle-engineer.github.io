import { Post } from "interfaces/post";
import { PostPreviewSmall } from "./PostPreviewSmall";
import { ALL_SUBJECTS } from "@/lib/constants";

type Props = {
  posts: Post[];
};

export function MoreStoriesSmall({ posts }: Props) {
  return (
    <>
      <div>
        {ALL_SUBJECTS.map((subject) => (
          <div key={subject}>
            <div className="text-2xl font-bold leading-tight tracking-tighter">
              {subject}
            </div>
            <div className="mb-4 grid grid-cols-1">
              {posts
                .filter((x) => x.subject == subject)
                .slice(0, 3)
                .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
                .map((post) => (
                  <PostPreviewSmall
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
          </div>
        ))}
      </div>
    </>
  );
}
