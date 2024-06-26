const express = require('express')
const router = express.Router()
const getChatCompletion = require('../CoverLetterAI').getChatCompletion


router.post('/', async function(req, res){
    
    let body = req.body
    // handleNewPost(body)
    const coverLetter = await getChatCompletion(body)
    res.json({"coverLetter":coverLetter})
});

module.exports = router;

