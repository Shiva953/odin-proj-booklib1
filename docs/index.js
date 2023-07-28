//first, we have to update the array adding a new Book object each time the button is clicked
// then iterate through the array to render it in the dom

let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }  

  let form = document.getElementsByClassName("form-container")[0];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    document.getElementById("myForm").style.display = "none";
    e.preventDefault()
  });

function addBookToLibrary() {
    let status = document.getElementById("status").checked;
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let book = new Book(title.value, author.value, pages.value, status);
    myLibrary.push(book);
    const container = document.getElementById("container");
    const newCard = generateCard(book);
    container.appendChild(newCard);
    console.log(myLibrary)
    //we want to have a pop up form each time we click a button,
    //which adds a new book to myLibrary (onclicking the add button inside form) and then 
    // we take the latest book and call addCardToContainer
    
}

const generateCard = (book) => {
    const card = document.createElement("div");
    card.classList.add("book_card");
  
    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.textContent = book.title;
  
    const authorElement = document.createElement("p");
    authorElement.classList.add("author");
    authorElement.textContent = `By ${book.author}`;
  
    const pagesElement = document.createElement("p");
    pagesElement.classList.add("pages");
    pagesElement.textContent = `${book.pages} pages`;
  
    const statusElement = document.createElement("button");
    statusElement.classList.add("status");
    statusElement.addEventListener('click',()=>{
      book.read = !(book.read);
      statusElement.textContent = book.read ? "Read" : "Not Read Yet";
    })
    statusElement.textContent = book.read ? "Read" : "Not Read Yet";
  
    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(pagesElement);
    card.appendChild(statusElement);
  
    return card;
  };

// add read/not read button toggle
// add remove functionality