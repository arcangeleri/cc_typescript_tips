const { ccclass, property } = cc._decorator;

enum PlayerType {
    Human,
    Orc,
}

@ccclass
export default class Somthing extends cc.Component {
    @property ({type: cc.Enum(PlayerType)})
    playerType: PlayerType = PlayerType.Human;
}
