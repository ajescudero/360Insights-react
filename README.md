# React Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Install using:

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

We would like you to write a search component that, given a list of people, filters the people shown to those who match the search query.

We will be using <https://reqres.in/api/users?per_page=12> as the source of people. All the info you need is contained in the “data” array in the JSON payload.

We’re not concerned about CSS/styling - just so long as we can see that the component works and all the specified info is visible – but if you’d really like to add some, that’s fine.

## Requirements

- [x] Each person should be shown in a list with their full name, avatar on the left and their email as a clickable link that should open in the user’s email client
- [x] The list should always be sorted by the person’s last name, then first name
- [x] The search input should be focused when the component is first rendered
- [x] The filtering should be done in ‘real-time’ (i.e. after every keystroke) but only if the user has entered at least one character into the box
- [x] Filtering should be done case-insensitively (so “a” should match “A” and vice-versa)
- [x] If no search query has been entered, all the users should be shown

## Technical limitations

• Unfortunately, the projects you’d be working on are currently using an older version of React, so to replicate that we’d like the component to be a class component – no hooks please
• You can pull in whatever libraries you want – although we don’t think you’ll need any – but the central logic should be implemented by you – so no typeahead/select/combobox libraries please

## TODO

- [ ] Test debt.
- [ ] Add styles using styled components.
- [ ] Move components into separate files.
- [ ] Create git repo.
- [ ] Documentation debt.
