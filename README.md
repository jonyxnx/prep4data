# Prep4Data - Test Exam Application

A full-stack application for creating and taking test exams, built with Next.js, NestJS, and Prisma.

## Features

- User authentication and authorization
- Multiple question types (Multiple Choice, True/False, Short Answer, Essay)
- Test creation and management
- Test attempts tracking
- Subscription-based access
- Community features (comments)
- Detailed analytics

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeScript
- **Database**: MongoDB with Prisma ORM
- **Authentication**: JWT (to be implemented)

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prep4data.git
cd prep4data
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the backend directory with:
   ```
   DATABASE_URL="mongodb://localhost:27017/prep4data"
   ```

4. Start the development servers:

```bash
# Start backend server (from backend directory)
npm run start:dev

# Start frontend server (from frontend directory)
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Project Structure

```
prep4data/
├── backend/                 # NestJS backend
│   ├── prisma/             # Prisma schema and migrations
│   └── src/                # Source code
│       ├── items/          # Items module
│       └── prisma/         # Prisma service
├── frontend/               # Next.js frontend
│   └── src/
│       └── app/            # Next.js app directory
└── README.md
```

## Database Schema

The application uses MongoDB with the following main models:
- User
- Question
- Test
- TestAttempt
- Subscription
- Comment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.