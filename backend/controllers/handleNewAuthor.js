const AuthorModel = require('../models/Author')

const handleNewAuthor = async (payload) => {
    const {username, password, firstName, lastName, email, bio, website, facebook, twitter, linkedin, } = payload;
    const model = new AuthorModel({firstName, lastName, email, bio, website, facebook, twitter, linkedin, username, password})
    await model.save()

    return model

}

module.exports = handleNewAuthor
