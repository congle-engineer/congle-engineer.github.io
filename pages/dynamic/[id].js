import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();
  return (
    <div>
      This is dynamic page, accessed from the route <b>{router.asPath}</b>
    </div>
  )
}
