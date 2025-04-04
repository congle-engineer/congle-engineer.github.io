import Link from "next/link";
import { CoverImage } from "./CoverImage";
import { DateFormatter } from "./DateFormatter";
import { Button } from "@/components/ui/button";

type Props = {
  subject: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  subject,
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <>
      <div className="flex flex-row border-b border-gray-300 py-8 last:border-b-0 dark:border-gray-600">
        <div className="basis-1/2">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="mx-4 basis-1/2">
          <div className="mb-4 text-sm">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="mb-3 text-2xl font-semibold leading-snug">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="mb-4 text-base leading-relaxed">{excerpt}</p>
          <Button variant="outline" size="sm">
            {subject}
          </Button>
        </div>
      </div>
    </>
  );
}
