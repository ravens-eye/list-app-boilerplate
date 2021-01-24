//importing required depenedencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model for a grocery item, within a grocery list
const groceryItemSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter the name of your grocery item"
  },
  quantity: {
    type: Number,
    required: "Please enter a quantity for this grocery item"
  }
});

//exporting the model as 'GroceryItem'
module.exports = mongoose.model("GroceryItem", groceryItemSchema);
