import {prisma} from "../lib/prisma.js"

async function main() {
  console.log("🧹 Suppression des anciens articles et catégories…")
  await prisma.blogPost.deleteMany()
  await prisma.category.deleteMany()

  console.log("📝 Création des catégories…")
  const devCategory = await prisma.category.create({
    data: {
      name: "Développement",
      slug: "developpement",
    },
  })

  const voyageCategory = await prisma.category.create({
    data: {
      name: "Voyage",
      slug: "voyage",
    },
  })

  console.log("📰 Insertion d’articles de blog…")
  await prisma.blogPost.createMany({
    data: [
      {
        title: "Mon premier article",
        slug: "mon-premier-article",
        content: "Voici le contenu de mon tout premier article de blog.",
        coverImage: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        categoryId: devCategory.id,
      },
      {
        title: "Voyager seule à Bangkok",
        slug: "voyager-seule-bangkok",
        content: "Un article sur mon voyage en Thaïlande, astuces et découvertes !",
        coverImage: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        categoryId: voyageCategory.id,
      },
    ],
  })

  console.log("✅ Seed terminé !")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
