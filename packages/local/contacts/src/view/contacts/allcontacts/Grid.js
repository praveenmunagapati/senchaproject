Ext.define('Contacts.view.contacts.allcontacts.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridview',
    requires: [
        'Contacts.view.contacts.allcontacts.GridVM',
        'Contacts.view.contacts.allcontacts.GridVC',
        'Ext.grid.plugin.Exporter',
        'Ext.exporter.text.CSV'
    ],

    controller: 'gridvc',

    
    listeners:{
        selectionchange:'onSelectionChange',
        itemmouseenter: 'onHover'
    },
        
    plugins: 'gridexporter',

    selModel: {
        selType: 'checkboxmodel',
        headerText: 'Select All',
        headerWidth: 100,
        // cls:'select-check-box'
    },
    cls:'column-height',
    columns: [{
                xtype: 'actioncolumn',
                width: 50,
                align:'center',
                iconCls: 'x-fa edit-icon',
                tooltip: 'Edit',
                menuDisabled: true,
                // listeners:{
                //     onF:'onClickEdit'
                // }
        },
    {
        text: 'First Name ',
        dataIndex: 'firstname',
        menuDisabled: true,
        flex: 1  ,
        
        listeners:{

        }
    }, {
        text: 'Email Id ',
        dataIndex: 'email_address',
        flex: 1,
        menuDisabled: true,

    }, {
        text: 'Company Name ',
        dataIndex: 'orgname',
        flex: 1,
        menuDisabled: true
    }, {
        text: 'Title ',
        dataIndex: 'title',
        flex: 1,
        menuDisabled: true
    }, {
        text: 'State ',
        dataIndex: 'state',
        flex: 1,
        menuDisabled: true
    }, {
        text: 'Mobile Number ',
        dataIndex: 'mobile_number',
        flex: 1,
        menuDisabled: true
    }]
});