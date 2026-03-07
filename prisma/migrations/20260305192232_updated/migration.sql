/*
  Warnings:

  - You are about to drop the column `user_isActive` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `user_isActive`,
    ADD COLUMN `user_status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';
