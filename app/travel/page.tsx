import { Container } from "components/Container";
import { MoreStories } from "components/MoreStories";
import { MoreStoriesSmall } from "components/MoreStoriesSmall";
import { getAllPosts } from "lib/api";

export default async function Page() {
  const allPosts = getAllPosts();
  const travelPosts = allPosts
    .filter((post) => post.subject === "Du lịch")
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return (
    <main>
      <Container>
        <div className="flex flex-row">
          <div className="mx-4 basis-2/3">
            {travelPosts.length > 0 && <MoreStories posts={travelPosts} />}
          </div>
          <div className="basis-1/3">
            {allPosts.length > 0 && <MoreStoriesSmall posts={allPosts} />}
          </div>
        </div>
      </Container>
    </main>
  );
}
