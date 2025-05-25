'use client'

import { useEffect, useState } from 'react'

export default function SubHeader({ onCategorySelect }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])

  return (
    <div className="px-4 py-4 bg-header-secondary text-white p-2 flex gap-4 overflow-x-auto">
      <button
        onClick={() => onCategorySelect(null)}
        className="hover:underline"
      >
        Tous
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategorySelect(cat.slug)}
          className="hover:underline"
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}
