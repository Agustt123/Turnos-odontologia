// restaurantController.ts

import { Request, Response } from "express";

// Obtener el detalle del restaurante
export const getRestauranteDetail = (req: Request, res: Response): void => {
    res.send("Obtener el detalle del restaurante");
};
