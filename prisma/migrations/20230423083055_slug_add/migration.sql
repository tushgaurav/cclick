/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Paste` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Paste` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VISIBLITY" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "Paste" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "visiblity" "VISIBLITY" NOT NULL DEFAULT 'PUBLIC';

-- CreateIndex
CREATE UNIQUE INDEX "Paste_slug_key" ON "Paste"("slug");
