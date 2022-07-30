# João Veríssimo - Developer ready to deploy 🚀

This is a step by step guide on how i got this project started. Let's go.

## Phase 1 - Install requirements and get your project running

This section has the objective to help you get everything up and running asap.

First things first:

- Install latest version of Node [here](https://nodejs.org/en/download/)

- Install one terminal of your liking, i use [iTerm](https://iterm2.com/) for MacBook and [Git Bash](https://git-scm.com/downloads) for Windows

- Install Visual Studio Code and some extensions that u might like either be for productivity, linting or just to make things pretty:

  - EsLint, Material Icon Theme, Peacock, Prettier, Tailwind CSS IntelliSense (only if you use tailwind), markdownlint... I'll make a list of all of them organized later on.

- Let's open the terminal and move to where your project will be located.

- Let's run some commands now:

  - `npm install --location=global yarn`

  - `yarn create next-app --typescript`

  - `cd <name you gave your project> && code .`

  - For you lazy people, just change ProjectName: `npm install --location=global yarn && yarn create next-app --typescript && cd <ProjectName> && code .`

- Now, let's connect to a repository:

  - Config your information first: `git config --global user.email <yourEmailHere> && git config --global user.name <yourUserNameHere>`

  - Create your repository and come back to the terminal to run this: `git init && git add . && git commit -m "Add existing project files to Git" && git remote add origin https://github.com/<yourName>/<yourRepositoryName> && git checkout -b main && git push -u -f origin main` - Remember to edit the required fields.

- Now that we got connection up and running, let's see if everything runs smoothly by running: `yarn dev` and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Note: Some telemetry may be enabled by next.JS, if u wanna remove it, just use: `yarn next telemetry disable`

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Packages being used - Learn More

This section is intended to show u and give you the basics of the main packages.

- Tailwind CSS

- Hygen - [Here](https://prog.world/creating-react-components-with-hygen/) you have a good explanation on how to get started using hygen to create template files for your tests and story books.

- React Query

- Typescript

- Next Auth

- Jotai

- Husky

- More to come as we progress with ideas, maybe some package to document everything later.

## Creating and running Tests

Every good developer needs to implement tests of his own code. Here, we do tests first, code second.
That said, this section will show you the taught process to create tests and run them as we progress trough every single line of code.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
