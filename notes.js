const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.blue.bold(title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Error! No note found'))
    }
}

const listNotes = () =>{
    console.log(chalk.blue.bold('Your notes:'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesKept = notes.filter((note) => note.title !== title)
    saveNotes(notesKept)

    if(notesKept.length === notes.length){
        console.log(chalk.red.inverse('No note found!'))
    } else{
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
