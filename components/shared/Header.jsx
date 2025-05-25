import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-header">
        <nav>
            <Link href="/" className="text-white text-2xl font-bold">Ash Borea</Link>
            <Link href="/projects" className="text-white text-lg ml-4">Projets</Link>
            <Link href="/blog" className="text-white text-lg ml-4">Blog</Link>
            
        </nav>
    </div>
  )
}

export default Header