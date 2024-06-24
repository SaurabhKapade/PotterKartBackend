const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'firstName is required'],
        minlength:[5,'firstName must be atleast 5 character long'],
        maxlength: [20, "First name should be less than or equal to 20 characters"],
        trim:true,
        lowercase:true,
    },
    lastName:{
        type:String,
        required:[true,"Last Name is required"],
        minlength:[5,'firstName must be atleast 5 character long'],
        maxlength: [20, "First name should be less than or equal to 20 characters"],
        trim:true,
        lowercase:true,
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email should be provoided"],
        unique: [true, "Email is already in use"],
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password should be provided"],
        minlength: [6, "Password should be minimum 6 character long"]
    },
    role:{
        type:String,
        enum:['ADMIN','USER'],
        default:'USER'
    }
},{timestamps:true})

userSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,10);
})

const User = mongoose.model('User',userSchema)
module.exports = User