Ext.define('Contacts.view.contacts.allcontacts.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridview',
   requires:[
    'Contacts.view.contacts.allcontacts.GridVM'
   ],
    columns: [
    {
        xtype: 'checkcolumn',
        text: 'Select All',
        dataIndex:'active',
        flex: 1,
        headerCheckbox: true
    }, {
        text: 'First Name ',
        dataIndex:'firstname',
        enableColumnHide:true,
        flex: 1,
        // reference: 'firstname',
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