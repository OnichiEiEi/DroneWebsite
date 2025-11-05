# Drone Monitoring Web App - Frontend

A frontend web application for logging and monitoring drone data. Built with React, Vite, and Tailwind CSS. Connects to the Drone API Server using environment variables.

---

## Features

- Enter Drone ID and load configuration from the API
- Submit temperature logs to the backend (`POST /logs`)
- View drone logs with pagination (`GET /logs/:droneId`)
- Toggle between light and dark themes
- Modal-based login system
- Share Drone ID across components via Layout

---

## Tech Stack

- React + Vite
- Tailwind CSS
- JSX Components
- Environment Variables (.env)

---

## Environment Variables

Create a `.env` file in the `frontend/` directory with the following values:

```env
VITE_API_BASE_URL=https://your-api.com
VITE_DRONE_ID=your-id-drone