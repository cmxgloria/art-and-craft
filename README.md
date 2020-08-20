This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## structure of the app

```
header section including all shop, contact and sign icon
custom section including all signin, signup and signInWithGoogle
main app with directory.jsx, click each directory to find each category, each category have more individual items
firebase to store user and items data
```

### redux introduced

```
Action-Root Reducer-Store-DOM display updated state

Flux Pattern
Action-Dispatcher-Store-View

redux introduction is due to props drilling which needs to be solve. Like some parent state to pass prop to great great grandchild then no need to pass one by one step of each's child(even this child component may not need this prop), nested is bad habit to write a code.
To solve it, redux uses single source of truth, create new state file , other component can share the data instead of repeat the code


MVC is JS pattern
Action-Controller-model(like state data)-view
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## practice tool

```
https://www.crwn-clothing.com/
```

## stripe

## redux

## GrahpQL

## useCallback & useMemo from React Hook

```
react lazy, suspense and memo
useCallback to use to remember the function & useMemo to use to remembert the value


apollo-boost
react-apollo
```

## convert my app to PWA

yarn add express-sslify
check "Audits" on inspector, this react is easy to complier to C

## firebase

```
in database--rules---(
service cloud.firestore {
match /databases/{database}/documents {
mathch /users/{userId}{
allow get, create, update: if request.auth != null && request.auth.uid == userId;
}
mathch /collections/{collection}{
allow read:
allow write: if request.auth != null && request.auth.uid == "hkhuyeakhzShgow12";
}
}
})
"create, update " those can use "write"

Then we could test in simulation section(create get update delete ) to test the path is working or not(past the auth.uid to test on or off line )
```
