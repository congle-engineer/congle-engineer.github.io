import Link from "next/link";
import { CoverImageSmall } from "./CoverImageSmall";
import { DateFormatter } from "./DateFormatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
};

export function PostPreviewSmall({ title, coverImage, date, slug }: Props) {
  return (
    <>
      <div className="flex flex-row border-b border-gray-300 py-4 dark:border-gray-600">
        <div className="basis-1/4">
          <CoverImageSmall slug={slug} title={title} src={coverImage} />
        </div>
        <div className="mx-4 basis-3/4">
          <div className="mb-2 text-sm">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="text-base">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}
