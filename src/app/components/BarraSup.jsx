import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="px-8 py-2 font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow lg:flex lg:space-x-4">
          <Link href="/" className="px-5 py-2 border border-white rounded text-white hover:text-teal-500 hover:bg-white">Home</Link>
          <Link href="/page1" className="px-3 py-2 border border-white rounded text-white hover:text-teal-500 hover:bg-teal-800">Page 1</Link>
          <Link href="/page2" className="px-3 py-2 border border-white rounded text-white hover:text-teal-500 hover:bg-teal-800">Page 2</Link>
          <Link href="/page3" className="px-3 py-2 border border-white rounded text-white hover:text-teal-500 hover:bg-teal-800">Page 3</Link>
        </div>
        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign In</button>
        </div>
      </div>
    </nav>
  )
}
