import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Step 1: Load all addons with their associated product
  const addons = await prisma.addon.findMany({
    include: { product: true },
  });

  // Step 2: Build a map: key = `${addonName}|${productName}`, value = addon.id
  const addonMap: Record<string, number> = {};
  for (const addon of addons) {
    const key = `${addon.name}|${addon.product.name}`;
    addonMap[key] = addon.id;
  }

  // Step 3: Define options with addon name + product name for mapping
  const addonOptions = [
    { optionName: "Small", additionalPrice: 400, addonName: "Size", productName: "Chicken Seekh Kebab" },
    { optionName: "Large", additionalPrice: 600, addonName: "Size", productName: "Chicken Seekh Kebab" },
    { optionName: "Hot Sauce", additionalPrice: 0, addonName: "Sauce", productName: "Chicken Seekh Kebab" },
    { optionName: "Garlic", additionalPrice: 0, addonName: "Sauce", productName: "Chicken Seekh Kebab" },
    { optionName: "BBQ", additionalPrice: 0, addonName: "Sauce", productName: "Chicken Seekh Kebab" },

    { optionName: "Small", additionalPrice: 500, addonName: "Size", productName: "Super Cheese" },
    { optionName: "Small", additionalPrice: 500, addonName: "Size", productName: "BBQ Chicken" },
    { optionName: "Medium", additionalPrice: 800, addonName: "Size", productName: "BBQ Chicken" },
    { optionName: "Large", additionalPrice: 1200, addonName: "Size", productName: "BBQ Chicken" },

    { optionName: "Thin", additionalPrice: 0, addonName: "Crust", productName: "BBQ Chicken" },
    { optionName: "Thick", additionalPrice: 0, addonName: "Crust", productName: "BBQ Chicken" },
    { optionName: "Cheese Stuffed", additionalPrice: 200, addonName: "Crust", productName: "BBQ Chicken" },

    { optionName: "Mushrooms", additionalPrice: 100, addonName: "Extra Toppings", productName: "BBQ Chicken" },
    { optionName: "Cheese", additionalPrice: 200, addonName: "Extra Toppings", productName: "BBQ Chicken" },
    { optionName: "Jalapenos", additionalPrice: 100, addonName: "Extra Toppings", productName: "BBQ Chicken" },

    { optionName: "Small", additionalPrice: 500, addonName: "Size", productName: "Hawaiian Chicken" },
    { optionName: "Medium", additionalPrice: 800, addonName: "Size", productName: "Hawaiian Chicken" },
    { optionName: "Large", additionalPrice: 1200, addonName: "Size", productName: "Hawaiian Chicken" },

    { optionName: "Thin", additionalPrice: 0, addonName: "Crust", productName: "Hawaiian Chicken" },
    { optionName: "Thick", additionalPrice: 0, addonName: "Crust", productName: "Hawaiian Chicken" },
    { optionName: "Cheese Stuffed", additionalPrice: 200, addonName: "Crust", productName: "Hawaiian Chicken" },

    { optionName: "345 ml", additionalPrice: 100, addonName: "Size", productName: "7UP" },
    { optionName: "500 ml", additionalPrice: 150, addonName: "Size", productName: "7UP" },
    { optionName: "1 Litre", additionalPrice: 200, addonName: "Size", productName: "7UP" },
    { optionName: "1.5 Litres", additionalPrice: 250, addonName: "Size", productName: "7UP" },

    { optionName: "345 ml", additionalPrice: 100, addonName: "Size", productName: "Pepsi" },
    { optionName: "500 ml", additionalPrice: 150, addonName: "Size", productName: "Pepsi" },
    { optionName: "1 Litre", additionalPrice: 200, addonName: "Size", productName: "Pepsi" },
    { optionName: "1.5 Litres", additionalPrice: 250, addonName: "Size", productName: "Pepsi" },

    { optionName: "4 Pieces", additionalPrice: 300, addonName: "Pieces", productName: "Cinnastix​" },
    { optionName: "8 Pieces", additionalPrice: 600, addonName: "Pieces", productName: "Cinnastix​" },

    { optionName: "5 Pieces", additionalPrice: 400, addonName: "Pieces", productName: "Choco Bread Twist" },
    { optionName: "10 Pieces", additionalPrice: 800, addonName: "Pieces", productName: "Choco Bread Twist" },

    { optionName: "Small", additionalPrice: 500, addonName: "Size", productName: "Chicken and Chips" },
    { optionName: "Medium", additionalPrice: 800, addonName: "Size", productName: "Chicken and Chips" },
    { optionName: "Large", additionalPrice: 1200, addonName: "Size", productName: "Chicken and Chips" },

    { optionName: "Thin", additionalPrice: 0, addonName: "Crust", productName: "Chicken and Chips" },
    { optionName: "Thick", additionalPrice: 0, addonName: "Crust", productName: "Chicken and Chips" },
    { optionName: "Cheese Stuffed", additionalPrice: 200, addonName: "Crust", productName: "Chicken and Chips" },
  ];

  for (const option of addonOptions) {
    const key = `${option.addonName}|${option.productName}`;
    const addonId = addonMap[key];

    if (!addonId) {
      console.warn(`⚠️ Addon not found for key: '${key}'`);
      continue;
    }

    await prisma.addonOption.create({
      data: {
        optionName: option.optionName,
        additionalPrice: option.additionalPrice,
        addonId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  console.log("✅ AddonOptions seeded successfully.");
}

main()
  .catch(e => {
    console.error("❌ Seeding failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
