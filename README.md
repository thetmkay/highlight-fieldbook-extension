A (chrome) extension which saves web pages and selected/highlighted text to a corresponding fieldbook. Press the extension to activate.

Setup
-----

1. Create a [FieldBook](https://www.fieldbook.com)
2. Create a `Page` and `Element` sheet with the [correct columns](#fieldbook-sheet-columns)
3. Create an API key for the book (click on the arrow next to the fieldbook name and go to `Manage API`)
4. Note down the `username` and `password`. Also note down the `book` id from the `API URL` (i.e. `https://api.fieldbook.com/v1/{BOOK ID}`)
5. Clone/download directory
6. Install gulp globally (`sudo npm install -g gulp`)
7. Go to project root directory in terminal (e.g. `cd highlight-fieldbook-extension`)
8. Install dependencies (`npm install`)
9. Create a config.js in root directory which exports the [appropriate config object](#config-file) (using the `username`, `password` and `book` noted down before.
10. Run `gulp` to generate the files



Install + use
-------------

1. Go to chrome://extensions
2. Enable developer mode
3. Press load unpacked folder
4. Relect the `~/extension` folder
5. Press the extension icon (looks like the sun) to save web page and/or any highlighted text
6. Press undo on the notification to undo the addition


### Fieldbook Sheet Columns

#### Page

Columns:

1. Title
2. URL
3. Domain
4. Path
5. Protocol
6. Meta
7. Element (link to Element sheet)

#### Element

Columns:

1. Highlighted
2. Anchor Path
3. Anchor Offset
4. Focus Path
5. Focus Offset
6. Date
7. Page (link to Page sheet)


### Config File

````javascript
module.exports = {
	fieldbook:{
		username: '{username}',
		password: '{password}',
		book: '{book}'
	}
}
````

Replace anything in curly brackets (e.g. `{username}`) with your specific values.
