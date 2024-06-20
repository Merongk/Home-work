const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    if (typeof id !== 'number') {
      console.log("Error: ID must be a number");
      return;
    }
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      }
    }
    console.log("Error: Note not found");
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}

  function logOutNotesFormatted() {
    notes.forEach(note => {
      console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
    });
  }
  
  logOutNotesFormatted();
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry

  function markNoteAsDone(id) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].done = true;
        return;
      }
    }
    console.log("Error: Note not found");
  }
  
  markNoteAsDone(1);
  console.log(notes); // [{content: 'Pick up groceries', id: 1, done: true}, {content: 'Do laundry', id: 2}]
  