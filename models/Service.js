const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ServiceSchema = new Schema({
    serviceName: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    attachments: {
        type: Array,
        default: []
    },
    serviceCategory: {
        type: String,
        default: ""
    },
    eventCategory: {
        type: Array,
        default: []
    },
    availability: {
        start: {
            type: Date,
            default: new Date(),
        },
        end: {
            type: Date,
            default: new Date(),
        },
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: '',
    },
}, {
    timestamps: true,
    versionKey: false
});

const Service = model('Service', ServiceSchema);

module.exports = Service;
