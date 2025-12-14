/*
  Warnings:

  - The primary key for the `Inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Inventory` table. All the data in the column will be lost.
  - Added the required column `bin_id` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inv_id` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inv_name` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inv_updatedAt` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Inventory` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `description`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `quantity`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `bin_id` INTEGER NOT NULL,
    ADD COLUMN `inv_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `inv_desc` VARCHAR(191) NULL,
    ADD COLUMN `inv_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `inv_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `inv_quantity` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `inv_status` ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active',
    ADD COLUMN `inv_updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`inv_id`);

-- CreateTable
CREATE TABLE `Bin` (
    `bin_id` INTEGER NOT NULL AUTO_INCREMENT,
    `bin_name` VARCHAR(191) NOT NULL,
    `bin_desc` VARCHAR(191) NULL,
    `bin_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bin_updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`bin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_bin_id_fkey` FOREIGN KEY (`bin_id`) REFERENCES `Bin`(`bin_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
