import express from "express";

import {
    UserController , 
    BookContoller ,
    AuthorController ,
    GenreController,
    BookReviewController ,
    CommentOnReviewController ,
    LikeOnReviewController
} from "../../controllers/index.js";

import {BookMiddleware ,Authenticate} from "../../middlewares/index.js";



const router = express.Router();

// user signin and signup
router.post('/signup' ,Authenticate.signUp_Middleware, UserController.signup);
router.get('/isauthenticate' , Authenticate.authenticate , (req ,res) => {
    return res.status(200).json({
        message : "Authenticated",
        success : true
    })
})
router.post('/signin',Authenticate.signIn_middleware, UserController.signin);

// this routes are creating author and fetching author
router.post('/authors' ,AuthorController.create);
router.get('/authors' , AuthorController.getAll);

// this routes are creating genres and fetching genre
router.post('/genres' , GenreController.create );
router.get('/genres' , GenreController.getAll);
router.get('/genres:name' , GenreController.getByName);

// this routes are creating books and fetching books
router.post('/books' , BookMiddleware.bookMiddleware , BookContoller.create);
router.get('/books:id' , BookContoller.get);
router.get('/books' , BookContoller.getAll);

//this routes are creating review on books etc
router.post ('/books/:bookId/reviews' , BookReviewController.create);
router.get('/books/:bookId/reviews' , BookReviewController.bookReviews);
router.put('/books/:bookId/reviews/:reviewId' , BookReviewController.update);
router.delete('/books/:bookId/reviews/:reviewId' , BookReviewController.destory);

//this routes are creating comments on reivews
router.post('/books/:bookId/reviews/:reviewId/comments' , CommentOnReviewController.create);
router.get('/books/:bookId/reviews/:reviewId/comments' , CommentOnReviewController.getAllComments);
router.put('/books/:bookId/reviews/:reviewId/comments/:commentId' , CommentOnReviewController.updateComment);
router.delete('books/:bookId/reviews/:reviewId/comments/:commentId', CommentOnReviewController.destoryCommentOnReview);

//this routes are to like a review
router.post('/books/:bookId/reviews/:reviewId/likes' ,LikeOnReviewController.toggleLike );

export default router;