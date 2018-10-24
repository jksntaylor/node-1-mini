let books = [];
let id = 0;

module.exports = {
    getBooks (req, res) {
        res.status(200).send(books);
    },

    postBook (req, res) {
        let { title, author } = req.body;
        let book = {
            id: id,
            title: title, 
            author: author
        }
        id++;
        books.push(book);
        res.status(200).send(books);
    },

    update (req, res) {
        let { id } = req.params;
        let { title, author } = req.body;
        for (let i=0;i<books.length;i++) {
            if (books[i].id === Number(id)) {
                books[i] = {
                    id: books[i].id,
                    title: title || books[i].title,
                    author: author || books[i].author
                }
            }
        }
        res.status(200).send(books);
    }
}