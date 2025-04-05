"use client";

import { Post } from "interfaces/post";
import { PostPreview } from "./PostPreview";
import { useState, useRef, useEffect } from "react";
import { Pagination } from "./Pagination";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const itemsPerPage = 5;
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextSectionRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      const page = Number(savedPage);
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    }
  }, [totalPages]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("currentPage", String(currentPage));
    }
  }, [currentPage, isMounted]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      setTimeout(() => {
        nextSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <div>
      <div ref={nextSectionRef} className="grid grid-cols-1 gap-y-4">
        {posts
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((post) => (
            <PostPreview
              key={post.slug}
              subject={post.subject}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
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
