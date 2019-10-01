# Project 1 - Peer Code Review Checklist

### Developer: Beth Smith
### Reviewer: Salvatore Argentieri
---

## Minimum Requirements

### Features
- [x ] Game has at least the minimum set of features required to play.
- [x ] All minimum features are working.
- [x ] As applicable, does the game handle "winning", "losing" and "ties"?

### Code Style & Best Practices
- [x ] No "dead" code (code that is commented out code or is never executed) exists.
- [x ] There are separate CSS & JS files put in appropriate sub-folders.

#### JavaScript
- [x ] Function names accurately express their purpose (usually verbs).
- [x ] Variable names are clear and expressive (usually nouns).
- [x ] Identifiers used for variables and functions (except constructors) use camel-casing.
- [x ] Constructor functions use upper-camel-casing.
- [x ] JavaScript code blocks, nested functions, etc., are consistently indented using 2 or 4 spaces per level of indentation.
- [x ] Vertical white spacing is consistent.
- [x ] Use of single vs. double quotes for strings is consistent (lean toward single quotes).
- [x ] No leftover logging to the console.

#### HTML Markup
- [x ] The HTML is properly indented according to its nesting level.
- [x ] Lower-case is used for all tag names, attributes, classes & ids.
- [x ] Kebob-casing is used for names of classes, ids, and custom attributes (if any).
- [x ] No spaces exist between HTML attributes, the equal sign and the value.
- [x ] HTML attributes use double quotes.
- [x ] Inline styling is not used.

#### CSS
- [x ] The CSS is properly indented.
- [x ] Vertical white space is consistent.
- [x ] There is an opening curly brace after the selector(s) and a closing brace on the last line by itself.
- [x ] CSS properties contain a space after, but not before, the : character.

### Documentation & Deployment
- [x ] Game is deployed online (GH Pages).
- [x ] Repo contains a _readme.md_
- [x ] _readme_ has a _Description_ section for the game.
- [x ] _readme_ has a _Technologies Used_ section.
- [x ] _readme_ has a _Getting Started_ section which includes a link to the deployed game.
- [x ] _readme_ has an _Next Steps_ section to explain unsolved problems and future plans.

## Other Conventions & Best Practices

### Files
- [x ] File names are lowercased and use either snake or kebob-casing.

### JavaScript
- [x ] Functions rarely contain more than 10 lines and do so for good reason.
- [x ] Code is DRY by ensuring there are not sections of similar code.  Repetitive code is put into more general purpose functions defined with parameters as necessary to differentiate their behavior.
- [x ] The main script file is commented into major sections for:
- Application-wide Variables & cached DOM Element Variables
- Constants (all upper-case identifier is used by convention)
- Event Listeners
- Functions
- [x ] Application-wide scoped variables are declared at the top of the main script file.
- [x ] An _initialize_ or similar function is used to "reset" the variables of the game to their starting state.  Variables are not also being initialized when defined.

### HTML
- [x ] HTML passes [w3c validation](https://validator.w3.org/)

### CSS
- [x ] CSS is kept DRY by breaking out common CSS properties into separate classes.
