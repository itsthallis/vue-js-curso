new Vue({
    el: '#desafio',
    data:{
        nome: 'Thallis',
        idade: 22,
        imagem: 'https://i.pinimg.com/originals/c6/a2/89/c6a289648d689ebf779f5c11b2699ab5.jpg'
    },
    methods:{
        RandomNumber() {
            return Math.random()
        }
    }
})