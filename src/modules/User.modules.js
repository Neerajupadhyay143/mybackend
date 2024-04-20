// import { Schema } from "mongoose";
import mongoose, { Schema, SchemaType } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
    {
        username: {
            type: string,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: string,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullName: {
            type: string,
            require: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: string, //cloud se aayga 
            require: true,

        },
        coverImage: {
            type: string,

        },
        watchHistory: [
            {
                type: Schema.Types.ObjectID,
                ref: 'Video'
            }
        ],
        password: {
            type: String,
            required: [true, "password is required"]
        },
        refreshToken: {
            type: string
        }

    }, {
    timestamps: true
}
)
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     this.password = bcrypt.hash(this.password);
// })

// userSchema.methods.isPasswordChange = async function (password) {
//     return await bcrypt.compare(password, this.password)
// }

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)

})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIR
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        })
}
export const User = mongoose.model("User", userSchema)
