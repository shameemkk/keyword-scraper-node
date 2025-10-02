# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, PM2, and Playwright Chromium
RUN npm install && \
    npm install -g pm2 && \
    npx playwright install-deps && \
    npx playwright install chromium

# Copy the rest of your app
COPY . .

# Expose the app port
EXPOSE 3000

# Start with PM2 in cluster mode
CMD ["npm", "start"]
