-- CreateTable
CREATE TABLE `RefreshToken` (
    `refresh_id` INTEGER NOT NULL AUTO_INCREMENT,
    `refresh_userId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NOT NULL,
    `refresh_expiresAt` DATETIME(3) NOT NULL,
    `refresh_revoked` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`refresh_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
