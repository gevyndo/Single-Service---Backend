-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_idPerusahaan_fkey`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_idPerusahaan_fkey` FOREIGN KEY (`idPerusahaan`) REFERENCES `Perusahaan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
