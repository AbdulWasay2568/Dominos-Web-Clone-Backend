-- CreateTable
CREATE TABLE "_CartItemAddonOptions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CartItemAddonOptions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CartItemAddonOptions_B_index" ON "_CartItemAddonOptions"("B");

-- AddForeignKey
ALTER TABLE "_CartItemAddonOptions" ADD CONSTRAINT "_CartItemAddonOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "AddonOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartItemAddonOptions" ADD CONSTRAINT "_CartItemAddonOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "CartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
