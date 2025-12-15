const books: IBook[] = [
  {
    id: "123",
    title: "Преступление и наказание",
    description:
      "Роман Фёдора Достоевского, впервые опубликованный в 1866 году в журнале «Русский вестник»",
    authors: "Фёдор Достоевский",
    favorite: true,
    fileCover: "crime-and-punishment.jpg",
    fileName: "crime-and-punishment.pdf",
  },
  {
    id: "124",
    title: "Мастер и Маргарита",
    description:
      "Роман Михаила Булгакова, работа над которым началась в конце 1920-х годов и продолжалась вплоть до смерти писателя",
    authors: "Михаил Булгаков",
    favorite: false,
    fileCover: "master-and-margarita.jpg",
    fileName: "master-and-margarita.pdf",
  },
  {
    id: "125",
    title: "1984",
    description: "Роман-антиутопия Джорджа Оруэлла, изданный в 1949 году",
    authors: "Джордж Оруэлл",
    favorite: true,
    fileCover: "1984.jpg",
    fileName: "1984.pdf",
  },
];

interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
  fileCover: string;
  fileName: string;
}

abstract class BookRepositary {
  abstract createBook(book: IBook): IBook;

  abstract getBookByid(id: string): IBook | null;

  abstract getBooks(): IBook[];

  abstract updateBook(id: string, book: IBook): IBook;

  abstract deleteBook(id: string): void;
}

interface ILibrary {
  collection: IBook[];
}

class Library extends BookRepositary {
  private library: ILibrary;

  constructor(library: ILibrary) {
    super();
    this.library = library;
  }

  createBook(book: IBook): IBook {
    return book;
  }

  getBookByid(id: string): IBook | null {
    return this.library.collection.find((book: IBook) => book.id === id);
  }

  getBooks(): IBook[] {
    return this.library.collection;
  }

  updateBook(id: string, book: IBook): IBook {
    const booksIds = this.library.collection.findIndex(
      (book: IBook) => book.id === id,
    );
    this.library.collection[booksIds] = book;
    return book;
  }

  deleteBook(id: string): IBook[] {
    return this.library.collection.filter((book: IBook) => book.id === id);
  }
}

const library = new Library({ collection: books });

library.createBook({
  id: "124",
  title: "Мастер и Маргарита",
  description:
    "Роман Михаила Булгакова, работа над которым началась в конце 1920-х годов и продолжалась вплоть до смерти писателя",
  authors: "Михаил Булгаков",
  favorite: false,
  fileCover: "master-and-margarita.jpg",
  fileName: "master-and-margarita.pdf",
});

library.getBookByid("124");

library.deleteBook("124");

library.getBooks();

library.updateBook("123", {
  id: "124",
  title: "Мастер и Маргарита updated",
  description:
    "Роман Михаила Булгакова, работа над которым началась в конце 1920-х годов и продолжалась вплоть до смерти писателя",
  authors: "Михаил Булгаков",
  favorite: false,
  fileCover: "master-and-margarita.jpg",
  fileName: "master-and-margarita.pdf",
});
