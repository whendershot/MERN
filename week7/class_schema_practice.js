const mongoose = require("mongoose");

const UserScheam = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [
                true,
                "A given name is required."
            ],
            min: [
                2,
                "Given name must be at least 2 characters."
            ]
        },
        lastName: {
            type: String,
            required: [
                true,
                "A family name is required."
            ],
            min: [
                2,
                "Family name needs to be at least 2 characters."
            ]
        },
        birthdate: {
            type: Date,
            required: [
                true,
                "Please enter a valid date."
            ]
        },
        email: {
            type: String,
            required: [
                true,
                "Pleas enter an email address to reach you at."
            ]
        },
        password: {
            type: String,
            required: [
                true,
                "Please enter a password."
            ], 
            min: [
                8,
                "Password must be at least 8 characters."
            ],
            max: [
                12,
                "Password may be at most 12 characters."
            ]
        }
    },
    {timestamps: true}
);