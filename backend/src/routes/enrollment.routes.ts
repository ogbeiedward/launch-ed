import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get enrollments for a user
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      include: { course: true },
    });
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch enrollments' });
  }
});

// Enroll in a course
router.post('/enroll', async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const enrollment = await prisma.enrollment.create({
      data: { userId, courseId },
    });
    res.json(enrollment);
  } catch (error) {
    res.status(400).json({ message: 'Already enrolled or invalid data' });
  }
});

export default router;
