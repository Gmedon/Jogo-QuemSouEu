import { Router } from "express";
import { LandingJogo, Jogoopcao } from "../controllers/JogoController"


const router = Router()

router.get("/", LandingJogo)
router.get("/jogo/:id", Jogoopcao)


export default router;