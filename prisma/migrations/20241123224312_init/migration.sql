/*
  Warnings:

  - You are about to drop the `BankAccounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ACCOUNT_TYPE" AS ENUM ('SAVINGS', 'CURRENT', 'SALARY');

-- DropTable
DROP TABLE "BankAccounts";

-- DropEnum
DROP TYPE "TYPE";

-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "balance" DOUBLE PRECISION,
    "type" "ACCOUNT_TYPE",
    "holder_type" "HOLDER_TYPE",
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);
