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

-- CreateTable
CREATE TABLE "Discs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "speed" REAL,
    "glide" REAL,
    "turn" REAL,
    "fade" REAL,
    "brandId" INTEGER NOT NULL,
    "plasticId" INTEGER NOT NULL,

    CONSTRAINT "Discs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "cred" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Plastic_name_key" ON "Plastic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Plastic" ADD CONSTRAINT "Plastic_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discs" ADD CONSTRAINT "Discs_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discs" ADD CONSTRAINT "Discs_plasticId_fkey" FOREIGN KEY ("plasticId") REFERENCES "Plastic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
