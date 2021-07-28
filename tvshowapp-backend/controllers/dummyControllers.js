exports.dummyController = (req, res) => {
    res.json({ 
        Category: ['Adventure', 'Suspsense','Comedy', 'Medical', 'Romance']
    })
}