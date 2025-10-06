import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import '../src/app.css';

// a tiny ThemeProvider to satisfy components that expect a theme context
function ThemeProvider({ children }){
  return React.createElement(React.Fragment, null, children)
}

// Minimal Router shim to satisfy components that expect a Router wrapper in stories.
// We avoid pulling react-router-dom here to keep Storybook deps minimal.
// use MemoryRouter now that react-router-dom is installed

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // Enable a11y addon options. The addon will show violations in the A11y panel.
  a11y: {
    // run the checks in the panel; you can customize rules if needed
    config: {
      rules: [
        // keep color-contrast enabled (default)
        { id: 'color-contrast', enabled: true },
      ],
    },
    options: {
      // Do not automatically run checks on load for every story (keeps perf)
      checkOnLoad: false,
    },
  },
};

export const tags = ['autodocs'];

export const decorators = [
  (Story) => (
    React.createElement(MemoryRouter, null,
      React.createElement(ThemeProvider, null,
        React.createElement(Story)
      )
    )
  )
]
