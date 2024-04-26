import Link from 'next/link'

export default function First() {
  return (
    <div>
      This is the first page, ahihi ..........
      <br/>
      <Link href="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  )
}
