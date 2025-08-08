-- DropForeignKey
ALTER TABLE "Addon" DROP CONSTRAINT "Addon_productId_fkey";

-- DropForeignKey
ALTER TABLE "AddonOption" DROP CONSTRAINT "AddonOption_addonId_fkey";

-- AddForeignKey
ALTER TABLE "Addon" ADD CONSTRAINT "Addon_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddonOption" ADD CONSTRAINT "AddonOption_addonId_fkey" FOREIGN KEY ("addonId") REFERENCES "Addon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
