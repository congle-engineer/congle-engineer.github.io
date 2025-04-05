import { Container } from "components/Container";
import { MoreStories } from "components/MoreStories";
import { MoreStoriesSmall } from "components/MoreStoriesSmall";
import { getAllPosts } from "lib/api";

export default async function Page() {
  const allPosts = getAllPosts();
  const sportPosts = allPosts
    .filter((post) => post.subject === "Thể thao")
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return (
    <main>
      <Container>
        {/* Grid layout with responsive columns */}
        <div className="mx-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main content - full width on mobile, 2/3 on desktop */}
          <div className="lg:col-span-2">
            {sportPosts.length > 0 && (
              <MoreStories posts={sportPosts} isAlreadyInSubject={true} />
            )}
          </div>

          {/* Sidebar - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              {allPosts.length > 0 && <MoreStoriesSmall posts={allPosts} />}
            </div>
          </div>
        </div>

        {/* Mobile sidebar alternative - show at bottom on mobile */}
        <div className="mx-8 mt-8 lg:hidden">
          {allPosts.length > 0 && <MoreStoriesSmall posts={allPosts} />}
        </div>
      </Container>
    </main>
  );
}
