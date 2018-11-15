const mongoose = require ('mongoose')


const participant = new mongoose.schema({
    Title: {type: string},
    Description: {type: string},
    })