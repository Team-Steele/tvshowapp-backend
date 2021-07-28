exports.categoryController = (req, res) => {
    res.json({ 
        categoryList: ['HOME', 'FAVORITES', 'EDIT', 'LOG OUT'],
        // categoryList: ['me', 'you', 'them']
    })
}