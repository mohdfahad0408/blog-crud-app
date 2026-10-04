import express from "express"

import { createBlog , getBlog , getBlogById,updateBlog,deleteBlog} from "../controllers/blog.controller.js"

const router=express.Router();

router.post('/',createBlog);
router.get('/',getBlog)
router.get('/:id',getBlogById)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

export default router