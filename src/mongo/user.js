/* 
Mongoose schema for the user document
*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    updatedBy: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    updatedDate: {
        type: Date,
        default: Date.now()
    },
    enable: {
        type: Number,
        default: 1
    }

});

const Users = mongoose.model('users', userSchema);
export default Users;