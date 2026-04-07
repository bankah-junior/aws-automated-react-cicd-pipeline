# AWS Automated CI/CD Pipeline 🚀

This project showcases an automated CI/CD pipeline for a modern React application built with Vite. It is designed to be highly portable, containerized, and ready for deployment on AWS.

## 🌟 Features

- **Portability**: Fully containerized using Docker and Docker Compose.
- **Modern Tech Stack**: React + Vite for high-performance development and production builds.
- **Production Ready**: Optimized multi-stage Docker build with Nginx as a reverse proxy.
- **CI/CD Integration**: Architecture ready for integration with AWS CodePipeline, CodeBuild, and CodeDeploy.
- **Efficiency**: Slim Docker images using Alpine Linux and `.dockerignore` optimization.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [CSS](https://www.w3.org/Style/CSS/)
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- **Web Server**: [Nginx](https://www.nginx.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Local Development

If you'd like to run the project locally without Docker:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aws-automated-cicd-pipeline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## 🐳 Running with Docker

This project is optimized to run inside a container.

### Build and Run

To build the Docker image and start the container:

```bash
docker-compose up --build
```

The application will be served at **`http://localhost:5173`**.

### How it Works (Multi-Stage Build)

1. **Build Stage**: Uses a Node.js 20 Alpine image to install dependencies and build the Vite application.
2. **Production Stage**: Uses a lightweight Nginx Alpine image. It copies the built static files from the build stage and configures Nginx to serve them on port 5173.

---

## ☁️ CI/CD Pipeline (AWS)

The project name `aws-automated-cicd-pipeline` implies its purpose for cloud deployment. The recommended AWS flow is:

1. **Source**: GitHub/Bitbucket repository.
2. **Build**: AWS CodeBuild uses the `Dockerfile` to create an image and push it to Amazon ECR.
3. **Deploy**: AWS CodeDeploy or App Runner pulls the image from ECR and deploys it to ECS (Fargate) or an EC2 instance.

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
