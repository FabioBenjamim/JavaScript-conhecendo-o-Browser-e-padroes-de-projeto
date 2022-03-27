class NegociacaoController {

    constructor() {
        let get = document.querySelector.bind(document);

        this._inputData = get('#data');
        this._inputQuantidade = get('#quantidade');
        this._inputValor = get('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView(get('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adicionar(event) {
        event.preventDefault();

        this._listaNegociacoes.adicionar(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
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