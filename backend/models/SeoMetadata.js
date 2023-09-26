const mongoose = require('mongoose');

// Define the SEO metadata schema
const seoMetadataSchema = new mongoose.Schema({
  meta_title: {
    type: String,
    required: true,
  },
  meta_description: {
    type: String,
    required: true,
  },
  canonicalUrl: String,
  // meta_og_tags: {
  //   ogTitle: String,
  //   ogDescription: String,
  //   ogImage: String,
  // },
  // meta_twitter_tags: {
  //   twitterTitle: String,
  //   twitterDescription: String,
  //   twitterImage: String,
  // },
});

// Create the SEO metadata model
const SeoMetadataModel = mongoose.model('SeoMetadataModel', seoMetadataSchema);

module.exports = SeoMetadataModel;
