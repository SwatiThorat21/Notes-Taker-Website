
let addNoteBtn = document.getElementById('addNote');
addNoteBtn.addEventListener('click', addNote_click);
function addNote_click(){
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    // console.log('addNoteBtn');
    let notes = localStorage.getItem('notes');
    
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    let myObj= {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
   

}

function showNotes (){
 let notes = localStorage.getItem('notes');
 if(notes==null){
    notesObj= [];
}
else{
    notesObj= JSON.parse(notes);
}
 let addNotes = "";
 notesObj.forEach(element => {
     addNotes += `
     <div class="card" id="noteCard" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button class="btn btn-primary">Delete</button>
      </div>`;
 });

}

