-- CreateEnum
CREATE TYPE "TYPE" AS ENUM ('SAVINGS', 'CURRENT', 'SALARY');

-- CreateEnum
CREATE TYPE "HOLDER_TYPE" AS ENUM ('PHYSICAL', 'JURIDICAL');

-- CreateTable
CREATE TABLE "BankAccounts" (
    "id" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "balance" DOUBLE PRECISION,
    "date" TIMESTAMP(3),
    "type" "TYPE",
    "holder_type" "HOLDER_TYPE",
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankAccounts_pkey" PRIMARY KEY ("id")
);
