import Elem from "./Elem.js";

class Jatekter {
    #lepes;
    #lista=[];
    constructor(){
        this.#lepes = 0;
        this.#lista =[" ", " ", " ", " ", " ", " ", " ", " ", " "];
        const szuloElem = $("article");
        for (let i = 0; i < 9; i++){
            const elem = new Elem(szuloElem, i);
        }
        //feliratkozunk egy saját eseményre
        $(window).on("elemKattintas", (event) => {
            console.log(event.detail);
            const aktualisElem = event.detail;
            if (this.#lepes % 2 == 0){
                aktualisElem.setElem("X");
                //itt módosítom az aktuális listaelemet:
                this.#lista[aktualisElem.getIndex()]="X";
            } else {
                aktualisElem.setElem("O");
                this.#lista[aktualisElem.getIndex()]="O";
            }
            this.#lepes++;
            this.ellenorzes()
        })
    }

    ellenorzes() {
        //itt ellenőrzöm a győzelmet
    }
}

export default Jatekter;