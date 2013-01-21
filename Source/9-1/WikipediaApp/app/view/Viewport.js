Ext.define('WikipediaApp.view.Viewport', {
    renderTo:Ext.getBody(),
    extend:'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout:{
        type:'border'
    },

    items:[
        {
            xtype:'container',
            region:'north',
            style:{
                background:'white'
            },
            items:[
                {
                    xtype:'image',
                    src:'resources/images/stackoverflow-logo.png',
                    height:83,
                    width:300
                }
            ]
        },
        {
            region:'west',
            xtype:'search',
            width:250
        },
        {
            xtype: 'question',
            itemId: 'question',
            region: 'center'
        }
    ]
});