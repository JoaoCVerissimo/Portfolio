module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic design level?',
        choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory(Optional)',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir } = answers
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`
      const absPath = `components/${path}`
      return { ...answers, path, absPath, category }
    })
  },
}

// Atoms: Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

// Molecules: Grouping atoms together, such as combining a button, input and form label to build functionality.

// Organisms: Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

// Templates: Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

// Pages: An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.
