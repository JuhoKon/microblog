# Selecting Docker image for version 10
FROM node:10

# Create app directory
WORKDIR /usr/src/client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# If you are building your code for production
# RUN npm install --only=production
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Start service
CMD [ "npm","start" ]