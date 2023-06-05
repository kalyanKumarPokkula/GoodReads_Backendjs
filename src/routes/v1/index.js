import express from "express";

import {UserController , BookContoller , AuthorController ,GenreController, BookReviewController} from "../../controllers/index.js";
import { authenticate , signIn_middleware , signUp_Middleware } from "../../middlewares/authenticate.js";


const router = express.Router();

router.post('/signup' ,signUp_Middleware, UserController.signup);
router.get('/isauthenticate' , authenticate , (req ,res) => {
    return res.status(200).json({
        message : "Authenticated",
        success : true
    })
})
router.post('/signin',signIn_middleware, UserController.signin);


router.post('/authors' ,AuthorController.create);
router.get('/authors' , AuthorController.getAll);

router.post('/genres' , GenreController.create );
router.get('/genres' , GenreController.getAll);
router.get('/genres:name' , GenreController.getByName);

router.post('/books' , BookContoller.create);
router.get('/books:id' , BookContoller.get);
router.get('/books' , BookContoller.getAll);

router.post ('/books/:id/reviews' , BookReviewController.create);
router.get('/books/:id/reviews' , BookReviewController.bookReviews);
router.put('/books/:id/reviews/:reviewId' , BookReviewController.update);
router.delete('/books/:id/reviews/:reviewId' , BookReviewController.destory)


export default router;