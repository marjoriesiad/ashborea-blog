'use client'

import { useEffect, useState } from 'react'
import SubHeader from '@/components/blog/Subheader'
import PostCard from '@/components/blog/PostCard'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setFilteredPosts(data)
        setLoading(false)
      })
  }, [])

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug)

    if (!slug) {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter((post) => post.category.slug === slug)
      setFilteredPosts(filtered)
    }
  }

  return (
    <div>
      <SubHeader onCategorySelect={handleCategorySelect} />

      <div className="p-4">
        {loading ? (
          <p>Chargement des articles...</p>
        ) : filteredPosts.length === 0 ? (
          <p>Aucun article trouvé pour cette catégorie.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
