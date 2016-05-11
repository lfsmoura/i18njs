require.config({
    shim: {
      "handlebars-intl" : {
        exports: "HandlebarsIntl"
      }
    },
    paths: {
        'hbs/handlebars': 'lib/require-handlebars-plugin/hbs/handlebars',
        "handlebars-intl" : 'lib/handlebars-intl/dist/handlebars-intl.min',
        hbs: 'lib/require-handlebars-plugin/hbs'
    },
    hbs: { // optional
        helpers: false,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});

requirejs(['hbs/handlebars', 'handlebars-intl', 'hbs!templates/main',
        'nls/pt-BR'],
        function(Handlebars, HandlebarsIntl, mainTpl, intlData) {
    console.log(Handlebars);
    HandlebarsIntl.registerWith(Handlebars);

    var context = {
      lang: { name: 'Nome:'},
      name: 'Leo',
      price: 1000,
      date: new Date(),
      numCups: 0,
      nextCup: 1
    };

    var text = mainTpl(context, {
      data: {intl: intlData}
    });

    document.body.innerHTML = text;
});
