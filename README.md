## Project Requirements
Here's a reminder of the required features. Your crowdfunding project must:

- [ ] Be separated into two distinct projects: an API built using the Django Rest Framework and a website built using React. 
- [ ] Have a cool name, bonus points if it includes a pun and/or missing vowels. See https://namelix.com/ for inspiration. <sup><sup>(Bonus Points are meaningless)</sup></sup>
- [ ] Have a clear target audience.
- [ ] Have user accounts. A user should have at least the following attributes:
  - [ ] Username
  - [ ] Email address
  - [ ] Password
- [ ] Ability to create a “project” to be crowdfunded which will include at least the following attributes:
  - [ ] Title
  - [ ] Owner (a user)
  - [ ] Description
  - [ ] Image
  - [ ] Target amount to fundraise
  - [ ] Whether it is currently open to accepting new supporters or not
  - [ ] When the project was created
- [ ] Ability to “pledge” to a project. A pledge should include at least the following attributes:
  - [ ] An amount
  - [ ] The project the pledge is for
  - [ ] The supporter/user (i.e. who created the pledge)
  - [ ] Whether the pledge is anonymous or not
  - [ ] A comment to go along with the pledge
- [ ] Implement suitable update/delete functionality, e.g. should a project owner be allowed to update a project description?
- [ ] Implement suitable permissions, e.g. who is allowed to delete a pledge?
- [ ] Return the relevant status codes for both successful and unsuccessful requests to the API.
- [ ] Handle failed requests gracefully (e.g. you should have a custom 404 page rather than the default error page).
- [ ] Use Token Authentication.
- [ ] Implement responsive design.

## Additional Notes
No additional libraries or frameworks, other than what we use in class, are allowed unless approved by the Lead Mentor.

Note that while this is a crowdfunding website, actual money transactions are out of scope for this project.

## Submission
To submit, fill out [this Google form](https://forms.gle/34ymxgPhdT8YXDgF6), including a link to your Github repo. Your lead mentor will respond with any feedback they can offer, and you can approach the mentoring team if you would like help to make improvements based on this feedback!

Please include the following in your readme doc:
- [ ] A link to the deployed project.
- [ ] A screenshot of the homepage
- [ ] A screenshot of the project creation page
- [ ] A screenshot of the project creation form
- [ ] A screenshot of a project with pledges
- [ ] A screenshot of the resulting page when an unauthorized user attempts to edit a project (optional, depending on whether or not this functionality makes sense in your app!)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
