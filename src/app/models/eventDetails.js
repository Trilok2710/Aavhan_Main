const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = require('mongodb')

const eventSchema = new Schema({
    _id: { type: ObjectId },
    title: { type: String, required: true },
    description: { type: String, required: true },
    venue: { type: String },
    dateCreated: { type: Date, required: true },
    // sport: { type: String },
    // regUrl: { type: String },
    // instaUrl: { type: String },
    date: { type: String, required: true },
    images: { type: String },
    eventRegistrationIds:[{type:String}],//Redundant since we're storing event ID in registration table
    isGroupEvent:{type:Boolean},


    // interested_count: { type: Number }
  }, { collection: 'eventDetails' });

  const eventDetails = mongoose.model('eventDetails', eventSchema);
  module.exports = eventDetails;
