
const express = require("express");
const mongoose = require("mongoose");

const connectDB = async(database_url) =>{
    try {
        await mongoose.connect(database_url);
        console.log("Database Connected");
    } catch (error) {
        console.log("Database is Not Connected");
    }
}

module.exports = connectDB;