# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
# Just copy server.js as that's all we have right now
COPY server.js .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run server.js when the container launches
CMD ["node", "server.js"]
