import mongoose from 'mongoose';



const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectFile:String,
    likecount: {
        type: Number,
        dafault:0
    },
    createdAt: { 
        type:Date,
        default: new Date()
    }
});

const postMessage = mongoose.model( 'postMessage', postSchema  );
export default postMessage;