'use client'

import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function PostCard({ post }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {post.coverImage && (
        <Image
    src={post.coverImage}
    alt={post.title}
    width={800}
    height={400}
    className="w-full h-48 object-cover"
  />
      )}

      <div className="p-4">
        <Link href={`/blog/${post.slug}`} className="text-xl font-bold hover:underline block mb-1">
          {post.title}
        </Link>

        <p className="text-sm text-gray-500 mb-2">
          Publié le {format(new Date(post.createdAt), "d MMMM yyyy", { locale: fr })}
        </p>

        <p className="text-sm text-gray-500 mb-1">
          Catégorie : {post.category.name}
        </p>

        <p className="mt-2 text-gray-700 line-clamp-3">
          {post.content.slice(0, 150)}...
        </p>
      </div>
    </div>
  )
}
