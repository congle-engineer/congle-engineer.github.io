"use client";

import { Post } from "interfaces/post";
import { PostPreview } from "./PostPreview";
import { useState } from "react";
import { Pagination } from "./Pagination";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const itemsPerPage = 5;
  const totalItems = posts.length;
  console.log("totalItems: ", totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 800, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-4">
        {posts
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((post) => (
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
      <div className="mb-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
