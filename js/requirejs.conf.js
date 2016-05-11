require.config({
    paths: {
        hbs: 'js/lib/require-handlebars-plugin/hbs'
    },
    hbs: { // optional
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});
