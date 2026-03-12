/*
  Warnings:

  - A unique constraint covering the columns `[refresh_token]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `RefreshToken` DROP FOREIGN KEY `RefreshToken_refresh_userId_fkey`;

-- DropIndex
DROP INDEX `RefreshToken_refresh_userId_fkey` ON `RefreshToken`;

-- CreateIndex
CREATE UNIQUE INDEX `RefreshToken_refresh_token_key` ON `RefreshToken`(`refresh_token`);

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_refresh_userId_fkey` FOREIGN KEY (`refresh_userId`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
