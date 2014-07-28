define(function(require) {

    var React = require('react'),
        SearchBox = require('jsx!./components/SearchBox');

    React.renderComponent(SearchBox({}), document.getElementById('main-container'));
});