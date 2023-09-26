const mongoose = require('mongoose');
require('dotenv').config()

const BlogSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authorModel'
    },
    seoMetadata: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'seoMetadataModel'
    },
    datePublished:Number,
    title:String,
    content:[String],
    lastUpdated:String,
    // ***categories:[String],
    categories:String,
    // ***categories:[String],
    uniqueURL:String,
    ViewsQuantity: Number,
    relatedPosts: [String],
    Status:String,
    //***isFeatured:Boolean,
    isFeatured:String,
    //***isFeatured:Boolean,
    postLikes: Number,
});

const BlogModel = mongoose.model('BlogModel', BlogSchema);
module.exports = BlogModel;