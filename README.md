# online-survey

## Online Survey Application

> This is an online survey application using NodeJS to setup the api for retrieving Data from a MySQL Database and a React FrontEnd.
> App has Categories (Diet,Home,Travel,Other).<br />
> Each Category has their set of Questions.<br />
> Each Question has a set of choices.

### API Usage

> /api/categories - Retrieves the list of all active Categories <br>
> /api/categories/1/questions - Retrieves the list of all active Questions and its Choices for Category with id=1

### `npm start`

Runs the application.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run dev`

Starts server and the client concurrently and runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Run `npm run build` in the `/client` subdirectory

Running the build process in /client will automatically publish content to the Main /public folder for Deployment

### Environment Variables

The project needs these variables to be set in .env for MySQL Database Connection

1. MYSQL_HOST - MySQL Host
2. MYSQL_USER - MySQL User
3. MYSQL_PASSWORD - MySQL Connection Password
4. MYSQL_DB - MySQL Database Name
