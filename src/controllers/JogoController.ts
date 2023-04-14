import { Request, Response } from "express"

export const LandingJogo = async (req: Request, res: Response) => {
    let total = 13
    let id = Math.floor(Math.random() * total + 1)
    res.render("LandingPage", {
        id,
        total
    })
}

export const Jogoopcao = async (req: Request, res: Response) => {
    let id = req.params.id;
    let jogos = []
    let response = await fetch(`https://exportapi.onrender.com/jogo/${id}`)
    let json = await response.json()
    jogos = json
    res.render("Jogo", {
        id,
        jogos
    })
}