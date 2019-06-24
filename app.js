const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//'add' command
yargs.command({
    command: 'add',
    describe: 'Adding new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//'remove' command
yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//'list' command
yargs.command({
    command: 'list',
    describe: 'Listing all existing notes',
    handler(){
        notes.listNotes()
    }
})

//'read' command
yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse() 