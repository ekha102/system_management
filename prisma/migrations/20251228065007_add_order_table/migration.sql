-- AlterTable
ALTER TABLE `Inventory` ADD COLUMN `loc_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Location` (
    `loc_id` INTEGER NOT NULL AUTO_INCREMENT,
    `loc_name` VARCHAR(191) NOT NULL,
    `loc_desc` VARCHAR(191) NULL,
    `loc_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `loc_updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`loc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_loc_id_fkey` FOREIGN KEY (`loc_id`) REFERENCES `Location`(`loc_id`) ON DELETE SET NULL ON UPDATE CASCADE;
