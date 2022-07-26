-- CreateTable
CREATE TABLE "Discs" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "plastic" VARCHAR(50) NOT NULL,
    "speed" REAL NOT NULL,
    "glide" REAL NOT NULL,
    "turn" REAL NOT NULL,
    "fade" REAL NOT NULL,

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
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
