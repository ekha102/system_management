-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_username` VARCHAR(15) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `user_fullName` VARCHAR(50) NOT NULL,
    `role` ENUM('ADMIN', 'MANAGER', 'STAFF', 'CHECKIN_OPERATOR', 'CHECKOUT_OPERATOR', 'REPORT_VIEWER') NOT NULL DEFAULT 'STAFF',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_user_username_key`(`user_username`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
