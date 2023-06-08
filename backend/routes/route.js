import express from "express";
import {allTask,addData, delData, updateData, mongoUpdate} from "../controller/UserController.js"

const router = express.Router();

router.post('/addData',addData);
router.get('/',allTask);
router.put('/update/data/:id',updateData);
router.put('/mongo/update/:id',mongoUpdate)
router.delete('/delData/:id',delData)

export default router;