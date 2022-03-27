class NegociacaoController {

    constructor() {
        let get = document.querySelector.bind(document);

        this._inputData = get('#data');
        this._inputQuantidade = get('#quantidade');
        this._inputValor = get('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adicionar(event) {
        event.preventDefault();
        let data = DateHelper.textoParaData(this._inputData.value);

        this._listaNegociacoes.adicionar(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}