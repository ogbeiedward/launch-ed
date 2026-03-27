import express from 'express';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2023-10-16' as any,
});

router.post('/checkout', async (req, res) => {
  const { courseId, userId } = req.body;
  const course = await prisma.course.findUnique({ where: { id: courseId } });

  if (!course) return res.status(404).json({ message: 'Course not found' });

  // Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: course.title },
          unit_amount: course.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.FRONTEND_URL}/dashboard/success?id=${courseId}`,
    cancel_url: `${process.env.FRONTEND_URL}/courses/${courseId}`,
    metadata: { courseId, userId }
  });

  res.json({ id: session.id, url: session.url });
});

export default router;
