/**
 * Required External Modules and Interfaces
 */

 const express = require("express");
 const { getPublicRecruitment, getProtectedRecruitment } = require("./recruiter.service");
 const { checkJwt } = require("../authz/check-jwt");
 
 /**
  * Router Definition
  */
 
 const recruiterRouter = express.Router();
 
 /**
  * Controller Definitions
  */
 
 // GET messages/
 
 recruiterRouter.get("/public-recruitment", (req, res) => {
   const message = getPublicRecruitment();
   res.status(200).send(message);
 });
 
 recruiterRouter.get("/protected-recruitment", checkJwt, (req, res) => {
  try{
    const message = getProtectedRecruitment();
     res.status(200).send(message);
  } catch(error){
    res.status(401).send
  }
 });
 
 module.exports = {
   recruiterRouter,
 };