/*
  Warnings:

  - You are about to alter the column `fecha` on the `Orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Orden` MODIFY `fecha` DATETIME(3) NOT NULL;
