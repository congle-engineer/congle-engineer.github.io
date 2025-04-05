import Link from "next/link";
import { CoverImage } from "./CoverImage";
import { DateFormatter } from "./DateFormatter";
import { Badge } from "@/components/ui/badge";

type Props = {
  subject: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  isAlreadyInSubject?: boolean;
};

export function PostPreview({
  subject,
  title,
  coverImage,
  date,
  excerpt,
  slug,
  isAlreadyInSubject = false,
}: Props) {
  return (
    <div className="flex flex-col border-b border-gray-300 py-6 last:border-b-0 dark:border-gray-600 md:flex-row md:py-8">
      {/* Image - Full width on mobile, half on tablet+ */}
      <div className="mb-4 w-full md:mb-0 md:basis-1/2 lg:basis-2/5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      {/* Content - Full width on mobile, half on tablet+ */}
      <div className="w-full md:ml-4 md:basis-1/2 lg:basis-3/5">
        <div className="mb-3 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
          <DateFormatter dateString={date} />
        </div>

        <h3 className="mb-2 text-lg font-semibold leading-tight hover:underline sm:text-xl md:mb-3 md:text-2xl">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h3>

        <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base md:mb-4">
          {excerpt}
        </p>

        {!isAlreadyInSubject && (
          <Badge variant="outline" className="text-xs sm:text-sm">
            {subject}
          </Badge>
        )}
      </div>
    </div>
  );
}
