/*
  Warnings:

  - You are about to drop the column `type` on the `bank_accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bank_accounts" DROP COLUMN "type",
ADD COLUMN     "account_type" "ACCOUNT_TYPE";
