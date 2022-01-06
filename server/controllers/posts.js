import PostMessage from "../models/postMessage.js"

///get method to get the data from server.
export const getPosts = async(req, res) => {
    try {
        const postMessage= await PostMessage.find();
        // console.log(postMessage);
        res.status(200).json(postMessage);
    }catch(error) {
        res.status(404).json({message: message.error});
    };
};
//Post method to create the data
export const createPost = async (req, res) => {
    const body =req.body;
   const newPost = new PostMessage(post)
    try{
        await newPost.save();
        res.status(201).json(newPost)
    }catch(error) {
        res.status(401).json({message: message.error})
    };
};


