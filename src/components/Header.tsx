import Link from "next/link"

export default function header() {
  return (
    <div className="bg-gray-600 text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href='/'>Home</Link>
        <div>
          <div>
            <Link href='/sign-up'>Sign Up</Link>
            <Link href='/sign-in'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
