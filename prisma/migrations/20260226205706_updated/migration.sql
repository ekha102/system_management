-- AlterTable
ALTER TABLE `Inventory` MODIFY `inv_alerted` ENUM('Initial', 'High', 'Medium', 'Low') NOT NULL DEFAULT 'Initial';
