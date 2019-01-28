new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('Olá!')
        },
        teclaPressionada(event){ // Parametro evento é passado por padrão
           this.valor = event.target.value
        }
    }
})