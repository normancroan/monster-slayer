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
            prefixes: ['Cryptic','Devilish','Cunning','Six-Eyed','Five-Eyed','Fiendish','Rabid','Raging','Horned','Quilled','Ferocious','Shadowy'],
            types: ['Troll','Orc','Rat','Skeleton','Huntress','Zombie','Lizard','Bear','Bat','Owl'],
            name: 'UNKNOWN MONSTER',
            health: 100
        }
    },
    methods: {
        startGame: function(){
            this.game.isRunning = true;
            this.player.health = 100;
            this.monster.health = 100;
            this.spawnMonster();
        },
        spawnMonster: function(){
            this.monster.name = (this.monster.prefixes[Math.floor(Math.random() * this.monster.prefixes.length)]) + ' ' + (this.monster.types[Math.floor(Math.random() * this.monster.types.length)]);
        }
    }
});