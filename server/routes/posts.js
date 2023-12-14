import express from "express";
import { getPosts, createPost } from "../controller/controller.js";

const router = express.Router(); //for routing(navigating) user hits for appropriate function

router.get("/getPosts", getPosts);
router.post("/createPost", createPost);

export default router;
