/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `User_tbl` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_username` VARCHAR(15) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `user_fullName` VARCHAR(50) NOT NULL,
    `use_role` ENUM('ADMIN', 'MANAGER', 'STAFF', 'CHECKIN_OPERATOR', 'CHECKOUT_OPERATOR', 'REPORT_VIEWER') NOT NULL DEFAULT 'STAFF',
    `user_isActive` BOOLEAN NOT NULL DEFAULT true,
    `user_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_tbl_user_username_key`(`user_username`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
