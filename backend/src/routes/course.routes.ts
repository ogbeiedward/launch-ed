import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all courses (catalog)
router.get('/', async (req, res) => {
  const courses = await prisma.course.findMany({
    where: { isPublished: true },
    include: { instructor: { select: { name: true } } },
  });
  res.json(courses);
});

// Get course details (for player/details page)
router.get('/:id', async (req, res) => {
  const course = await prisma.course.findUnique({
    where: { id: req.params.id },
    include: {
      sections: {
        include: { lessons: true }
      },
      instructor: { select: { name: true } }
    }
  });
  res.json(course);
});

// Create course (Instructor only)
router.post('/', async (req, res) => {
  // Authentication middleware should be here in real app
  const { title, description, category, level, instructorId } = req.body;
  const course = await prisma.course.create({
    data: { title, description, category, level, instructorId }
  });
  res.json(course);
});

export default router;
