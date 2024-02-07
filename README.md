# Future Eats

## Getting Started

Follow these steps to set up and run Future Eats on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://nodejs.org/)

### Setup

1. (optional) **Install yarn:**

   consider installing the yarn command to use it in place of npm commands:

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
- React Context - Global State
- [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start) - Router
- [Axios](https://github.com/axios/axios) - HTTP Requests

### A description of folders division

![folders](https://user-images.githubusercontent.com/53839013/168600287-642e3fb4-7f48-4c65-a868-6e75f5063e34.png)

- `assets` => The folder who stores the .png and .svg files

- `components`=> The folk who stores the ordinary components of the project. There are another components in DesignSystem and Screens folders. Into each respective component folder, the files are divided acoording the following rule:
  - ***index.tsx*** => who keeps the component to be exported to foreing folders and keeps all component logic that doesn't about design;
  - ***view.tsx*** => who keeps JSX ("html" of React) structure of component and design logic (if necessary some design logic). This component is responsible to import the styled components from design system or styled components file;
  - ***style.tsx*** => who keeps all components that demand some css config by `styled-components` lib;
  - ***interfaces.ts*** => who keeps the interfaces to type the props of components from view.tsx or index.tsx  
  - ***other stuff*** => according demand of component, is possible exists other files as specific custom hooks that will be use just by one component. 

- `constants` => The folder that keeps static values of project. In this project the folder is keeping the base url of API (api.ts) and all strings that will be render as text of interface project (interfaceTexts.ts).

- `designSystem` => This folder was created to separate all stuff coming from external design system lib that the project is using. This is extremely important to avoid some hard design bugs when some critical change happen in design system config, components, libs etc. Because if the design system stuff is scattered into the components, some change can demand search for each component that use the thing that changes, while with a designSystem folder, we fix the problem just in one place.     
This folder have two folder who separete ordinary components (components folder) and icons (icons folder) of `MaterialUI`. A themeProvider.tsx file, to provide some commom stuff of designSystem project, as color pallete, font-family, etc. And a index.ts to export a object called designSystem, who keepps all components of the folder. 

- `global` => The folder that keeps the global state of project. There is a division by folders in global state according the theme of the values. Like the entities folders that have the user entity folder and the brewery entity folder: this two folders keeps their respective global values. And in the end, all folders are reunited in initialGlobalState.ts file, to provide the global value to whole project.   

- `hooks` => That keeps some custom hooks that could be commom in more than one component or even commom with another project.   

- `routes` => The folder that keeps the routes config. This project there are two routes: "/" and "/login", the first is the route to brewery dashboard page, and the second, the route to login page. 

- `screens` => The folder that keeps components that represents some whole screen of project. Is important this division between the screens and the components folder, because some screen logics provide props to a really deep tree of components, so to became easier to developer access this screens is a good way to keep good usability of project. Usually, one screen represent the whole component of a route, so as we have two routes in this project, we have two screens too.

- `services` => The folder that keeps the connections with forein services. In this project, just the connection with the rest API to get breweries.

- `utils` => The folder that keeps some util stuff that can be used in more than one case. In this project, just a regex function who validate text without number and special characters.
