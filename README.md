# **Soundifood (Spotifood)**

This project is the Front End project test for iFood Front End Developer position.
It consists in a Single Page Application with two main sections:

- A Filters' section to enable filter Spotify featured playlists or search through current playlists list
- A Playlist list section to display the result of Spotify API

## **How to install**

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. After have them installed, from your terminal run:

PS: Choose to use `yarn` or `npm` command from scripts below

```bash
# Clone this repository
git clone git@github.com:rafaelmaiach/spotifood.git

# Go into the repository and install the application dependencies
cd spotifood
npm install
yarn install
```

## **How to run**

Before running the project, create a file `.env` based on the `.env.template`.
Fill the values for both properties with your Spotify API credentials found on your [Spotify Dashboard](https://developer.spotify.com/dashboard/)
The Client ID and Client Secret are needed as I'm using the API Token to provide access to Spotify API withou the need of User Login

After all setup is configured, run:

```bash
# Go to project root
# Run script for development mode
npm run dev
yarn dev
```

Running this command, look at your terminal, it will show the URL that the project is being served to.

## **How it works**

We have only a single page with two main components:

- **FILTER**: handles Spotify API filter and playlists filtering
- **PLAYLISTS**: shows a list of playlists based on the result of Spotify API call

The project was made without any login needed (that's why the ID and Secret must be provided), to fit the Business Rules for this project, as I describe below, based on the [main repository](https://github.com/ifood/ifood-frontend-test)

## Business Rules

- The page is composed of two components:
  - One list of featured playlists
  - One filter component with API filter fields and one local search text input to filter the playlists by "name".

- The filter component should be used to filter the elements displayed by the list of featured playlists.

- The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (http://www.mocky.io/v2/5a25fade2e0000213aa90776)

- The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (https://developer.spotify.com/web-api/get-list-featured-playlists/)

- Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.

- Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## **Technologies and Architecture**

The main technologies used are:

- [Vue.js](http://vuejs.org/) - A set of React Components.
- [Vuetify](https://vuetifyjs.com/en/) - Material Design UI library for Vue
- [Vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html) - Provides internatinalization

You can check the other dependencies on **_package.json_** file.

## Why did I use Vue.js?

The main reason I opt in for Vue.js instead of React.js is that I found about the opportunity through a LinkedIn post and on the description the team was looking for a Vue.js developer.

The second reason, I think Vue.js has a greater performance and is much simpler than React.js at the sametime it can be more powerful or at least as much as powerful as React.js. And as I read about iFood projects, I see you guys are always looking to deliver the best.

## About the architecture

The project setup was made using my own [Vue.js Boilerplate](https://github.com/rafaelmaiach/vue-boilerplate)

I went with a simple approach to deliver what the Business Rules were asking for, as in a real scenario, usually the business dictates what should be delivered, so I focused on that.

To API calls I used two ways for that, the main one is using Vuex, the state management library for Vue inspired on Flux architecture. The second way is by fetching the filters api using Fetch API from Javascript, as it would be a centralized call and didn't need a state management handling it.

All the texts are being handled by Vue-i18n, as I'm used to use it as I know applications can expand to different users, but, as it was not on business rules, I didn't developed any way of switching the language inside application.

I've followed a code pattern that I'm used to work with, separating the concerns on their respective folders.
