const myLibrary = [];
const lib = document.querySelector(".library");
const addBook = document.querySelector("#add-book");

const modal = document.getElementById("modal-form");
const closeModal = document.querySelector(".close");
const form = document.querySelector("form");

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.toggleRead = function(){
        this.read = this.read ? false : true;
        //console.log(this.read);
    }
    this.info = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages`
    }
    console.log(`${this.title} created`);
}

function addBookToLibrary(book) {
    console.log(book.title + " added to lib");
    myLibrary.unshift(book);
    //console.log(myLibrary);
    displayLibrary();
}
function removeBookFromLibrary(book) { 
    const index = myLibrary.indexOf(book);
    console.log(index);
    if(index>-1){
        console.log(myLibrary[index]);
        myLibrary.splice(index,1);
        console.log(book.title + "removed from lib");
    }
    displayLibrary();
}
function displayLibrary() {
    //display each book on the page
    //create a card for each book in the library
    //lib.textContent="";
    var books = document.getElementsByClassName('book');

    while(books[0]) {
        books[0].parentNode.removeChild(books[0]);
    }
    for (let i=0; i<myLibrary.length ;i++) {
        const newBook = document.createElement("div");
        newBook.classList.add("book");

        const title = document.createElement("h3");
        const author = document.createElement("i");
        const pages = document.createElement("p");
        const status = document.createElement("button");
        status.classList.add("complete");
        const span = document.createElement("span");
        const trash = document.createElement("button");
        trash.classList.add("bin");

        title.textContent=myLibrary[i].title;
        author.textContent=`by ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        
        status.addEventListener('click', ()=> {
            console.log("toggle");
            myLibrary[i].toggleRead();
            displayLibrary();
        })
        if(myLibrary[i].read===true){
            status.textContent = "COMPLETE";
            status.style.backgroundColor = "green";
        } else {
            status.textContent = "INCOMPLETE";
            status.style.backgroundColor = "red";
        }

        trash.innerHTML = `&times;`;
        trash.addEventListener(`click`, ()=>{
            removeBookFromLibrary(myLibrary[i]);
        })

        lib.appendChild(newBook);

        newBook.appendChild(title);
        newBook.appendChild(span);
        span.appendChild(trash);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(status);
        
    }
}

addBook.addEventListener('click', () =>{
    modal.style.display = "block";
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    const readInput = document.querySelector("#read").checked;
    addBookToLibrary(new Book(titleInput,authorInput,pagesInput,readInput));
    form.reset();
    modal.style.display = "none";
})
closeModal.onclick = function() {
    modal.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
const hobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false);
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 353, false);
const maus = new Book("MAUS", "Art Spiegelman", 203, true);
addBookToLibrary(hobbit);
addBookToLibrary(bloodMeridian);
bloodMeridian.toggleRead();
addBookToLibrary(maus);

