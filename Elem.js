class Elem {
    #index;
    constructor(szuloElem, index) {
        this.#index=index;
        szuloElem.append(`
            <div class="elem">
                <p></p>
            </div>
        `)

        this.divElem = $("article div:last-child");
        this.pElem = $("article div:last-child p");

        this.divElem.on("click",() => {
            //this.setElem("X")
            //console.log(this.#index);
            this.kattintasTrigger();
        })
        
        }

        //saját esemény létrehozása
        kattintasTrigger(){
            const esemeny = new CustomEvent("elemKattintas", {detail:this});
            //az ablak iratkozik fel az elemKattintasra
            window.dispatchEvent(esemeny);
        };

        setElem(adat){
            this.pElem.html(adat);
        }

        getIndex(){
            return this.#index;
        }
        
}

export default Elem;