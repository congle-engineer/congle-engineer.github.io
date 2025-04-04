import { Container } from "components/Container";
import { HeroPost } from "components/HeroPost";
import { MoreStories } from "components/MoreStories";
import { MoreStoriesSmall } from "components/MoreStoriesSmall";
import { getAllPosts } from "lib/api";

export default function Page() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <div className="flex flex-row">
          <div className="mx-4 basis-2/3">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
          <div className="basis-1/3">
            {morePosts.length > 0 && <MoreStoriesSmall posts={morePosts} />}
          </div>
        </div>
      </Container>
    </main>
  );
}
