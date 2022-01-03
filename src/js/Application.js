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
    document.getElementById("emojis").innerHTML = "";
    let theDiv = document.getElementById("emojis");
    for(let i = 0;i<emojis.length;i++){
      let para = document.createElement("p");
      para.textContent= emojis[i];
      theDiv.appendChild(para);
    }
  }

  addBananas() {
    document.getElementById("emojis").innerHTML = "";
    let theDiv = document.getElementById("emojis");
    let modifiedEmojis = this.emojis.map((element)=>{return element+this.banana;});
    for(let i = 0;i<modifiedEmojis.length;i++){
      let para = document.createElement("p");
      para.textContent= modifiedEmojis[i];
      theDiv.appendChild(para);
    }
  }
}
