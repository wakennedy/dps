/*
  Warnings:

  - You are about to drop the column `brand` on the `Discs` table. All the data in the column will be lost.
  - You are about to drop the column `plastic` on the `Discs` table. All the data in the column will be lost.
  - Added the required column `brandId` to the `Discs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plasticId` to the `Discs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Discs" DROP COLUMN "brand",
DROP COLUMN "plastic",
ADD COLUMN     "brandId" INTEGER NOT NULL,
ADD COLUMN     "plasticId" INTEGER NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "speed" DROP NOT NULL,
ALTER COLUMN "glide" DROP NOT NULL,
ALTER COLUMN "turn" DROP NOT NULL,
ALTER COLUMN "fade" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plastic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "Plastic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Plastic_name_key" ON "Plastic"("name");

-- AddForeignKey
ALTER TABLE "Plastic" ADD CONSTRAINT "Plastic_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discs" ADD CONSTRAINT "Discs_plasticId_fkey" FOREIGN KEY ("plasticId") REFERENCES "Plastic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discs" ADD CONSTRAINT "Discs_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
