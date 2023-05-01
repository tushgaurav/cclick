/*
  Warnings:

  - A unique constraint covering the columns `[backhalf]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `backhalf` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "backhalf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_backhalf_key" ON "Link"("backhalf");
