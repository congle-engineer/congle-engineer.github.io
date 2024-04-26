import Link from 'next/link'

export default function Second() {
  return (
    <div>
      This is the second page.
      <br/>
      <Link href="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  )
}
