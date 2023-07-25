<div align="center">
    <img src="./public/repo-logo.png" width="80%" />
    <h1> Clean Architecture Application Sample </h1>
</div>

This repository was created with the intention of providing developers with a
sample clean architecture app for projects using React-TypeScript.

By, `sample` it is meant `basic` or `starter` application
that could be used as a template for kicking-off a project, which can become
an enhanced version of this one driven by the future project's nature and what
it is conceived best for it. However, this sample is expected to be a guide to
perform knowledge sharing with other developers who don't know about this software
architecture.

# Development Tooling

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
[![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)](https://pnpm.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

# Testing Tools:

1. [Vitest](https://vitest.dev/)
2. [Jest DOM](https://testing-library.com/docs/ecosystem-jest-dom/)
3. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

# Documentation Standard

1. [TSDoc](https://tsdoc.org/)

# How to use it

1. Install pnpm globally in your machine. ([See the official docs](https://pnpm.io/installation))
2. Execute `pnpm run ci` to perform the instalation of all dependencies. (Read [this reference](https://betterprogramming.pub/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26) for more details)
3. Open two different tabs in you terminal of preference:
   - Execute `pnpm run start-server` for one (a JSON Server should be up and running)
   - Execute `pnpm run dev` for the other.
4. Open you browser and take a look at the project.

# Requirements for daily development workflow

The development considered to be a candidate of a new version within the project,
should comply with the following criteria:

1. **Do not commit a new version if the development is not completed**. Each
   commit is expected to be associated to a single ticket number, it means that
   **only one commit is allowed per ticket assigned** (unless you have to perform a
   merge with main, this will be the extra commit allowed only)
2. **Each commit under the repo must deliver a stable version of the app**
3. The commit must state the title of the task/subtask that was taken
4. Add a description providing the answers to the following questions:
   - How the development in the branch will add value to the project?
   - Is there any remaining work to be done? Please, provide the ticket number
     that will cover this development

### _**EXCEPTIONS:**_

_If there's a need to merge something that wasn't initially scoped
(unexpected bug, or behaviour) it can be done but, following criteria:_

- _The commit description should state which was the issue that popped up and
  the temporal fix applied_
- _It has to reference the ticket that is created to cover that bug fixing,
  following scalability standards_

# IMPORTANT:

Make usage of the command `pnpm run commit:changes` in order to make a new commit.

When executed this will prompt you to define:

1. Type of change you're commiting (a list will be shown to you)
2. What is the scope of this change? (You can skip it, it is not necessary)
3. A short, imperative tense description of the change (max 70 chars) (Refer to step 3 from the previous list)
4. A longer description of the change (Refer to step 4 from the previous list)
5. Notify if there's a breking change
   - if yes, you'll have to provide details
   - if no, you'll be moved to the next step
6. Notify if this commit affect any open issues
   - if yes, you'll have to add the issue references
   - if no, you'll be moved to the next step
7. The commit will be added to the git history
8. You can push the prevously created commit to the remote repository

# Project's Software Architecture Diagram

<div align="center">
  <img src="./public/Front-End%20Architecture.svg">
</div>
