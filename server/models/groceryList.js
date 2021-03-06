//importing required dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model for a grocery list
const groceryListSchema = new Schema({
  name: {
    type: String,
    required: "Please enter a name for your grocery list"
  },
  date: {
    type: Date,
    default: Date.now
  },
  //referencing the items in the grocery list
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "GroceryItem"
    }
  ]
});

//exporting the model as 'GroceryList'
module.exports = mongoose.model("GroceryList", groceryListSchema);
