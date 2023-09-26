const express = require('express')
const router = express.Router()
const getChatCompletion = require('../BlogAi').getChatCompletion
const handleNewPost = require('../controllers/handleNewPost')
const BlogModel = require('../models/Blog')


router.get('/', async (req, res)=>{
    const blogs = await BlogModel.find({})
    console.log(blogs)
    res.json(blogs)
})


router.post('/', async (req, res, next)=>{
    const payload = req.body;
    const newPost = await handleNewPost(payload)
    let post = await newPost.save()


    res.json({post});
})

router.post('/generator/v1', async (req, res)=>{
    const {title, keyPoints} = req.body
    let blogPost = await getChatCompletion({title, keyPoints})
    res.json({'blogPost': blogPost})
})

module.exports = router;