# Backend

This service powers authentication and portfolio APIs for the Zerodha clone.

## What was fixed for Holdings

The backend login flow was returning only a user object, so the dashboard never received a usable auth token. The Holdings request also depended on the token being present in the `Authorization` header.
 
The backend now:

- accepts `MONGO_URL` or `MONGO_URI` from `.env`
- returns a signed JWT token from the login endpoint
- validates passwords correctly before issuing the token
- rejects requests cleanly when the Mongo URI or JWT secret is missing

## Response examples

### Login

Request:

```http
POST /api/auth/login
Content-Type: application/json

{
	"email": "user@example.com",
	"password": "password123"
}
```

Success response:

```json
{
	"message": "Login successful",
	"token": "<jwt-token>",
	"user": {
		"id": "<user-id>",
		"name": "User Name",
		"email": "user@example.com"
	}
}
```

### Holdings

Request header:

```http
Authorization: Bearer <jwt-token>
```

Success response:

```json
[
	{
		"name": "TCS",
		"qty": 10,
		"avg": 3200,
		"price": 3350,
		"net": "+5%",
		"day": "+1%"
	}
]
```

## Environment variables

- `MONGO_URI` or `MONGO_URL`
- `PORT` defaulting to `3002`
- `JWT_SECRET`

## Run

```bash
npm run dev
```
