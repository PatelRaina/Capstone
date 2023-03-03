import { Router } from "express";
const router = Router();

import * as controller from '../controller/controller.js';

router.get('/questions',controller.getQuestions)
router.post('/questions',controller.insertQuestions)

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */
//router.get('/search/getQuestionByCategory',controller.getQuestionByCategory);
        
router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)


export default router;

