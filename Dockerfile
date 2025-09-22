# Stage 1: Build the React application (This stage remains the same)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application using Tomcat
FROM tomcat:10.1-jdk17-temurin-jammy
# Clear out the default welcome page
RUN rm -rf /usr/local/tomcat/webapps/*
# Copy the built React app to Tomcat's root webapp folder
COPY --from=build /app/dist /usr/local/tomcat/webapps/ROOT
EXPOSE 8080
CMD ["catalina.sh", "run"]