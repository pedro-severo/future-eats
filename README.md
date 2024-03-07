# Future Eats

## Getting Started

Follow these steps to set up and run Future Eats on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://nodejs.org/) - version 20

<br>

### Setup

1. (optional) **Install yarn:**

   consider to install yarn command to use it in place of npm command:

   ```bash
   npm install -g yarn
   ```
   more information here: https://www.npmjs.com/package/yarn


3. **Clone the repository:**

   ```bash
   git clone https://github.com/pedro-severo/future-eats.git
   ```

4. **Navigate to the project directory:**

   ```bash
   cd future-eats
   ```

5. **Install dependencies:**

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install     

6. **Start the application:**

   ```bash
   npm run start
   ```
   or
   ```bash
   yarn start
   ```
  
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   
<br>

### Connecting the API

The backend project is not deployed yet, so, to run and test the api connection on frunt, is necessary to run the backend also. Here is the link:

[Future Eats Service](https://github.com/pedro-severo/future-eats-service)

Sorry by the (no) Readme, but to run the future-eats-service is just to run `npm (or yarn) install` + `npm run (or yarn) start`

<br>

### Tests and coverage

1. Runing tests:

   ```bash
   npm run test
   ```
   or
   ```bash
   yarn test
   ```

2. Runing coverage:

   ```bash
   npm run coverage
   ```
   or
   ```bash
   yarn coverage
   ```

3. Opening coverage on browser:

   ```bash
   npm run openCoverage
   ```
   or
   ```bash
   yarn openCoverage
   ```

4. Lines coverage percentage to push:

      100%

<br>

### Another coomands:

TODO: list all comands of the project

## A brief description of the project choices 

### Main technologies used

- [React](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [MaterialUI](https://mui.com/) - DesignSystem
- [Styled-components](https://styled-components.com/) - CSS
- React Context and useReducer - Global State
- [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start) - Router
- [Axios](https://github.com/axios/axios) - HTTP Requests
- [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/) - Tests

### A description of the architecture

// TODO



