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
                    ui: 'addcontactbutton',
                    glyph: 'f067@FontAwesome',
                    xtype: 'button',
                    text: 'Add Contact',
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
                    items: [{
                        xtype: 'button',
                        width: 50,
                        cls: 'search-trigger',
                    }, {
                        xtype: 'search',
                        cls: 'search'
                    }],

                }, {
                    xtype: 'button',
                    ui: 'delete-button',
                    glyph: 'f014@FontAwesome',
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
                    margin: '0 10',
                    handler: 'onGridExport'
                },
                // Add columns block code is below
                {
                    text: 'Add Columns',
                    arrowVisible: false,
                    glyph: 'f0db@FontAwesome',
                    iconCls: 'addcolumns',
                    cls: 'addcolumns-button',
                    // ui: 'addcolumns-button',
                    margin: '0 10 20',
                    menu: {
                        bodyPadding: '0 0 10 0',
                        items: [
                            {
                                xtype: 'checkboxgroup',
                                listeners: {
                                    change: 'onSelectedColumns'
                                },
                                defaults: {
                                    fontSize: 14,
                                    margin: '0 -25 0',
                                    checked: true,
                                },
                                columns: 1,
                                items: [{
                                    boxLabel: 'First Name',
                                    inputValue: '2',
                                    reference: 'firstname'
                                }, {
                                    boxLabel: 'Email ID',
                                    inputValue: '3',
                                    reference: 'email'
                                }, {
                                    boxLabel: 'Company Name',
                                    inputValue: '4',
                                    reference: 'company'
                                }, {
                                    boxLabel: 'Title',
                                    inputValue: '5',
                                    reference: 'title'
                                }, {
                                    boxLabel: 'State',
                                    inputValue: '6',
                                    reference: 'state'
                                }, {
                                    boxLabel: 'Mobile Number',
                                    inputValue: '7',
                                    reference: 'mobile'
                                }],
                            }, {
                                xtype: 'button',
                                text: 'Apply',
                                reference: 'applybutton',
                                cls: 'apply-button',
                                width: 70,
                                height: 30,

                            }
                        ]
                    }
                },
                // Filters block
                {
                    text: 'Filter',
                    arrowVisible: false,
                    margin: '0 0 0 10',
                    iconCls: 'filter',
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
        },
        {
            // This container is to show popup on click of delete button

            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'middle'
            },
            hidden: true,
            cls: 'alert-box',
            draggable: true,
            reference: 'popup',
            floating: true,
            shadow: true,
            toFrontOnShow: true,
            bodyPadding: 20,
            width: 400,
            height: 150,
            renderTo: Ext.getBody(),
            border: 1,

            items: [{
                html: '<div class= "alert-text">Are you sure <br> you want to delete the selected records?</div>',
                padding: '0 0 30 0'
            }, {
                xtype: 'container',
                reference: 'button-holder',
                items: [{
                    xtype: 'button',
                    text: ' NO',
                    align: 'center',
                    reference: 'delete-no',
                    margin: '0 50 0',
                    ui: 'alert-text-button',
                    cls: 'alert-no-text',

                }, {
                    xtype: 'button',
                    text: 'YES',
                    margin: '0 50 0',
                    reference: 'delete-yes',
                    align: 'center',
                    ui: 'alert-text-button',
                    cls: 'alert-no-text'
                }]
            }]

        }]
});

