/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `Paste` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId,slug]` on the table `Paste` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Paste" DROP CONSTRAINT "Paste_ownerId_fkey";

-- AlterTable
ALTER TABLE "Paste" ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "ownerId" DROP NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Paste_ownerId_key" ON "Paste"("ownerId");

-- CreateIndex
CREATE INDEX "Paste_slug_idx" ON "Paste"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Paste_ownerId_slug_key" ON "Paste"("ownerId", "slug");
