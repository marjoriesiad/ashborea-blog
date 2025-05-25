'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  const linkClasses = (path) =>
    `px-3 py-1 rounded ${
      pathname === path ? "bg-header-secondary text-white rounded-2xl" : "hover:bg-white/20"
    }`

  return (
    <div className="bg-header p-4 flex items-center justify-between text-white">
      <h2 className="font-bold text-2xl text-header-secondary">{"<AshBorea />"}</h2>
      <nav className="flex items-center space-x-5 font-semibold">
        <Link href="/" className={linkClasses("/")}>Accueil</Link>
        <Link href="/projects" className={linkClasses("/projects")}>Projets</Link>
        <Link href="/blog" className={linkClasses("/blog")}>Blog</Link>
      </nav>
    </div>
  )
}

export default Header
