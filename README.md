# Express TypeScript API Template

A minimalist and scalable template for building REST APIs using Express.js and TypeScript. This template provides a solid foundation for creating production-ready APIs with proper structure and type safety.

## Features

- 🚀 Express.js with TypeScript configuration
- ⚡️ Quick start with minimal setup
- 🔒 Environment variables support
- 📁 Modular route handling
- 🔍 Type safety with TypeScript

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone this template:
git clone <repository-url>
cd express-typescript-api

2. Install dependencies:
   bash
npm install
or
yarn install

3. Create a `.env` file in the root directory:
env
PORT=8000

4. Start the development server:
bash
npm run dev
or
yarn dev


## Project Structure
├── src/
│ ├── index.ts # Application entry point
│ └── user.ts # Example route handler
├── .env # Environment variables
├── package.json
└── tsconfig.json

## Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the project for production
- `npm start` - Run the production server

## Adding New Routes

1. Create a new file for your route handler (similar to `user.ts`)
2. Define your route handler function
3. Import and add the route to `index.ts`

Example:
typescript
// src/newRoute.ts
import { Request, Response } from "express";
export const handleNewRoute = (req: Request, res: Response) => {
// Your logic here
};
// In index.ts
import { handleNewRoute } from "./newRoute";
app.get("/new-route", handleNewRoute);


## Environment Variables

The following environment variables can be configured:

- `PORT`: Server port number (default: 8000)

## Future Enhancements

- Database integration
- Authentication middleware
- Request validation
- Error handling middleware
- API documentation
- Testing setup

## Contributing

Feel free to submit issues and enhancement requests.

## License

[MIT](LICENSE)
