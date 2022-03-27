class NegociacaoController {

    constructor() {
        let get = document.querySelector.bind(document);

        this._inputData = get('#data');
        this._inputQuantidade = get('#quantidade');
        this._inputValor = get('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView(get('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(get('#mensagemView'))
        this._mensagemView.update(this._mensagem);
    }

    adicionar(event) {
        event.preventDefault();
        this._listaNegociacoes.adicionar(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso.';
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
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