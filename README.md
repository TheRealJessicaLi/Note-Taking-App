# Note-Taking-App
A node.js project; it's a note-taking app that can be run from the terminal or command line.

Before running the program, make sure to first do the below command to install the necessary dependencies:
```
npm install
```

# Commands:
The add command takes in a title and text body and inserts them as a new note in the notes.json file:
```
node app.js add --title=<insert_title> --body=<insert_text>
```

The remove command in a title and removes the corresponding note from the notes.json file (if it exists):
```
node app.js remove --title=<insert_title>
```

This list command out the titles of all your existing notes:
```
node app.js list
```

This read command in a title and reads the corresponding note by printing it to the console (if it exists):
```
node app.js read --title=<insert_title>
```
