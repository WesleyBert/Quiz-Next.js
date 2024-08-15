import { embaralhar } from "@/functions/array"
import questoes from "../questoes/questoes"

export default (_req, res) => {
    const ids: number[] = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}