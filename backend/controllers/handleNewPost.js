const BlogModel = require('../models/Blog')
const AuthorModel = require('../models/Author')
const SeoMetadata = require('../models/SeoMetadata')
const getChatCompletion =require('../BlogAi')

async function handleNewPost(payload){
    //set up jwt and user sign ins for admins
    const author = await AuthorModel.findOne({username:'migijc'})
    const authorId = author._id

    const {title, content, meta_title, meta_description, meta_keywords, isFeatured, categories, status} = payload
    const seoData = new SeoMetadata({meta_title, meta_description, meta_keywords})
    let seoObject = await seoData.save()
    let seoMetadata = seoObject._id
    const datePublished = new Date().getTime()
    const blog = new BlogModel({title, content, categories, status, isFeatured, seoMetadata, authorId, datePublished})
    let createdBlog = blog.save()
    return createdBlog
}

// meta_og_tags, meta_twitter_tags
module.exports = handleNewPost