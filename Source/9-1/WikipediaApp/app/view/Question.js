
Ext.define('WikipediaApp.view.Question', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.question',
    autoScroll: true,
    //title: 'Question',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    config: {
        question: null
    },

    tools: [{
        type: 'next',
        disabled: true,
        handler: function() {
            var question = this.up('question').getQuestion();

            if (question) {
                var tab = window.open();
                tab.location = question.get('link');
            }
        },
        tooltip: 'View this question on Stack Overflow'
    }],

    initComponent: function(cfg) {
        Ext.apply(this, cfg);
        this.callParent(arguments);
    },

    tpl: new Ext.XTemplate(
        '<h1>{title}</h1>',
        '<div>{body}</div>',
        '<h1>Answers</h1>',
        '<tpl for="answers">',
            '<div>{body}</div>',
        '</tpl>'
    ),

    setQuestion: function(question) {
        // Set the local variable
        this.question = question;

        // Update the panel content with the body returned from Stack Overflow
        //this.setTitle(this.getQuestion().get('title'));
        console.log(question.getData());
        this.update(question.getData());

        // If we have a non null link, enable the view link tool
        if (question.get('link')) {
            this.down('tool[type=next]').setDisabled(false);
        }
    }
});
