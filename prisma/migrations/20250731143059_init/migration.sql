-- CreateTable
CREATE TABLE "_OrderItemAddonOptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OrderItemAddonOptions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OrderItemAddonOptions_B_index" ON "_OrderItemAddonOptions"("B");

-- AddForeignKey
ALTER TABLE "_OrderItemAddonOptions" ADD CONSTRAINT "_OrderItemAddonOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "AddonOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderItemAddonOptions" ADD CONSTRAINT "_OrderItemAddonOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
