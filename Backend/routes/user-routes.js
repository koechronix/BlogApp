const express = require('express');

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup); 
router.post("login", login);    

export default router;