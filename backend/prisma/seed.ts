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
    where: { title: 'Full Stack Development with Next.js' }
  });

  if (!existingCourse) {
    const course1 = await prisma.course.create({
      data: {
        title: 'Full Stack Development with Next.js',
        // ...
        description: 'Learn to build modern, scalable web applications using Next.js, TypeScript, and Prisma.',
        category: 'Development',
        level: 'BEGINNER',
        price: 99.99,
        instructorId: instructor.id,
        isPublished: true,
        sections: {
          create: [
            {
              title: 'Introduction',
              order: 1,
              lessons: {
                create: [
                  { title: 'Welcome to the course', order: 1, type: 'VIDEO', videoUrl: 'https://placeholder.com/video1' },
                  { title: 'Setting up your environment', order: 2, type: 'TEXT', content: 'Follow these steps to set up Node.js...' }
                ]
              }
            },
            {
              title: 'Main Concepts',
              order: 2,
              lessons: {
                create: [
                  { title: 'App Router Basics', order: 1, type: 'VIDEO', videoUrl: 'https://placeholder.com/video2' },
                  { title: 'Quiz: Routing', order: 2, type: 'VIDEO', // Mocking quiz as lesson for simplicity in seed
                    quiz: {
                      create: {
                        questions: {
                          create: [
                            { text: 'What is the root directory for Next.js App Router?', options: '["/src/pages", "/src/app", "/public", "/api"]', answer: 1 }
                          ]
                        }
                      }
                    }
                  }
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
