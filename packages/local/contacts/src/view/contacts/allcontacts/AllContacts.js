Ext.define('Contacts.view.contacts.allcontacts.AllContacts', {
    extend: 'Ext.container.Container',

    requires: [
        'Contacts.view.contacts.allcontacts.Grid',
        'Ext.ux.form.SearchField',
        'Contacts.view.contacts.allcontacts.GridVM',
        'Contacts.view.contacts.allcontacts.FilterForm',
        'Contacts.view.contacts.allcontacts.AllContactsVC',
        'Contacts.view.contacts.allcontacts.Search'
    ],

    controller: 'allcontacts-vc',

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
                    listeners: {
                        click: 'displayEditContacts'
                    }
                }]
            }, {
                xtype: 'toolbar',
                layout: 'hbox',
                padding: '10 0 10 0',
                cls: 'headbar',
                height: 70,
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    cls: 'search-field',
                    height: 40,
                    items:[{
                        xtype: 'button',
                        width: 50,
                        cls: 'search-trigger',
                    },{
                        xtype: 'search',
                        cls: 'search'
                    }],
                   
                }, {
                    xtype: 'button',
                    cls: 'delete-button',
                    disabled: true,
                    text: 'Delete',
                    reference: 'delete-button',
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
                                    inputValue: '1',
                                    checked: false,
                                    reference: 'firstname'
                                }, {
                                    boxLabel: 'Email ID',
                                    inputValue: '2',
                                    reference: 'email'
                                }, {
                                    boxLabel: 'Company Name',
                                    inputValue: '3',
                                    reference: 'company'
                                }, {
                                    boxLabel: 'Title',
                                    inputValue: '4',
                                    reference: 'title'
                                }, {
                                    boxLabel: 'State',
                                    inputValue: '5',
                                    reference: 'state'
                                }, {
                                    boxLabel: 'Mobile Number',
                                    inputValue: '6',
                                    reference: 'mobile'
                                }],
                            }, {
                                xtype: 'button',
                                text: 'Apply',
                                listeners: {
                                    click: 'onApplyColumn'
                                }
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
                                xtype: 'filterform'
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

