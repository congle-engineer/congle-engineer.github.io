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
    <section>
      <div className="mb-8">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-10 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-2xl font-semibold leading-tight lg:text-3xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={date} />
          </div>
          <div className="mt-4">
            <Badge variant="outline">{subject}</Badge>
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
