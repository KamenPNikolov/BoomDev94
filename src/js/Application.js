import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    document.getElementById("emojis").innerHTML = "";
    let theDiv = document.getElementById("emojis");
    let modifiedEmojis = this.emojis.map((element)=>{return element+this.banana;});
    for(element in modifiedEmojis){
      let para = document.createElement("p");
      para.textContent= element;
      theDiv.appendChild(para);
    }
  }
}
