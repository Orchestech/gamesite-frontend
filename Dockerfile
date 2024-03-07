# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install -f
RUN npm run build

# RUn application
CMD [ "node", "server.js" ]
