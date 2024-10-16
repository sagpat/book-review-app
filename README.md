# Books' Library

#### Please follow the below instructions to run the project.
1. Kindly clone this repo and the backend repo (https://github.com/sagpat/book-review-backend)
2. once this repo is cloned, kindly do `npm i` and `npm run dev`
3. Below is the folder structure for ref:

- ├── public
- │   └── book.svg
- ├── src
-  │   ├── apis
│   │   └── api.tsx  - common API structure to invoke APIs throughout the app.
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── books - all the books component.
│   │   │   ├── BookDetails.tsx - Contains book and its details like reviews, description etc.
│   │   │   ├── BookList.tsx - List of all the books along with some details
│   │   │   └── CreateBook.tsx - Admins can create a book using this component.
│   │   ├── common
│   │   │   ├── Footer.tsx - Footer of app. Not in use.
│   │   │   └── Header.tsx - Header component.
│   ├── data
│   │   └── books.json - Dummy data added before integrating APIs.
│   ├── login
│   │   └── Auth.tsx - Main Login component, which also has user registration form.
│   ├── user
│   │   └── UserReviews.tsx - All the reviews given by users. Can be modify and delete by user.
│   ├── features
│   │   └── auth
│   │       ├── authAPI.tsx - The reducer for the redux app.
│   │       └── authSlice.tsx - these are the action dispatchers.
│   ├── helper
│   │   ├── Date.jsx - date modification function.
│   │   └── ImageResizer.tsx  - image resize function. Not in use
│   ├── hooks
│   │   ├── useAppDispatch.tsx - Not used.
│   │   └── useAppSelector.tsx - For using the store in any component.
│   ├── pages
│   │   ├── Auth.tsx - Main login page
│   │   ├── Books.tsx - Main books page
│   │   └── Layout.tsx - Layout to keep the header in use for all components
│   ├── store
├── App.css
├── index.css
├── main.jsx  - Main file where all the routes are added.
├── .env
├── .gitignore
└── env.d.ts