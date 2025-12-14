-- DropForeignKey
ALTER TABLE `Inventory` DROP FOREIGN KEY `Inventory_bin_id_fkey`;

-- DropIndex
DROP INDEX `Inventory_bin_id_fkey` ON `Inventory`;

-- AlterTable
ALTER TABLE `Inventory` MODIFY `bin_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_bin_id_fkey` FOREIGN KEY (`bin_id`) REFERENCES `Bin`(`bin_id`) ON DELETE SET NULL ON UPDATE CASCADE;
