import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Step 1: Map product names to product IDs
  const products = await prisma.product.findMany();
  const productMap: Record<string, number> = {};
  products.forEach(p => {
    productMap[p.name] = p.id;
  });

  // Step 2: Addons with related product names
  const addons = [
    { name: "Size", productName: "Chicken Seekh Kebab" },
    { name: "Sauce", productName: "Chicken Seekh Kebab" },
    { name: "Size", productName: "Super Cheese" },
    { name: "Size", productName: "BBQ Chicken" },
    { name: "Crust", productName: "BBQ Chicken" },
    { name: "Extra Toppings", productName: "BBQ Chicken" },
    { name: "Size", productName: "Hawaiian Chicken" },
    { name: "Crust", productName: "Hawaiian Chicken" },
    { name: "Size", productName: "Meltz Smokey Chicken Tikka​" },
    { name: "Size", productName: "Garlic Bread" },
    { name: "Pieces", productName: "Cinnastix​" },
    { name: "Pieces", productName: "Choco Bread Twist" },
    { name: "Size", productName: "Chicken and Chips" },
    { name: "Size", productName: "7UP" },
    { name: "Size", productName: "Pepsi" },
    { name: "Crust", productName: "7UP" },
    { name: "Crust", productName: "Pepsi" },
  ];

  // Step 3: Create each addon if its product exists
  for (const addon of addons) {
    const productId = productMap[addon.productName];
    if (!productId) {
      console.warn(`⚠️ Skipping addon '${addon.name}' — Product '${addon.productName}' not found.`);
      continue;
    }

    await prisma.addon.create({
      data: {
        name: addon.name,
        productId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  console.log("✅ Addons seeded successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
