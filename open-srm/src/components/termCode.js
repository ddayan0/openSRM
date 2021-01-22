$('body').terminal({
    startmon: function() {
      console.log('works!')
    },
    help: function() {
      this.echo('Type startmon To Start The Monitor')
    }
}, {
    greetings: 'SERVER RESOURCE MONITOR'
});
