# MERN Stack Portfolio Project

A full-stack portfolio website built with MongoDB, Express.js, React, and Node.js.

## Project Structure

```
├── backend/              # Node.js/Express API
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── .env           # Environment variables
│   ├── package.json   # Backend dependencies
│   └── server.js      # Express server
└── frontend/           # React application
    ├── src/
    │   ├── components/ # Reusable components
    │   ├── pages/     # Page components
    │   ├── services/  # API services
    │   ├── context/   # React context
    │   └── utils/     # Utility functions
    ├── package.json   # Frontend dependencies
    └── vite.config.js # Vite configuration
```

## Features

### Backend
- **Authentication**: JWT-based user authentication
- **Database**: MongoDB with Mongoose ODM
- **Security**: CORS, input validation, password hashing
- **API**: RESTful API for users and portfolio items

### Frontend
- **React**: Modern React with hooks and context
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Query for server state
- **Authentication**: Protected routes and user context
- **Animations**: Framer Motion for smooth animations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository** (if using git)
2. **Set up the backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend**:
   ```bash
   cd frontend
   npm install
   ```

### Configuration

1. **Backend Environment Variables**:
   Edit `backend/.env`:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_jwt_secret_key_here
   FRONTEND_URL=http://localhost:5173
   ```

2. **Frontend Environment Variables**:
   Edit `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start MongoDB** (if using local MongoDB):
   ```bash
   mongod
   ```

2. **Start the backend server**:
   ```bash
   cd backend
   npm run dev
   ```

3. **Start the frontend development server**:
   ```bash
   cd frontend
   npm run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Portfolio
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get single portfolio item
- `POST /api/portfolio` - Create portfolio item (protected)
- `PUT /api/portfolio/:id` - Update portfolio item (protected)
- `DELETE /api/portfolio/:id` - Delete portfolio item (protected)

## Deployment

### Backend (Node.js)
1. Set production environment variables
2. Deploy to services like Heroku, Railway, or DigitalOcean
3. Ensure MongoDB connection string is configured

### Frontend (React)
1. Build the production version: `npm run build`
2. Deploy to services like Vercel, Netlify, or AWS S3
3. Update API URL to production backend

## Technologies Used

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **express-validator** - Input validation

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **Tailwind CSS** - CSS framework
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Toastify** - Notifications

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Vicky Kumar - your-email@example.com

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)
