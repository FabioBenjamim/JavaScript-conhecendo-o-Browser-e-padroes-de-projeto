class NegociacaoController {

    constructor() {
        let get = document.querySelector.bind(document);

        this._inputData = get('#data');
        this._inputQuantidade = get('#quantidade');
        this._inputValor = get('#valor');
        //this.tbody = get('table tbody');
        //Object.freeze(this);
    }

    adicionar(event) {
        event.preventDefault();

        //let data = new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2));

        let negociacao = new Negociacao(...
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao.data);

    }
    

/*
document.querySelector('.form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    var tr = document.createElement('tr');
    
    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr)

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0.0;

    campos[0].focus();

});
*/

}