import Link from 'next/link'

export default function First() {
  return (
    <div>
      This is the first page.
      <br/>
      <Link href="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  )
}
