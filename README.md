# Connect Front to Back - MERN Stack Project

This repository contains a MERN (MongoDB, Express, React, Node) stack project that demonstrates how to connect a front-end React application to a back-end Node/Express API. It can serve as a boilerplate project for a MERN stack application, providing a solid foundation for building scalable and maintainable applications. 
The project is based on the following tutorial I wrote: [Setting up a Full Stack React & Node.js Project: A Comprehensive Cheat Sheet.](https://medium.com/@obrm770/setting-up-a-full-stack-react-node-js-project-a-comprehensive-cheat-sheet-ee326576c21a)


## Table of Contents 

- [Connect Front to Back - MERN Stack Project](#connect-front-to-back---mern-stack-project)
  - [Table of Contents](#table-of-contents)
      - [Prerequisites](#prerequisites)
      - [Setup](#setup)
      - [Running the Application](#running-the-application)
      - [Contributing](#contributing)
  - [License](#license)

#### Prerequisites

Before you start, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/download) (v14.x or later)
* [npm](https://www.npmjs.com/get-npm) (v7.x or later)
* [yarn](https://classic.yarnpkg.com/lang/en/docs/install) (v1.x or later)

#### Setup

To set up the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/MYSELF-BINEET/3WInternship.gi
```

2. Install the necessary dependencies:

```bash
cd frontend
npm install
cd ..
cd backend
npm install
```


```  
3. Add the following lines to your config.env file:
```env
NODE_ENV=development
PORT=5050
CLOUDINARY_CLOUD_NAME=dj76qfsys
CLOUDINARY_API_KEY=911371812386156
CLOUDINARY_API_SECRET=t1GBAfax_vXNgCMNp3PB0kxHFYM
MONGO_URI=mongodb+srv://Bineet:PLJM6PKxBgI4paEo@cluster0.ntw5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5050
JWT_SECRET="LhEVCItMgnC3msS1aSdun1ZF4VPECx0rl1VQPrxCqoSJQwA6Hj"

```

#### Running the Application

To run the application, in the root directory, start the Node/Express server and the react application concurrently:

```bash
cd backend
npm run dev
cd ..
cd frontend
npm run dev
```
The server will be running on `http://localhost:5050` and the React Vite application will be running on `http://localhost:5173`.

Now you have both the front-end and back-end servers running. You can interact with the application through the browser on `http://localhost:5173` and see how the front-end React app communicates with the back-end Node/Express API.

#### Contributing

We welcome contributions to this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push the changes to the new branch: `git push origin <branch_name>`.
5. Create a pull request.

Please ensure your code adheres to the existing style and that you properly document your changes.

## License

This project is licensed under the MIT License. 

[^1]: If you don't have yarn installed on your machine, then first run: `npm install -g yarn`.
