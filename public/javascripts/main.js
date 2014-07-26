requirejs.config({
    paths: {
        jquery:'vendor/jquery/dist/jquery.min',
        bootstrap:'vendor/bootstrap/dist/js/bootstrap.min',
        underscore: 'vendor/underscore/underscore',
        react: 'vendor/react/react',
        jsx: 'vendor/jsx/jsx',
        JSXTransformer: 'vendor/jsx/JSXTransformer',
        text: 'vendor/jsx/text',
        select2: 'vendor/select2/select2.min'
    },

    shim: {
        bootstrap: {
            deps:['jquery']
        }
    }
});

requirejs(['bootstrap', 'app/app']);