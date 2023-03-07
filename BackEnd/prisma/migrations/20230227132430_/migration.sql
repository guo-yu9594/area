/*
  Warnings:

  - You are about to drop the column `nbFields` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `actionId` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `previousReaction` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `reactionId` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `nbFields` on the `Reaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "nbFields",
ADD COLUMN     "authId" INTEGER;

-- AlterTable
ALTER TABLE "Area" DROP COLUMN "actionId",
DROP COLUMN "previousReaction",
DROP COLUMN "reactionId",
ADD COLUMN     "action" JSONB,
ADD COLUMN     "active" BOOLEAN,
ADD COLUMN     "reaction" JSONB;

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "nbFields",
ADD COLUMN     "authId" INTEGER;
