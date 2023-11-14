const { mongoose } = require("mongoose");



const jobModel = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required:true
      
    },
    salaryPackage: {
        type: String
    },
    skills: {
        type: [String]
    },
    status: {
        type: Boolean,
        default: true
    },
    experienceRequired: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    updatedBy: {
        type: String
    },
    createdAgent: {
        type: String
    },
    updatedAgent: {
        type: String
    },
    createdIP: {
        type: String
    },
    updateIP: {
        type: String
    },


})

const jobModelData = new mongoose.model('jobModel', jobModel)
module.exports = jobModelData