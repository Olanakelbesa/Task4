
# Contact Form Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [ContactForm Component](#contactform-component)
- [Styling](#styling)
- [Screenshot](#screenshot)


## Overview

This project is a simple React application built with TypeScript and Vite. It demonstrates the use of the `useForm` hook to manage the state of a contact form. The form includes fields for the user's name, email, and message, with validation to ensure all fields are filled out correctly.

## Features

- **Form State Management**: Utilizes the `useForm` hook to manage the state of form fields.
- **Form Validation**: Implements validation for required fields and checks for a valid email format.
- **Error Handling**: Displays appropriate error messages for invalid inputs.
- **Responsive UI**: Basic styling to ensure the form is user-friendly and responsive.

## Technologies Used

- **TypeScript**: Provides static typing to enhance code quality and maintainability.
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that serves as an alternative to Create React App.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/contact-form-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd contact-form-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Fill out the contact form with your name, email, and message.
3. Submit the form and observe the validation messages if any fields are invalid.

## Project Structure

```sh
contact-form-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ContactForm.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       └── ContactForm.css
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## ContactForm Component

The `ContactForm` component handles the contact form functionality, including form state management and validation. The `useForm` hook is used to manage the form state and validation.

## Styling

Basic styling for the form is included in the `ContactForm.css` file to ensure the form is user-friendly and responsive.

## Screenshot

![Screenshot 2024-08-02 095521](https://github.com/user-attachments/assets/f8f30e2c-8108-4902-a27e-27d8b9c37868)


