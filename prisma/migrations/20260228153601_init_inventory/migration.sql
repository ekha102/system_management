-- CreateTable
CREATE TABLE `Location` (
    `loc_id` INTEGER NOT NULL AUTO_INCREMENT,
    `loc_name` VARCHAR(191) NOT NULL,
    `loc_desc` VARCHAR(191) NULL,
    `loc_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `loc_updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`loc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bin` (
    `bin_id` INTEGER NOT NULL AUTO_INCREMENT,
    `bin_name` VARCHAR(191) NOT NULL,
    `bin_desc` VARCHAR(191) NULL,
    `bin_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bin_updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`bin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
    `store_id` INTEGER NOT NULL AUTO_INCREMENT,
    `store_name` VARCHAR(191) NOT NULL,
    `store_desc` VARCHAR(191) NULL,
    `store_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `store_updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `prod_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_name` VARCHAR(191) NOT NULL,
    `prod_sku` VARCHAR(191) NULL,
    `prod_desc` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Product_prod_sku_key`(`prod_sku`),
    PRIMARY KEY (`prod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventory` (
    `inv_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_id` INTEGER NOT NULL,
    `inv_quantity` INTEGER NOT NULL DEFAULT 0,
    `inv_restock` INTEGER NOT NULL DEFAULT 1,
    `inv_trigger` INTEGER NOT NULL DEFAULT 1,
    `inv_alerted` ENUM('Initial', 'High', 'Medium', 'Low') NOT NULL DEFAULT 'Initial',
    `inv_status` ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active',
    `inv_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `inv_updatedAt` DATETIME(3) NOT NULL,
    `checkedBin` BOOLEAN NULL DEFAULT false,
    `bin_id` INTEGER NULL,
    `loc_id` INTEGER NULL,
    `store_id` INTEGER NULL,

    UNIQUE INDEX `Inventory_prod_id_bin_id_loc_id_store_id_key`(`prod_id`, `bin_id`, `loc_id`, `store_id`),
    PRIMARY KEY (`inv_id`)
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

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_bin_id_fkey` FOREIGN KEY (`bin_id`) REFERENCES `Bin`(`bin_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_loc_id_fkey` FOREIGN KEY (`loc_id`) REFERENCES `Location`(`loc_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`store_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `Product`(`prod_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventoryTransaction` ADD CONSTRAINT `InventoryTransaction_inv_id_fkey` FOREIGN KEY (`inv_id`) REFERENCES `Inventory`(`inv_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
