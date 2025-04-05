import { CoverImage } from "./CoverImage";
import Link from "next/link";
import { DateFormatter } from "./DateFormatter";
import { Badge } from "@/components/ui/badge";

type Props = {
  subject: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({
  subject,
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <section className="mb-12">
      {/* Cover Image - Responsive height */}
      <div className="mb-6 h-48 overflow-hidden sm:h-64 md:mb-8 md:h-80 lg:h-96">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      {/* Content */}
      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-x-12 md:space-y-0 lg:gap-x-16">
        {/* Left Column - Title and Date */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline hover:underline-offset-4"
            >
              {title}
            </Link>
          </h3>

          <div className="text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            <DateFormatter dateString={date} />
          </div>

          {/* Badge - Hidden on mobile (will show at bottom) */}
          <div className="hidden md:block">
            <Badge variant="outline" className="text-sm sm:text-base">
              {subject}
            </Badge>
          </div>
        </div>

        {/* Right Column - Excerpt */}
        <div className="flex">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl md:text-lg lg:text-xl">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Badge - Only shown on mobile (below content) */}
      <div className="mt-6 md:hidden">
        <Badge variant="outline" className="text-sm sm:text-base">
          {subject}
        </Badge>
      </div>
    </section>
  );
}
