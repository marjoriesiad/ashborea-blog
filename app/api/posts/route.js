import { prisma } from '@/lib/prisma'

export async function GET() {
  const posts = await prisma.blogPost.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return Response.json(posts)
}
