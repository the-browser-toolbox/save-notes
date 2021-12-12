let addBtn = document.getElementById('addBtn');

displayNotes();

addBtn.addEventListener('click', function (e) {
  let titleTxt = document.getElementById('title');
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem('notes');
  let titles = localStorage.getItem('titles');
  if (notes == null) {
    notesObj = [];
    titleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titleObj = JSON.parse(titles); //converting json string to object
  }
  titleObj.push(titleTxt.value);
  notesObj.push(addTxt.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  localStorage.setItem('titles', JSON.stringify(titleObj)); //updating the local storage
  addTxt.value = '';
  titleTxt.value = '';
  // console.log(notesObj)
  displayNotes();
});

//Function to display the notes
function displayNotes() {
  let notes = localStorage.getItem('notes');
  let titles = localStorage.getItem('titles');
  if (notes == null) {
    notesObj = [];
    titleObj = [];
  } else {
    notesObj = JSON.parse(notes); //converting json string to object
    titleObj = JSON.parse(titles);
  }
  let html = '';
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard mx-1" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${titleObj[index]}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
  });

  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No notes are present. Type a note in the above section and click on "Create Note" to add your note`;
  }
}

//Function to delete the notes

function deleteNote(index) {
  let notes = localStorage.getItem('notes');
  let titles = localStorage.getItem('titles');
  if (notes == null) {
    notesObj = [];
    titleObj = [];
  } else {
    notesObj = JSON.parse(notes); //converting json string to object
    titleObj = JSON.parse(titles);
  }
  notesObj.splice(index, 1);
  titleObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  localStorage.setItem('titles', JSON.stringify(titleObj));
  displayNotes();
}

//Searching the notes in search bar

let search = document.getElementById('searchTxt');

search.addEventListener('input', function () {

  let inputVal = search.value.toLowerCase();
  // console.log(inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;

    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
