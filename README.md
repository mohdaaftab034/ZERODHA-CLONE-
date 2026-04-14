# Zerodha Clone

This repository contains the backend API, the public frontend, and the dashboard app.

## Holdings fix summary

The Holdings page was showing "Please login first" even after a successful login because the auth state was not shared correctly between the login app on port `3000` and the dashboard app on port `3001`.

The fix includes:
 
- returning a real JWT token from the backend login endpoint
- saving the token in both `localStorage` and a shared cookie after login
- letting the dashboard read the token from either source before loading Holdings
- redirecting unauthenticated users back to the frontend login page

## App URLs

- Frontend: `http://localhost:3000`
- Dashboard: `http://localhost:3001`
- Backend API: `http://localhost:3002`
