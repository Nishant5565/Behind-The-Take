import { PrismaClient } from "@prisma/client";

// ! this file is just being used to seed the database with some initial data

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: "Acting" },
    { name: "Photography" },
    { name: "Dance" },
    { name: "All" },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  const jobs = [
    {
      title: "Lead Actor",
      company: "DreamWorks",
      location: "Los Angeles, CA",
      salary: "$100,000/year",
      featured: true,
      categoryId: 1, 
    },
    {
      title: "Photographer",
      company: "National Geographic",
      location: "New York, NY",
      salary: "$80,000/year",
      featured: true,
      categoryId: 2, 
    },
    {
      title: "Choreographer",
      company: "Broadway",
      location: "Chicago, IL",
      salary: "$75,000/year",
      featured: true,
      categoryId: 3,
    },
  ];

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
