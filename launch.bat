@echo off
echo Starting Launch-Ed Deployment...

cd backend
echo Installing backend dependencies...
npm install
echo Initializing database...
npx prisma migrate dev --name init
echo Seeding demo data...
npm run prisma:seed
start cmd /k "npm run dev"

cd ../frontend
echo Installing frontend dependencies...
npm install
echo Starting frontend...
npm run dev

echo Learnard is launching!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
pause
