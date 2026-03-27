import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get progress for a course
router.get('/:courseId/:userId', async (req, res) => {
  const { courseId, userId } = req.params;
  const progress = await prisma.progress.findMany({
    where: { userId, lessonId: { in: (await prisma.lesson.findMany({ where: { section: { courseId } } })).map(l => l.id) } },
  });
  res.json(progress);
});

// Update progress (mark as completed)
router.post('/update', async (req, res) => {
  const { userId, lessonId, isCompleted } = req.body;
  const progress = await prisma.progress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    update: { isCompleted },
    create: { userId, lessonId, isCompleted },
  });
  res.json(progress);
});

export default router;
