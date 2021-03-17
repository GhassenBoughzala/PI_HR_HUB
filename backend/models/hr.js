const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hrSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
  profilePhoto: String,
  birthday: Date,
  email: String,
  phoneNumber: Number,
  location: String,
  company: String,
  companyLogo: String,
  companyPhotos: String,

  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "job",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  ],

  tests: [
    {
      type: Schema.Types.ObjectId,
      ref: "test",
    },
  ],

  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "note",
    },
  ],

  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "teams",
    },
  ],
});

module.exports = mongoose.model("HR", hrSchema, "HR");
