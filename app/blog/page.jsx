'use client'

import { useEffect, useState } from 'react'
import SubHeader from '@/components/blog/Subheader'
import Link from 'next/link'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('/api/posts') // appelle tous les articles
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setFilteredPosts(data)
      })
  }, [])

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug)

    if (!slug) {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter((post) => post.category.slug === slug))
    }
  }

  return (
    <div>
      <SubHeader onCategorySelect={handleCategorySelect} />
      <div className="p-4">
        {filteredPosts.length === 0 ? (
          <p>Aucun article trouvé pour cette catégorie.</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="mb-4">
              <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="text-sm text-gray-600">
                Catégorie : {post.category.name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
