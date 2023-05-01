-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "userName" SET DEFAULT 'Anonymous';
