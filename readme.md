# Festival Booking App
## Project Overview

This project is aimed at developing a booking application for music festival organizers. The app will allow organizers to manage artist bookings, logistics, and event planning in a seamless and user-friendly platform.

## Tech Stack
#### Frontend:

- React
- Redux
- Tailwind CSS
- AJAX

### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)

### Security & Authentication:

- JWT (JSON Web Token) for user authentication
- Bcrypt for password hashing

### Cloud Services & Email:

- Cloudinary for media storage (e.g., artist images, event posters)
- SendGrid for email notifications (e.g., booking confirmations, reminders)
- Features (Planned)
- User Authentication: Festival organizers can register, log in, and manage their bookings through secure authentication using JWT.
- Artist Management: Organizers can browse, add, and manage artist profiles, including details like performance schedules, contract details, and payment information.
- Booking Management: A comprehensive dashboard for managing booking requests, confirmations, and cancellations.
- Media Storage: Cloudinary integration for easy upload and management of media assets like artist images and event flyers.
- Notifications: Email notifications for booking updates, reminders, and cancellations using SendGrid.
- Responsive Design: Fully responsive UI built with React, Tailwind CSS, and Redux for state management.
- Project Setup
- Clone the repository:

~~~ bash
git clone https://github.com/your-username/festival-booking-app.git
~~~

## Install dependencies for both client and server:

~~~bash

cd festival-booking-app
npm install
cd client
npm install
~~~

### Environment Variables: Create a .env file in the root directory and add the following environment variables:

~~~ bash

MONGO_URI=<your_mongoDB_uri>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
SENDGRID_API_KEY=<your_sendgrid_api_key>
~~~

## Run the project:

### Backend:

~~~bash

npm run dev
~~~

### Frontend (from the /client folder):

~~~bash

npm start
~~~

## Contributing
Feel free to submit pull requests or suggest improvements via GitHub issues.

