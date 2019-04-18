Ext.define('Contacts.view.contacts.allcontacts.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridview',
<<<<<<< HEAD
   requires:[
    'Contacts.view.contacts.allcontacts.GridVM'
   ], 
   selModel:{ 
       type:'checkboxmodel',
       headerText:'Select All',
       headerWidth: 100,
    },
    listeners:{
        rowclick:'onRowClick'
=======
    requires: [
        'Contacts.view.contacts.allcontacts.GridVM',
        'Contacts.view.contacts.allcontacts.GridVC',
        'Ext.grid.plugin.Exporter',
        'Ext.exporter.text.CSV'
    ],

    controller: 'gridvc',

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    plugins: 'gridexporter',

    selModel: {
        selType: 'checkboxmodel',
        headerText: 'Select All',
        headerWidth: 100,
>>>>>>> Completed adding login page and export functionality
    },
    columns: [

         {
        text: 'First Name ',
        dataIndex:'firstname',
        enableColumnHide:true,
        flex: 1,
        menuDisabled: true        
    }, {
        text: 'Email Id ',
        dataIndex:'email_address',
        flex: 1,
        menuDisabled: true 
    }, {
        text: 'Company Name ',
        dataIndex:'orgname',
        flex: 1,
        menuDisabled: true 
    }, {
        text: 'Title ',
        dataIndex:'title',
        flex: 1,
        menuDisabled: true 
    }, {
        text: 'State ',
        dataIndex:'state',
        flex: 1,
        menuDisabled: true 
    }, {
        text: 'Mobile Number ',
        dataIndex:'mobile_number',
        flex: 1,
        menuDisabled: true 
    }]
});