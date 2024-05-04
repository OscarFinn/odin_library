const myLibrary = [];
const lib = document.querySelector(".library");
const addBook = document.querySelector("#add-book");

const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.toggleRead = function(){
        this.read = this.read ? false : true;
        console.log(this.read);
    }
    this.info = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages`
    }
    console.log(`${this.title} created`);
}

function addBookToLibrary(book) {
    console.log(book.title + " added to lib");
    myLibrary.push(book);
    console.log(myLibrary);
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
    lib.textContent="";
    for (let i=0; i<myLibrary.length ;i++) {
        const newBook = document.createElement("div");
        newBook.classList.add("book");

        const title = document.createElement("h3");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const status = document.createElement("p");

        title.textContent=myLibrary[i].title;
        author.textContent=`by ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        status.textContent = `${myLibrary[i].read}`;

        lib.appendChild(newBook);

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(status);
        //display each book on the page
        //create a card for each book in the library
    }
}

addBook.addEventListener('click', () =>{
    dialog.showModal();
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    const readInput = document.querySelector("#read").value;
    addBookToLibrary(new Book(titleInput,authorInput,pagesInput,readInput));
    dialog.close();
})
const hobbit = new Book("The Hobbit","J.R.R. Tolkien",295,false);
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 453, false);
const maus = new Book("MAUS", "Art Spiegelman", 203, true);
addBookToLibrary(hobbit);
addBookToLibrary(bloodMeridian);
addBookToLibrary(maus);

