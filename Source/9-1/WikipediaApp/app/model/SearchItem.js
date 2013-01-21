Ext.define('WikipediaApp.model.SearchItem', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'title', type: 'string' },
        { name: 'is_answered', type: 'bool' },
        { name: 'link', type: 'string' },
        {
            name: 'tags',
            convert: function (array) {
                return array.toString();
            }
        },
        { name: 'body', type: 'string' },
        {
            name: 'answers', type: 'auto'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'https://api.stackexchange.com/2.1/search',
        extraParams: {
            'site': 'stackoverflow',
            'filter': '!)B.clD9tTt*hOA7M3l)bl5c3Sqzn',
            'tagged': 'extjs'
        },
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

