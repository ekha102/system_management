/*
  Warnings:

  - You are about to drop the column `use_role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `use_role`,
    ADD COLUMN `user_role` ENUM('ADMIN', 'MANAGER', 'STAFF', 'CHECKIN_OPERATOR', 'CHECKOUT_OPERATOR', 'REPORT_VIEWER') NOT NULL DEFAULT 'STAFF';
