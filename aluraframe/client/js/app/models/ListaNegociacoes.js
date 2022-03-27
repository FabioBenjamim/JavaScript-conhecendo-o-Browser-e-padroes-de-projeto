class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}