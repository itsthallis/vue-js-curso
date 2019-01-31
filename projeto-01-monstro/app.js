new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        win: 'green',
        lost: 'red',
        result: true,
        end: false,
        playerPower: 7,
        monsterPower: 7
    },
    computed:{

    },
    methods:{
        playerAtack(){
            this.monsterLife -= this.playerPower
        },
        monsterAtack(){
            this.playerLife -= this.monsterPower
        }
    },
    watch:{

    }
})