const mongoose = require("mongoose");

//patients schema
let patientSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: Number,
  profileImage: String,
  blood: String,
  height: Number,
  weight: Number,
  skinImage: String,
  report: String,
});

//doctors schema
let doctorSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: Number,
  profileImage: String,
  clinicLocation: String,
  workingFrom: String,
  workingTo: String,
  certificate: String,
  notes: String,
});

//appointments schema
let appointmentSchema = mongoose.Schema({
  status: String,
  date: Date,
  time: String,
  discription: String,
  doctorId: [{ type: mongoose.Schema.Types.ObjectId, ref: "doctors" }],
  patientId: [{ type: mongoose.Schema.Types.ObjectId, ref: "patients" }],
});

//creating models for the schemas
let Patient = mongoose.model("Patient", patientSchema, "patients");
let Doctor = mongoose.model("Doctor", doctorSchema, "doctors");
let Appointment = mongoose.model("Appointment", appointmentSchema, "appoints");

let savePat = (patients) => {};
let saveDoc = (doctors) => {};
let saveApo = (appoints) => {};

module.exports.savePat = savePat;
module.exports.Patient = Patient;

module.exports.saveDoc = saveDoc;
module.exports.Doctor = Doctor;

module.exports.saveApo = saveApo;
module.exports.Appointment = Appointment;