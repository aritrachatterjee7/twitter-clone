import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, likeUnlikePost } from "../controllers/post.comtroller.js";

const router = express.Router()

router.get("/all" , protectRoute, getAllPosts)
router.get("/likes/:id" , protectRoute, getLikedPosts)
router.get("/following" , protectRoute, getFollowingPosts)
router.get("/following" , protectRoute, getUserPosts)
router.post("/create" , protectRoute, createPost)
router.post("/like/:id" , protectRoute, likeUnlikePost)
router.post("/comment/:id" , protectRoute, commentOnPost)
router.delete("/:id" , protectRoute, deletePost)

export default router