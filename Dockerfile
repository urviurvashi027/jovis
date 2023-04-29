# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files to the container
COPY . .

# Build the application
RUN npm run build

# Set the environment variable to production
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]



