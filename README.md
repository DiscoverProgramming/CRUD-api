# API Documentation

This project is a simple Express.js application that provides a basic CRUD (Create, Read, Update, Delete) API. It uses an in-memory data store, which should be replaced with a real database for production applications.

### File Structure

• [app.js](app.js): This is the main server file.
• [package.json](package.json): This file lists the project dependencies.

### API Endpoints

    • POST /api: This endpoint receives JSON data in the request body, adds it to the data array, and sends the same data back in the response.
    • GET /data: This endpoint sends the entire data array in the response.
    • PUT /data/:id: This endpoint updates an item in the data array. It finds the item by id, updates its properties with the properties in the request body, and sends the updated item in the response.
    • DELETE /data/:id: This endpoint deletes an item from the data array. It finds the item by id and removes it.

### Running the Project

To run the project, you need to have Node.js and npm installed. The, you can install the project dependencies with `npm install` and start the server with `node app.js`.