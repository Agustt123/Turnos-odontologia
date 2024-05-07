// restaurantRoutes.ts

import express from "express";
import * as restaurantController from "../../controllers/restaurant";

const router = express.Router();

// Rutas del restaurante
router.get("/restaurant", restaurantController.getRestauranteDetail);

export default router;
