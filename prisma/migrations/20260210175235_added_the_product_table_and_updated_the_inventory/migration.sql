/*
  Warnings:

  - You are about to drop the column `inv_desc` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `inv_name` on the `Inventory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[prod_id,bin_id,loc_id,store_id]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `prod_id` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Inventory` DROP COLUMN `inv_desc`,
    DROP COLUMN `inv_name`,
    ADD COLUMN `prod_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Product` (
    `prod_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_name` VARCHAR(191) NOT NULL,
    `prod_desc` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`prod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventoryTransaction` (
    `invtran_id` INTEGER NOT NULL AUTO_INCREMENT,
    `inv_id` INTEGER NOT NULL,
    `invtran_change` INTEGER NOT NULL,
    `invtran_type` ENUM('INITIAL', 'PURCHASE', 'CONSUMED', 'ADJUST', 'DISCARD') NOT NULL DEFAULT 'INITIAL',
    `invtran_note` VARCHAR(191) NULL,
    `invtran_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`invtran_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Inventory_prod_id_bin_id_loc_id_store_id_key` ON `Inventory`(`prod_id`, `bin_id`, `loc_id`, `store_id`);

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `Product`(`prod_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventoryTransaction` ADD CONSTRAINT `InventoryTransaction_inv_id_fkey` FOREIGN KEY (`inv_id`) REFERENCES `Inventory`(`inv_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
