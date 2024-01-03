import express from 'express'
import { apii,apii2 } from "../controllers/fnz.js"
// import { find } from '../Controller/find.js'


const router=express.Router()

// router.get('/find/:id',find)
router.post('/id',apii2)
router.get('/',apii)

export default router;      