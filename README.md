# Oxus Flashcards

WEBSITE: (https://oxus.netlify.com).

This app, in its entirety, every tiniest nook and cranny - has been designed, coded and deployed 100% by me, over the course of about 2 month's of intense learning & working on it full time.

This app enables users to make custom flashcards with question and answer on either side. Flashcard can feature text, images or both.

App is compatible both with desktop PC's and even very small mobile phones.

Users can easily take a picture with their phone, and upload it to the flashcard they're editing in 1 click. This is very useful for, e.g., taking a picture of a textbook's paragraph and putting it on the answer side of a flashcard (image can be on either side, though, it's not limited).

Users can create, edit and delete decks of flashcards. A deck is just a deck, like a deck of cards. The UI & UE is designed to feel like that.

User can use the deck just like a deck of paper flashcards for learning in real life - trying to answer one flashcard at a time, and putting it away at the start, middle or end of the deck, depending on how difficult it was to answer.

If a card was repeatedly easy, user can put it away to "Completed cards" deck. User can also easily reset the deck's cards and do them again. User can always see how many flashcards are left in the deck, and how many are completed.

User can see a list of the decks they've made.

User can first check out and see how one can learn with flashcards, using the introductory, example flashcards deck - "How's 'hello' in 35+ different languages".

The app features intuitive, minimalistic, simple and clear, modal-based UI & UE. It is richly decorated with descriptive icons and often, animations, that make it easy to get used to.

User can accomplish his action-goals in this app very easily, with minimal clicks/steps in between.

The app features authentication and database.

User can register, login, log out and reset password on the server.

After registration, user-created content is automatically saved and persisted on his account on the server.

Upon logging, user's content, i.e decks of flashcards, automatically downloads and displays.

Database requests to the server are minimized. User can add/edit/delete even tens of flashcards with text and images, yet the request to database is always only 1 request that edits one specific deck of flashcards.

The entire UI & UE is designed around minimizing requests to the server. All flashcard editions happen within a given deck edition, and only saving that deck edition causes a database request to be fired.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
