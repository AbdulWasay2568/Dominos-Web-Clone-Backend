/*
  Warnings:

  - You are about to drop the `_OrderItemAddonOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderItemAddonOptions" DROP CONSTRAINT "_OrderItemAddonOptions_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderItemAddonOptions" DROP CONSTRAINT "_OrderItemAddonOptions_B_fkey";

-- DropTable
DROP TABLE "_OrderItemAddonOptions";

-- CreateTable
CREATE TABLE "_AddonOptionToOrderItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AddonOptionToOrderItem_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AddonOptionToOrderItem_B_index" ON "_AddonOptionToOrderItem"("B");

-- AddForeignKey
ALTER TABLE "_AddonOptionToOrderItem" ADD CONSTRAINT "_AddonOptionToOrderItem_A_fkey" FOREIGN KEY ("A") REFERENCES "AddonOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddonOptionToOrderItem" ADD CONSTRAINT "_AddonOptionToOrderItem_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
