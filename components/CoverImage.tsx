import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export function CoverImage({ title, src, slug }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full rounded-lg shadow-sm", {
        "aspect-[16/9] object-cover transition-shadow duration-200 hover:shadow-lg":
          slug,
      })}
      width={1300}
      height={630}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
