# Use the official Nginx image as the base image
FROM nginx:stable-alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy the web app files to the Nginx web root
COPY /src/* /usr/share/nginx/html