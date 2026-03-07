/*
  Warnings:

  - You are about to drop the column `user_role` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `user_isActive` on the `User` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(3))`.
  - Added the required column `user_roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `user_role`,
    ADD COLUMN `user_roleId` INTEGER NOT NULL,
    MODIFY `user_username` VARCHAR(191) NOT NULL,
    MODIFY `user_fullName` VARCHAR(191) NOT NULL,
    MODIFY `user_isActive` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE `Role` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Role_role_name_key`(`role_name`),
    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permission` (
    `per_id` INTEGER NOT NULL AUTO_INCREMENT,
    `per_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Permission_per_name_key`(`per_name`),
    PRIMARY KEY (`per_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RolePermission` (
    `roleId` INTEGER NOT NULL,
    `permissionId` INTEGER NOT NULL,

    PRIMARY KEY (`roleId`, `permissionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`per_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_user_roleId_fkey` FOREIGN KEY (`user_roleId`) REFERENCES `Role`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
