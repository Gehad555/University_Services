const express = require("express");

const {verify} = require("jsonwebtoken");

  module.exports = async function (req, res, next) {
    const { id } = req.params;
    
    if (!req.headers.authorization){
      res.status(400).json({message: "Unauthorized"})
      return;
    }
    
    //get the token from authorization header
    const token = req.headers.authorization.split(" ")[1];
    const payload = verify(token, JWTSECRETKEY);
    if (id !== payload.userId)
      return res.status(403).json({ message: "Unauthorized" });
    next()
  };