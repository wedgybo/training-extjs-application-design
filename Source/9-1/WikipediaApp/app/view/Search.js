Ext.define("WikipediaApp.view.Search", {
    extend: 'Ext.panel.Panel',
    // Create a xtype for this component
    alias: 'widget.search',

    config: {
        query: ''
    },

    requires: [
        'Ext.view.View',
        'Ext.form.field.Text'
    ],

    initComponent: function() {
        /*
         * Not required but it is nice to document
         * the events you add to any component
         */
        this.addEvents([
            'search',
            'querychange'
        ]);

        this.callParent(arguments);
    },

    tbar: [
        {
            xtype: 'textfield',
            emptyText: 'Query...',
            flex: 1,
            listeners: {
                change: {
                    fn: function(field) {
                        var search = field.up('search');
                        search.setQuery(field.getValue());
                        search.fireEvent('querychange', search.getQuery(), search);
                    }
                }
            }
        },
        {
            text: 'Search',
            handler: function(button) {
                var search = button.up('search');
                search.fireEvent('search', search.getQuery(), search);
            }
        }
    ],

    items: [{
        xtype: 'dataview',
        store: 'SearchItems',
        itemSelector: 'div.thumb-wrap',
        tpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div style="margin-bottom: 10px;" class="thumb-wrap">{title}',
                '<span>{tags}</span>',
                '</div>',
            '</tpl>'
        ),
        listeners: {
            itemclick: {
                fn: function(cmp, item) {
                    cmp.up('search').fireEvent('itemclick', item);
                }
            }
        }
    }]
});