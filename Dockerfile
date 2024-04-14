# Use an official Node runtime as the base image
FROM node:18 as build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build app
RUN npm run build

# Use lightweight Node image for production
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy build files from build stage
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Install serve
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port
EXPOSE 3000
