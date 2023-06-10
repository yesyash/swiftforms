# SwiftForms

## Setup

1. Clone the repository

   ```
   git clone https://github.com/yesyash/swiftforms
   ```

2. Move to the project folder

   ```
   cd swiftforms
   ```

3. Install the dependencies

   ```
   npm install
   ```

4. Create a `.env` file by copying `.env.example`

   ```
   cp .env.example .env
   ```

5. Populate `.env` with required values
6. Push prisma schema to your local DB
   ```
   npx prisma db push
   ```
7. Start the development server

   ```
   npm run dev
   ```

8. Navigate to `localhost:3000` on your browser

## Current Tech Stack

- Next.js
- Postgres
- TailwindCSS
