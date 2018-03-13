This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This contains a demo app built , enhanced and extended based on the wonderful react training lessons provided by 
[Maximilian Schwarzmüller on Udemy](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview)


## Technologies / Frameworks used
* React 16
* Redux
* Redux Saga
* Firebase (Db / Authentication)
* CSS Modules
* Build using create-react-app cli
* Added Storybook support - Living Component Preview , Documentation , Visual Tests

## Updates made
* The application now supports two types of snacks - Burger / Pizza (Newly added). Refactoring of the code to accomodate a new product / snack type.
* There is a common reducer and redux saga for the Snack ingredients init , Adding/Removing ingredients, Orderings
* Orders now takes care of handling multiple snack types - Burgers and Pizzas
* Modular components for building Pizza (using base, and toppings as separate components) - on similar lines to the Burger Builder
* While the Burger can have a multiple ingredients added of a specific type, the pizza ingredients can only be added once. Handling for that added.
* Optimized / Reused the same actions/reducers/sagas - via a snackType propery
* Authentication handling for in process pizza or burger order 
* Order Summary now shows snack type as well.
* Awesome StoryBook support

## Demo

* The demo is available [here](https://elated-bhabha-a2e338.netlify.com/)
* StoryBook based Visual Tests, Documentation , preview demo is available [on the gh_pages](https://ers-hcl.github.io/react-snack-app/)

## Setup

* This application is build using the create-react-app cli , so the setup and run instructions are standard

* Live Reload and Development mode for app

```bash
npm run start
```

* Production build for app

```bash
npm run build
```

* Run tests

```bash
npm run test
```

## StoryBook Scripts

* Live Reload and Development mode for storybook

```bash
npm run storybook
```

* Build static version of storybook

```bash
npm run build-storybook
```

* Deploy story book to gh-pages (First build static version of storybook)

```bash
npm run deploy-storybook
```

-----------