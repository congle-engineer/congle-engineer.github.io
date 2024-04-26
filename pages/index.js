import Link from 'next/link'

export default function Home() {
  return (
    <div>
      This is the Homepage.
      <br/>
      <Link href="/first">
        <button>Go to first page</button>
      </Link>
      <br/>
      <Link href="/second">
        <button>Go to second page</button>
      </Link>
    </div>
  )
}
