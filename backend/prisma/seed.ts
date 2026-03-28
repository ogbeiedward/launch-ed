import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('Password123!', 10);

  // 1. Create Instructor
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@learnard.com' },
    update: {},
    create: {
      email: 'instructor@learnard.com',
      password: hashedPassword,
      name: 'Dr. Learnard',
      role: 'INSTRUCTOR',
    },
  });

  // 2. Create Student
  const student = await prisma.user.upsert({
    where: { email: 'student@learnard.com' },
    update: {},
    create: {
      email: 'student@learnard.com',
      password: hashedPassword,
      name: 'Eduardo Student',
      role: 'STUDENT',
    },
  });

  // 3. Create Demo Courses
  const existingCourse = await prisma.course.findFirst({
    where: { title: 'Professional Fashion Design & Garment Making' }
  });

  if (!existingCourse) {
    const course1 = await prisma.course.create({
      data: {
        title: 'Professional Fashion Design & Garment Making',
        description: 'Master the art of dressmaking, pattern drafting, and fashion illustration from scratch.',
        category: 'Fashion',
        level: 'BEGINNER',
        price: 25000,
        instructorId: instructor.id,
        isPublished: true,
        sections: {
          create: [
            {
              title: 'Introduction to Fashion',
              order: 1,
              lessons: {
                create: [
                  { title: 'Tools of the Trade', order: 1, type: 'VIDEO', videoUrl: 'https://placeholder.com/video1' },
                  { title: 'Understanding Fabrics', order: 2, type: 'TEXT', content: 'In this module, we discuss various fabric types including cotton, silk, and lace...' }
                ]
              }
            },
            {
              title: 'Pattern Drafting',
              order: 2,
              lessons: {
                create: [
                  { title: 'Measuring for Accuracy', order: 1, type: 'VIDEO', videoUrl: 'https://placeholder.com/video2' },
                  { title: 'The Basic Bodice Block', order: 2, type: 'TEXT', content: 'Step-by-step guide to drafting your first bodice block.' }
                ]
              }
            }
          ]
        }
      }
    });

    const course2 = await prisma.course.create({
      data: {
        title: 'Modern Plumbing & Home Maintenance',
        description: 'Learn pipefitting, leak repairs, and modern installation techniques for residential buildings.',
        category: 'Construction',
        level: 'INTERMEDIATE',
        price: 35000,
        instructorId: instructor.id,
        isPublished: true,
        sections: {
          create: [
            {
              title: 'Plumbing Fundamentals',
              order: 1,
              lessons: {
                create: [
                  { title: 'Safety Gear & Precautions', order: 1, type: 'VIDEO', videoUrl: 'https://placeholder.com/video3' }
                ]
              }
            }
          ]
        }
      }
    });

    // Pre-enroll student
    await prisma.enrollment.create({
      data: {
        userId: student.id,
        courseId: course1.id,
      }
    });
  }

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
