# Marketplace coding challenge.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to the hosted application - https://endearing-melba-372449.netlify.app/

<b>Tech stack, libraries</b>: React, Typescript, styled-components, Zustand for the state management, react-testing-library, cypress for testing. MUI for components.
<br />

## Conscious decisions

Due to a shortage of time, I had to omit some parts and details of the application: 
- <b>Tests.</b> The most important part would be covering the project with tests. I only added the example test for `ProductCard`. And just set up the cypress library without adding any tests.
- <b>Styles.</b> 1) There was an idea to make all styles more flexible by using `rem`. That would make it easier to change the website for accessibility for example. <br />2) Normally, I would use more variables. <br /> 3) Consistency of the app and  MUI (difference in fonts). Small CSS issues.
- <b>In general.</b> Self-review the code. Clean up the code, Better error handling. (Show the error message from the server, etc.). 


## Thoughts:

Thank you very much for the interesting coding challenge. The task is very practical and has a good detailed description. It was easy to go through the acceptance criteria. I hope you like my solution :)
<br /><br />

## Available Scripts

In the project directory, you can run:
### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

