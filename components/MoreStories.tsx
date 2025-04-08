"use client";

import { Post } from "interfaces/post";
import { PostPreview } from "./PostPreview";
import { useState, useRef, useEffect } from "react";
import { Pagination } from "./Pagination";

type Props = {
  posts: Post[];
  isAlreadyInSubject?: boolean;
};

export function MoreStories({ posts, isAlreadyInSubject = false }: Props) {
  const itemsPerPage = 5;
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextSectionRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      const page = Number(savedPage);
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    }
    setIsMounted(true);
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
        if (nextSectionRef.current) {
          const elementPosition =
            nextSectionRef.current.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  if (!isMounted) return null;

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
              isAlreadyInSubject={isAlreadyInSubject}
            />
          ))}
      </div>
      <div className="mx-8 mb-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
