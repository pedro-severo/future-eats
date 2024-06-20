# Future Eats UI

Future Eats is a app to order foods and drinks from bar and restaurants. It is a Reeact project built in typescript. The project is fully tested with Jest and Enzyme, also with a coverage checking (100%) to push new changes

# Summary

* [Getting Started](#getting-started)
* [Project Description](#project-description)

# <a name="getting-started">Getting Started</a>

Follow these steps to set up and run Future Eats on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://nodejs.org/) - v.20

### Setup

1. (optional) **Install yarn:**

   consider to install yarn command to use it in place of npm command:

   ```bash
   npm install -g yarn
   ```
   more information here: https://www.npmjs.com/package/yarn


2. **Clone the repository:**

   ```bash
   git clone https://github.com/pedro-severo/future-eats.git
   ```

3. **Navigate to the project directory:**

   ```bash
   cd future-eats
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install    

5. **Build the application:**

   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

6. **Start the application:**

   ```bash
   npm run start
   ```
   or
   ```bash
   yarn start
   ```

7. **Running in dev mode:**

   Instead to use build + start commands, you can skip steps 5 and 6 and just to run the application with dev command:

   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
  
8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   
<br>

### Connecting the API

The backend project is not deployed yet, so, to run and test the api connection on front, is necessary to run the backend also. Here is the link:

[Future Eats Service](https://github.com/pedro-severo/future-eats-service)

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

# <a name="project-description">Project Description</a> 

### Main technologies used

- [React](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [NextJs (App Router)](https://nextjs.org/docs)
- [MaterialUI](https://mui.com/) - DesignSystem
- [Styled-components](https://styled-components.com/) - Styling
- [React Context](https://legacy.reactjs.org/docs/context.html) + [useReducer](https://react.dev/reference/react/useReducer) - Global State
- [Graphql](https://graphql.org/)
- [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/)

### A description of the architecture

The project is built in App Router from NextJS framework. So, all folders with a page.tsx on the root means that this folder is a route of the project. For now, the folders is structured on this way:
```
├── src/
│   ├── app/
|   |   ├── login/  (page: https://base-url/login)
|   |   ├── signup/ (page: https://base-url/signup)
|   |      |── register-address/ (page: https://base-url/signup/register-address)
|   |   ├── shared/ (common stuff of the project)
│   │      ├── assets/ 
│   │      ├── components/ 
│   │      ├── constants/ 
│   │      ├── designSystem/ (styled components imported from materialUI)
│   │      ├── services/
│   │      ├── stores/ (global state)
│   │      ├── utils/
|   |   ├── layout.tsx  (common layout of whole project. See next doc to know more about layout file)
|   |   ├── page.tsx (page: https://base-url. See next doc to know more about page file)
|   |   ├── registry.tsx (styles setup file)
```

