<h1>Book Catalog Application</h1>
<h3>Overview</h3>
The Book Catalog Application is a full-stack web application that allows users to manage a catalog of books. Users can add new books with details like title, author, ISBN, and price. The backend is implemented with Spring Boot, while the frontend is built using React.js with Material-UI components for styling.
Features.

  -Add new books to the catalog with title, author, ISBN, and price.</br>
  -interface with form validation.</br>
  -RESTful API for seamless communication between the frontend and backend.</br>

<h4>Technologies Used</h4>
<h4>Backend</h4>

  -Java with Spring Boot</br>
  -Maven for dependency management</br>
  -Postgres Database</br>

<h4>Frontend</h4>

  -React.js</br>
  -Material-UI for UI components</br>
  -Fetch API for HTTP requests</br>

<h4>Tools</h4>

  -Node.js and npm</br>
  -Postman for testing APIs</br>

<h4>Installation and Setup
Prerequisites</h4>

  -Java 17+</br>
  -Node.js (v16 or later) and npm</br>
  -IDE for Java (e.g., IntelliJ IDEA, Eclipse)</br>
  -IDE for JavaScript (e.g., VS Code)</br>

<h4>Backend Setup</h4>

  Clone the repository:
```
git clone https://github.com/RenatoMessiasMachado/BookCatalog.git
cd BookCatalog-main/backend
```

Configure the database in application.properties. For example:

```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
```

Build and run the application:

    mvn spring-boot:run

  The backend will run at http://localhost:8080.

Frontend Setup

  Navigate to the frontend directory:
```
cd BookCatalog-main/frontend
```
Install dependencies:

```
npm install
```
Start the development server:

    npm start

    The frontend will run at http://localhost:3000.

API Documentation
Base URL

http://localhost:8080/api/book
Endpoints
Method	Endpoint	Description
POST	/	Adds a new book to the catalog.
GET	/	Retrieves all books in the catalog.
PUT	/{id}	Updates a book's details.
DELETE	/{id}	Deletes a book by ID.
Project Structure
Backend
```
backend/
├── src/main/java/com/example/bookcatalog
│   ├── controller/BookController.java
│   ├── service/BookService.java
│   ├── model/Book.java
│   └── repository/BookRepository.java
├── src/main/resources
│   ├── application.properties
│   └── data.sql
└── pom.xml
```
Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   └── AddBook.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
Improvements for Professionalism

    Styling: Use Material-UI for a polished design.
    Validation: Add custom error messages and input validation on the form.
    Pagination: Implement pagination for listing books.
    Testing: Write unit and integration tests for both frontend and backend.
    Error Handling: Enhance error handling for API requests.
    Deployment: Host the application using Heroku, Vercel, or another platform.

Contribution Guidelines

    Fork the repository and create a new branch for your changes.
    Ensure all code is well-documented and tested.
    Create a pull request with a detailed description of changes.

License

This project is open-source and available under the MIT License.
