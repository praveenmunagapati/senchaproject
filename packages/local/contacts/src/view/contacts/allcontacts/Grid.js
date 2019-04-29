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
  ui: 'gird',
  cls: 'main-grid',
  listeners: {
    selectionchange: 'onDelete',
    itemmouseenter: 'onEditHover',
    
  },

  plugins: [
    'gridexporter', // To download the data on the grid
    'gridfilters' // To add the filters to grid
  ],

  selModel: {
    selType: 'checkboxmodel',
    headerText: 'Select All',
    headerWidth: 100,
    // cls:'select-check-box'
  },
  columns: [{
    // To show the button on hover and perform edit action
    xtype: 'actioncolumn',
    width: 50,
    align: 'center',
    padding: '0 20',
    iconCls: 'x-fa edit-icon',
    tooltip: 'Edit',
    menuDisabled: true,
  }, {
    // Image and Firstname 
    xtype: 'templatecolumn',
    tpl: '<table class="image-display"><tr><td><img style="width:25px;height:25px;" alt="{namefield.contact_profile_pic}" src="resources/images/{namefield.contact_profile_pic}"></td><td style="padding-left: 10px;">{namefield.firstname}</td></tr></table>',
    text: 'First Name',
    dataIndex: 'namefield',
    flex: 2
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