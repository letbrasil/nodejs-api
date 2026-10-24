import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
    try {
        const { name, content } = req.body;

        if (!name || !content) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newPost = await Post.create({ name, content });

        res.status(201).json({ message: "Post created successfully!", newPost });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const updatePost = async (req, res) => {
    try {
        // check if body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "No data provided for update!" });
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!post) {
            return res.status(404).json({ message: "Post not found!" });
        }

        res.status(200).json({ message: "Post updated successfully!", post });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found!" });
        }

        res.status(200).json({ message: "Post deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export { createPost, getPosts, updatePost, deletePost };
