/*
  Warnings:

  - Added the required column `created` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created` to the `Case` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Case` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `Case` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;
