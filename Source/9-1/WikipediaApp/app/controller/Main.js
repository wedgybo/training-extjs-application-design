Ext.define('WikipediaApp.controller.Main', {
    extend: 'Ext.app.Controller',

    models: [
        'SearchItem'
    ],

    stores: [
        'SearchItems'
    ],

    views: [
        'Search',
        'Question'
    ],

    refs: [
        {
            ref: 'search',
            selector: 'search'
        },
        {
            ref: 'question',
            selector: '#question'
        },
        {
            ref: 'answers',
            selector: '#answers'
        }
    ],

    init: function() {
        this.control({
            'search': {
                search: this.performSearch,
                itemclick: this.displayItem
            }
        });
    },

    performSearch: function(query) {
        this.getSearchItemsStore().query({search:query});
        this.getSearchItemsStore().load();
    },

    displayItem: function(item) {
        this.getQuestion().setQuestion(item);
    }
});