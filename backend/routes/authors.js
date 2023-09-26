const router = require('express').Router()
const handleNewAuthor  = require('../controllers/handleNewAuthor')

router.post('/', async (req, res)=>{
    const author = await handleNewAuthor(req.body)
    res.send(author)
})

module.exports = router;