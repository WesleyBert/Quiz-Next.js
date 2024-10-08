import QuestaoModel from "@/model/questao";
import questoes from "./questoes";

export default (req: {
    query: any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: QuestaoModel): void; new(): any; }; }; 
}, res: any) => {
    const idSelecionado = +req.query.id

    const questoesSelecionadas = questoes.filter(questao =>
        questao.id === idSelecionado)

    if (questoesSelecionadas.length === 1) {
        const questaoSelecionada = questoesSelecionadas[0].embaralharRespostas()
        const obj = questaoSelecionada.responderCom(0).toObject()
        res.status(200).json(obj)
    } else {
        res.status(404).send()

    }
}