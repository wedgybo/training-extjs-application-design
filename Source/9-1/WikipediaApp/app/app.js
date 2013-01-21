Ext.application({

    requires: [
        'Ext.data.reader.Xml'
    ],

    controllers: ["Main"],

    name: 'WikipediaApp',

    autoCreateViewport: true,

    launch: function() {
        Ext.Ajax.useDefaultXhrHeader = false;
    }
});
