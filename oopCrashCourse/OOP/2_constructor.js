// Constructor


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was witten by ${this.author} in ${this.year}`;
    };
}

//  Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane', '2000');

console.log(book1.getSummary());
console.log(book2.getSummary()); 