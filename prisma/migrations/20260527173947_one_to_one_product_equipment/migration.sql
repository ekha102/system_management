-- CreateTable
CREATE TABLE `Equipment` (
    `equip_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_id` INTEGER NOT NULL,
    `equip_name` VARCHAR(191) NOT NULL,
    `equip_desc` VARCHAR(191) NULL,
    `equip_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `equip_updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Equipment_prod_id_key`(`prod_id`),
    PRIMARY KEY (`equip_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `Product`(`prod_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
