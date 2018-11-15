const mongoose = require ('mongoose')

const participant = new mongoose.schema({
LastName: {type: string},
FirstName: {type: string},
Address: {type: number},
Email: {type: string},
TimeStamp: {type: date, default: date.now},
ParticipantType: {type: string},
})