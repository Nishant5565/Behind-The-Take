# Backend Project

This is a backend project built with Node.js, Express, and Prisma. It provides APIs for managing job listings and categories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Scripts](#scripts)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd Backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Set up the database (see [Database](#database)).

## Usage

To start the development server:

```sh
npm run server
```

To build the project:

```sh
npm run build
```

To start the production server:

```sh
npm start
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
DATABASE_URL=your_database_url
PORT=your_port
```

## Database

Create a .env file, and then Create A DATABASE_URL variable and paste the url of your database.
To set up the database, run the following command:

```sh
npx prisma migrate dev
```

To seed the database:

```sh
npm run seed
```

## Scripts

- `npm run server`: Start the development server with nodemon and ts-node-dev.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm start`: Start the production server.
- `npm run seed`: Seed the database.

## License

This project is licensed under the ISC License.