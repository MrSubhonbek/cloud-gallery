# Gallery Project

## Introduction
This project is a gallery website that showcases various artworks and photographs. It allows users to browse and view different art pieces, as well as interact with the website by adding comments and liking their favorite artworks.

## Installation
To run this project on your local machine, you need to have the following software installed:

- Node.js: Get the latest version of Node.js from the official website (https://nodejs.org/).

After installing Node.js, follow these steps:

1. Clone this repository to your local machine using the command: `git clone https://github.com/MrSubhonbek/cloud-gallery.git`
2. Navigate to the project directory: `cd cloud-gallery`
3. Install project dependencies: `npm install`

## Usage
You can start the project using the following command:

```
npm run dev
```

This will start the development server and the website will be accessible at `http://localhost:3000`.

## Project Structure
The project follows a standard structure for React applications:

- `public`: Contains the publicly accessible files, images, and other assets.
- `src`: Contains the application source code.
  - `components`: Contains reusable React components.
  - `app`: Contains top-level components for different sections of the website.
  - `lib`: Contains utility functions used throughout the project.
  - `app/page.ts`: Entry point of the application.
  - `server-action`: Experimental feature from Next.
- `README.md`: Contains general information and instructions about the project.

## Technologies Used
- Next: A JavaScript library for building user interfaces.
- Axios: A library for making HTTP requests.
- Next-Cloudinary: A library for high-performance image and uploading at scale in Next.js powered by Cloudinary.
- Radix UI: A library of React components based on Semantic UI CSS framework.

## Contribution Guidelines
If you want to contribute to this project, you're welcome to submit a pull request. Before submitting a pull request, make sure to follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature/fix: `git checkout -b my-feature`
3. Make your changes and test them thoroughly.
4. Commit your changes: `git commit -m "Add my feature"`
5. Push to the branch: `git push origin my-feature`
6. Submit a pull request.

Please ensure your code adheres to the existing code conventions and includes appropriate comments and documentation.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code for personal and commercial purposes.
