// const express = require('express')
import express from 'express';
import controller from './controller.js'
const router = express.Router()


router.get('/get', controller.get)

// module.exports = router
export default router