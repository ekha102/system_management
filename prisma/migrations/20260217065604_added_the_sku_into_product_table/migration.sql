/*
  Warnings:

  - A unique constraint covering the columns `[prod_sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `prod_sku` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_prod_sku_key` ON `Product`(`prod_sku`);
