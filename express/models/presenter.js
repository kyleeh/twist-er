const mongoose = require ('mongoose')

const participant = new mongoose.schema({
    LastName: {type: string},
    FirstName: {type: string},
    Occupation: {type: string},
    MainPhone: {type: number},
    MobilePhone: {type: number},
    Email: {type: string},
    })