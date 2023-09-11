/* Data structure */

class Book{
    constructor(
        tittle = 'unknown',
        author = 'unknown',
        pages = 0,
        isRead = false
    ){
        this.tittle = tittle;
        this.author = author;
        this.pages = pages; 
        this.isRead = isRead;
    }
};

class Library{
    constructor(){
        this.books = []
    }
    addBook(newBook){
        if(!isInLibrary(newBook)){
            this.books.push(newBook)
        }
    }
    removeBook(title){
        this.books.filter(book=>book.title !==title)
    }
    getBook(title){
        return this.books.find(book=>book.title === title)
    }
    isInLibrary(newBook){
        this.books.some(book=>book.title === newBook.title)
    }
};

const library = new Library();

// User Interface

const accountBtn = document.getElementById('accountBtn')
const accountModal = document.getElementById('accountModal')
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const errorMsg = document.getElementById('errorMsg')
const overlay = document.getElementById('overlay')
const addBookForm = document.getElementById('addBookForm')
const booksGrid = document.getElementById('booksGrid')
const loggedIn = document.getElementById('loggedIn')
const loggedOut = document.getElementById('loggedOut')
const loadingRing = document.getElementById('loadingRing')

const setupNavbar = (user) =>{
    if(user){const accountBtn = document.getElementById('accountBtn')
    const accountModal = document.getElementById('accountModal')
    const addBookBtn = document.getElementById('addBookBtn')
    const addBookModal = document.getElementById('addBookModal')
    const errorMsg = document.getElementById('errorMsg')
    const overlay = document.getElementById('overlay')
    const addBookForm = document.getElementById('addBookForm')
    const booksGrid = document.getElementById('booksGrid')
    const loggedIn = document.getElementById('loggedIn')
    const loggedOut = document.getElementById('loggedOut')
    const loadingRing = document.getElementById('loadingRing')

    }
}