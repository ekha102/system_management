/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `user_updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `createdAt`,
    DROP COLUMN `isActive`,
    DROP COLUMN `role`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `use_role` ENUM('ADMIN', 'MANAGER', 'STAFF', 'CHECKIN_OPERATOR', 'CHECKOUT_OPERATOR', 'REPORT_VIEWER') NOT NULL DEFAULT 'STAFF',
    ADD COLUMN `user_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `user_isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `user_updatedAt` DATETIME(3) NOT NULL;
