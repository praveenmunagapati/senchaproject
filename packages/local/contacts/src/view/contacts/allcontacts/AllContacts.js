Ext.define('Contacts.view.contacts.allcontacts.AllContacts', {
    extend: 'Ext.container.Container',

    requires: [
        'Contacts.view.contacts.allcontacts.Grid',
        'Contacts.view.contacts.allcontacts.GridVM',
        'Contacts.view.contacts.allcontacts.Search'
    ],

    // controller: 'addcontact-vc',

    xtype: 'allcontacts',
    
        viewModel: {
            type: 'gridvm'
        },

    layout: 'fit',

    margin: '10px 100px',

    defaults: {
        margin: '10px 0'
    },

    items: [
        {
            xtype: 'container',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    html: '<div class="headbar">Contacts</div>'
                }, {
                    xtype: 'tbfill'
                }, {
                    cls: 'addcontact-button',
                    xtype: 'button',
                    text: '+ Add Button',
                }]
            }, {
                xtype: 'toolbar',
                layout: 'hbox',
                padding: '10 0 10 0',
                cls: 'headbar',
                height: 70,
                items: [{
                   xtype: 'search'    
                }, {
                    xtype: 'button',
                    cls: 'delete-button',
                    disabled: true,
                    text: 'Delete',
                    margin: '0 10'
                }, {
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    cls: 'export-button',
                    text: 'Export',
                    margin: '0 10'
                }, {
                    text: 'Add Columns',
                    arrowVisible: false,
                    glyph: 'f0db@FontAwesome',
                    iconCls: 'addcolumns',
                    cls: 'addcolumns-button',
                    menu: {
                        items: [
                            {
                                xtype: 'checkboxgroup',
                                defaults: {
                                    fontSize: 14,
                                    padding: '0 0px'
                                },
                                columns: 1,
                                items: [{
                                    boxLabel: 'First Name',
                                    inputValue: 'fname'
                                }, {
                                    boxLabel: 'Company Name',
                                    inputValue: 'cname'
                                }, {
                                    boxLabel: 'Email ID',
                                    inputValue: 'email'
                                }, {
                                    boxLabel: 'Mobile Number',
                                    inputValue: 'mobile'
                                }, {
                                    boxLabel: 'Title',
                                    inputValue: 'title'
                                }, {
                                    boxLabel: 'Date',
                                    inputValue: 'date'
                                }, {
                                    boxLabel: 'State',
                                    inputValue: 'state'
                                }],
                            }, {
                                xtype: 'button',
                                text: 'Apply'
                            }
                        ]
                    }
                }, {
                    text: 'Filter',
                    arrowVisible: false,
                    iconCls: 'filter',
                    // glyph: 'f0db@FontAwesome', 
                    cls: 'filter-button',
                    menu: {
                        items: [
                            {
                                xtype: 'checkboxgroup',
                                defaults: {
                                    width: 120
                                },
                                columns: 1,
                                items: [{
                                    boxLabel: 'First Name',
                                    inputValue: 'fname',
                                    listeners: {
                                        change: function(fname, eOpts){
                                            alert('hi')
                                        }
                                    }
                                }, {
                                    boxLabel: 'Company Name',
                                    inputValue: 'Company'
                                }],
                            }, {
                                xtype: 'container',
                                layout: 'hbox',
                                defaults: {
                                    xtype: 'button'
                                },
                                items: [
                                    {
                                        text: 'Clear'
                                    }, {
                                        text: 'Apply'
                                    }
                                ]
                            }
                        ]
                    }
                }]
            }, {
                xtype: 'gridview',
                bind: {
                    store: '{Contacts}'
                },
            }]
        }]
});

