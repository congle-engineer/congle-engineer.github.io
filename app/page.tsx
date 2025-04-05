import { Container } from "components/Container";
import { HeroPost } from "components/HeroPost";
import { MoreStories } from "components/MoreStories";
import { MoreStoriesSmall } from "components/MoreStoriesSmall";
import { getAllPosts } from "lib/api";
import { cache } from "react";

const getCachedPosts = cache(async () => {
  return getAllPosts();
});

export default async function Page() {
  const allPosts = await getCachedPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <div className="mx-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <HeroPost
                subject={heroPost.subject}
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />

              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
          </div>
          <div>
            <div className="space-y-4">
              {morePosts.length > 0 && <MoreStoriesSmall posts={morePosts} />}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
