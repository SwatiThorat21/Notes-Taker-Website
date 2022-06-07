showNotes();
let addNoteBtn = document.getElementById('addNote');
addNoteBtn.addEventListener('click', addNote_click);
function addNote_click() {
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    // console.log('addNoteBtn');
    if (addTitle.value && addTxt.value) {
        let notes = localStorage.getItem('notes');
        let notesObj = [];
        if (!notes) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let myObj = {
            title: addTitle.value,
            text: addTxt.value
        }

        notesObj.push(myObj);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addTitle.value = "";
        addTxt.value = "";
        showNotes();
    }
    else {

        $('#alert-msg').modal();
    }
}

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (!notes) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
     <div class="card" id="noteCard" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button onclick="deleteNotes(${index})" class="btn btn-primary">Delete</button>
      </div>`;
    });
    let notesDiv = document.getElementById('notesDiv');
    notesDiv.innerHTML = html;

}

function deleteNotes(index) {
    let notes = localStorage.getItem('notes');
    if (!notes) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchInput');
search.addEventListener("input", function () {
let searchValue = search.value;
let noteCards = document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
let cardTxt = element.getElementsByTagName('p')[0].innerText;
if(cardTxt.includes(searchValue)){
    element.display.style = "block";
}
else{
    element.display.style = "none";
}
})

    console.log(searchValue);

})

