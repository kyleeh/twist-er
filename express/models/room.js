const mongoose = require ('mongoose')


const participant = new mongoose.schema({
    Building: {type:string},
    Capacity: {type: number},
    })