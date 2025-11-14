/*
  Warnings:

  - The `mood` column on the `ChatMessage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `theme` column on the `ChatMessage` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('happy', 'sad', 'angry', 'anxious', 'relaxed', 'grateful', 'excited', 'tired', 'lonely', 'overwhelmed', 'frustrated', 'calm', 'confident');

-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('work', 'relationships', 'family', 'health', 'fitness', 'learning', 'creativity', 'finance', 'spirituality', 'travel', 'goals', 'personal_growth', 'habits');

-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "mood",
ADD COLUMN     "mood" "Mood",
DROP COLUMN "theme",
ADD COLUMN     "theme" "Theme";
