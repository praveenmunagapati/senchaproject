Ext.define('Contacts.view.contacts.allcontacts.Grid', {
    extend: 'Ext.grid.Panel',

    xtype: 'gridview',

    columns: [{
        xtype: 'checkcolumn',
        text: 'Select All',
        flex: 1,
        headerCheckbox: true
    }, {
        text: 'First Name ',
        flex: 1
    }, {
        text: 'Email Id ',
        flex: 1
    }, {
        text: 'Company Name ',
        flex: 1
    }, {
        text: 'Title ',
        flex: 1
    }, {
        text: 'State ',
        flex: 1
    }, {
        text: 'Mobile Number ',
        flex: 1
    }]
});