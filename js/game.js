var game = new Vue({
    el: '#app',
    data: {
        game: {
            isRunning: false
        },
        player: {
            name: 'YOU',
            health: 100
        },
        monster: {
            name: 'TROLL',
            health: 100
        }
    },
    methods: {
        startGame: function(){
            this.game.isRunning = true
        }
    }
});