# Lost & Found

A lightweight web application that allows users to report and browse lost and found items. Built with React, TypeScript, and Vite.

## Features

- **Browse Items** — View all reported lost and found items with their status, description, and submission date
- **Report an Item** — Submit a new lost, found, or returned item through a simple form
- **Status Tracking** — Each item is tagged as `Lost`, `Found`, or `Returned`
- **Mock Service Layer** — Fully functional with an in-memory mock backend, ready to swap in a real API

## Tech Stack

- **React 19** — Component-based UI
- **TypeScript** — Type-safe throughout
- **Vite** — Fast development server and build tool
- **React Router v7** — Client-side page routing

## Project Structure

```
src/
├── pages/
│   ├── Items.tsx        # Browse all approved items
│   └── ItemNew.tsx      # Submit a new item form
├── lib/
│   ├── service.ts           # Service interface & type definitions
│   ├── service.mock.ts      # In-memory mock implementation
│   └── service.factory.ts   # Swaps mock vs real service based on environment
└── App.tsx              # Root component
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Chynaadams1/Lost-and-found.git
cd Lost-and-found

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

## How the Service Layer Works

The app uses a service factory pattern that makes it easy to swap between a mock backend and a real API without changing any component code.

The `service.factory.ts` file exports whichever service implementation is active. Right now it uses `mockService`, which stores items in memory and simulates async network delays. To connect a real backend, implement the `LostFoundService` interface and update the factory to export it.

```ts
export interface LostFoundService {
  listApprovedItems(): Promise<Item[]>;
  createItem(input: { title: string; description?: string; status: Status }): Promise<Item>;
}
```

## Item Data Shape

```ts
type Item = {
  id: string;
  title: string;
  description: string | null;
  status: 'Lost' | 'Found' | 'Returned';
  created_at: string;
};
```

## Future Improvements

- Connect to a real backend API (FastAPI or Django REST Framework)
- Add image upload support for lost/found items
- Add search and filter by status
- Add admin approval workflow before items appear publicly
- Add user authentication so people can track their own submissions

## Author

**Chyna Adams**
- GitHub: [github.com/Chynaadams1](https://github.com/Chynaadams1)
- LinkedIn: [linkedin.com/in/chynaadams](https://linkedin.com/in/chynaadams)
