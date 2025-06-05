# EasyVest Authentication System

This is a full-stack authentication system using Google OAuth 2.0 for EasyVest.ir.

## Project Structure

- `server.js` - Backend Express server with Google OAuth authentication
- `client/` - React frontend application
  - `src/components/Login.js` - Login component with Google authentication
  - `src/components/Login.css` - Styling for the login component

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google OAuth 2.0 credentials (already configured)

## Setup Instructions

1. Install backend dependencies:
   ```bash
   npm install
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   SESSION_SECRET=your-session-secret-key-here
   FRONTEND_URL=https://easyvest.ir
   PORT=5003
   ```

## Running the Application

### Development Mode

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   npm run client
   ```

Or run both simultaneously:
```bash
npm run dev:full
```

### Production Mode

1. Build the frontend:
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment

For production deployment on your virtual server:

1. Build the React frontend:
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. Set up environment variables on your server
3. Install PM2 globally: `npm install -g pm2`
4. Start the server with PM2: `pm2 start server.js`
5. Configure your domain (easyvest.ir) to point to your server
6. Set up Nginx as a reverse proxy to handle HTTPS and serve the static files

## Security Notes

- Always use HTTPS in production
- Keep your environment variables secure
- Regularly update dependencies
- Monitor server logs for suspicious activity

## License

This project is proprietary and confidential. 