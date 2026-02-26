-- AlterTable
ALTER TABLE `Inventory` ADD COLUMN `inv_alerted` ENUM('High', 'Medium', 'Low') NOT NULL DEFAULT 'High';
