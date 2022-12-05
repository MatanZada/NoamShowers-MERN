
const mongoose = require("mongoose");

const SliderItem = new mongoose.Schema(
    {
        img: { type: String, required: true },
        title: { type: String, required: true },
        bg: { type:String, required:true},
        desc:{ type:String, required:true},
        color:{ type:String, required:true}

    },
    { timestamps: true }
);
module.exports = mongoose.model("SliderItem", SliderItem);
