//Hi! this is a controller for controlling user hits from api
import PostMessage from "../modals/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find(); //get all the posts from the db
    console.log("Got postMsg from modal :", postMessage);

    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  console.log("user request data in createPost : ", body);

  const userPost = new PostMessage(body);
  console.log("userPost postMessage :", userPost);

  try {
    const savedPost = await userPost.save();

    console.log("users saved post :", savedPost);

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
