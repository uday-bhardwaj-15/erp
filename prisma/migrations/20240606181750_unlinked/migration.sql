/*
  Warnings:

  - You are about to drop the column `userId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_userId_fkey`;

-- AlterTable
ALTER TABLE `Student` DROP COLUMN `userId`;
