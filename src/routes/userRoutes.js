const e = require("express");
const express = require("express");
const router= express.Router();
const { createUser, getUsers } = require("../controllers/userController");
const bodyParser= require('body-parser');
// const { ClerkExpressWithAuth } =require ('@clerk/clerk-sdk-node')
const authorizeRole= require('../middleware/authorizeRole');
const { requireAuth } =require  ('@clerk/express');
 
router.post("/createUser",bodyParser.raw({ type: 'application/json' }), createUser);
// router.get("/getUsers",  ClerkExpressWithAuth(),getUsers);
// requireAuth({ signInUrl: '/' })
router.get("/getUsers",requireAuth(),authorizeRole('admin'),getUsers);
 
module.exports = router;