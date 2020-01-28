module.exports = app => {
    app.get('/', function(req, res) {
        res.send('Helloo express!!')
    });
    
    app.get('/api/df_text_query', function(req, res) {
        res.send({'do': 'text-query'})
    });
    
    app.get('/api/event-query', function(req, res) {
        res.send({'do': 'event-query'})
    });
    
}