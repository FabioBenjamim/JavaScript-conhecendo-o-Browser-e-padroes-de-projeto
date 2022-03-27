class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto) {
        this.verficaDataAnoMesDia(texto);
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static verficaDataAnoMesDia(texto) {
        if(!this.BooleanAnoMesDia(texto))
            throw new Error('Deve estar no fomato yyyy-mm-dd');
    }

    static BooleanAnoMesDia(texto) {
        return /\d{4}-\d{2}-\d{2}/.test(texto);
    }
}