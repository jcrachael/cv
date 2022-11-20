# CV App

Live demo coming soon.

## About

A CV creation app built using React class components. Users can enter their information and the app will generate a CV using their input. Users can edit each section and press `submit` to see their generated CV.

Project sourced from [The Odin Project JavaScript course](https://www.theodinproject.com/lessons/node-path-javascript-cv-application).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pseudocode

A basic user object in state generated from the form's inputs:

```javascript
this.state = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    education: [{ id: 0, school: "", qual: "", date: "" }],
    work: [{ id: 0, name: "", pos: "", start: "", end: "", role: "" }],
  },
};
```

The `Form` component (and its children) needs to be able to modify the values held in this state. The `CVDisplay` component (and its children) needs to be able to access the values within this state to generate the user's CV. The parent component of `Form` and `CVDisplay` (where this state will be stored) is `Main`.

---

Last modified: 20 November 2022
