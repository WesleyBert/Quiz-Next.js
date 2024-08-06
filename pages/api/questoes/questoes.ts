import QuestaoModel from "@/model/questao"
import RespostaModel from "@/model/resposta";
 
 const questoes: QuestaoModel[] = [
    new QuestaoModel(1,"Quantas pessoas foram removidas do mural da família Black?",[
         RespostaModel.errada('uma pessoa'),
         RespostaModel.errada('duas pessoas'),
         RespostaModel.certo("três pessoas"),
         RespostaModel.errada("Quatro pessoas")

    ],false),
    new QuestaoModel(2,"Qual é o patrono da Cho Chang?",[
        RespostaModel.errada("Uma borboleta"),
        RespostaModel.errada("Um cavalo"),
        RespostaModel.certo("Um cisne"),
        RespostaModel.errada("Um leão" ),
    ],false),
    new QuestaoModel(3,"Quantas pessoas foram removidas do mural da família Black?",[
        RespostaModel.errada('uma pessoa'),
        RespostaModel.errada('duas pessoas'),
        RespostaModel.certo("três pessoas"),
        RespostaModel.errada("Quatro pessoas")
    ],false),
]

export default questoes;












