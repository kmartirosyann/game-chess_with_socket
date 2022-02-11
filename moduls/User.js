const {Schema,model} = require('mongoose')

const sxhema = new Schema({
    firstName: { type: String },
    lastName: { type: String},
    email: { type: String, require: true, unique: true },
    password:{ type: String, require: true }
})

module.exports = model('User',sxhema)