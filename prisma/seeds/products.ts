import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Build a map of category names to their UUIDs from DB
  const categories = await prisma.category.findMany();
  const categoryMap: Record<string, number> = {};
  categories.forEach((cat) => {
    categoryMap[cat.name] = cat.id;
  });

  // Product list
  const products = [
    {
      name: "Pepsi",
      description: "Chilled soft drink",
      price: 100,
      categoryName: "Drinks",
    },
    {
      name: "7UP",
      description: "Chilled Soft Drink",
      price: 100,
      categoryName: "Drinks",
    },
    {
      name: "Chicken Seekh Kebab",
      description: "Grilled Chicken Seekh Kebab, Green chillies & Onions topped with Ranch Sauce",
      price: 500,
      categoryName: "Pizzas",
    },
    {
      name: "Super Cheese",
      description: "Cheese and cheese with some more cheese",
      price: 500,
      categoryName: "Pizzas",
    },
    {
      name: "Meltz Smokey Chicken Tikka​",
      description: "Thin N Crispy crust, folded with tikka chunks, onions, green pepper & chipotle sauce.",
      price: 400,
      categoryName: "Meltz",
    },
    {
      name: "BBQ Chicken",
      description: "Spicy chicken chunks and onions topped with BBQ sauce",
      price: 500,
      categoryName: "Pizzas",
    },
    {
      name: "Hawaiian Chicken",
      description: "Chicken Chunks and Pineapples",
      price: 500,
      categoryName: "Pizzas",
    },
    {
      name: "Garlic Bread",
      description: "Crispy and buttery garlic bread",
      price: 400,
      categoryName: "Sides",
    },
    {
      name: "Cinnastix​",
      description: "Freshly-baked bread topped with cinnamon",
      price: 500,
      categoryName: "Desserts",
    },
    {
      name: "Choco Bread Twist",
      description: "Chocolate-filled twist",
      price: 300,
      categoryName: "Desserts",
    },
    {
      name: "Chicken and Chips",
      description: "Enjoy 5 strips of our oven-baked crispy chicken with fries combo.",
      price: 400,
      categoryName: "Sides",
    },
  ];

  for (const product of products) {
    const categoryId = categoryMap[product.categoryName];
    if (!categoryId) {
      console.warn(`❌ Category '${product.categoryName}' not found. Skipping '${product.name}'.`);
      continue;
    }

    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        categoryId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  console.log("✅ Products seeded successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
