// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary

Book.prototype.getSummary = function() {
    return `${this.title} was witten by ${this.author} in ${this.year}`;
    
};

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};


// Revise  / Change Year

 Book.prototype.revise = function(newYear) {
     this.year = newYear;
     this.revised = true;
 };

//  Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane', '2014');

// console.log(book2.getAge());
// console.log(book1.getAge());

console.log(book2);
book2.revise('2020');
console.log(book2);
