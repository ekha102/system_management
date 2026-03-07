/*
  Warnings:

  - The primary key for the `Permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `per_id` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `per_name` on the `Permission` table. All the data in the column will be lost.
  - Added the required column `perm_actionId` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perm_id` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perm_moduleId` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `RolePermission` DROP FOREIGN KEY `RolePermission_permissionId_fkey`;

-- DropIndex
DROP INDEX `Permission_per_name_key` ON `Permission`;

-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `RolePermission`;

-- AlterTable
ALTER TABLE `Permission` DROP PRIMARY KEY,
    DROP COLUMN `per_id`,
    DROP COLUMN `per_name`,
    ADD COLUMN `perm_actionId` INTEGER NOT NULL,
    ADD COLUMN `perm_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `perm_moduleId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`perm_id`);

-- CreateTable
CREATE TABLE `Module` (
    `module_id` INTEGER NOT NULL AUTO_INCREMENT,
    `module_name` VARCHAR(191) NOT NULL,
    `order` INTEGER NULL,

    UNIQUE INDEX `Module_module_name_key`(`module_name`),
    PRIMARY KEY (`module_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Action` (
    `action_id` INTEGER NOT NULL AUTO_INCREMENT,
    `action_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Action_action_name_key`(`action_name`),
    PRIMARY KEY (`action_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_perm_moduleId_fkey` FOREIGN KEY (`perm_moduleId`) REFERENCES `Module`(`module_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_perm_actionId_fkey` FOREIGN KEY (`perm_actionId`) REFERENCES `Action`(`action_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`perm_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
