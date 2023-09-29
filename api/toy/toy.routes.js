import express from 'express'
import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { getToys, getToyById, addToy, updateToy, removeToy} from './toy.controller.js'

export const toyRoutes = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

toyRoutes.get('/', log, getToys)
toyRoutes.get('/:id', getToyById)
toyRoutes.post('/',requireAuth,requireAdmin, addToy)
toyRoutes.put('/',requireAuth,requireAdmin, updateToy)
toyRoutes.delete('/:id',requireAuth,requireAdmin, removeToy)

// router.delete('/:id', requireAuth, requireAdmin, removeCar)

// carRoutes.post('/:id/msg', addCarMsg)
// carRoutes.delete('/:id/msg/:msgId', removeCarMsg)