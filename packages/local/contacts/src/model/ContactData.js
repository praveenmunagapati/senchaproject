Ext.define('Contacts.model.ContactData',
  {
    extend: 'Ext.data.Model',

    fields: [
    {
        xtype: 'checkcolumn',
        
    },
    {
      name: 'firstname',
      type: 'string'
    },
    {
      name:'email',
      type:'string'
    },
    {
        name:'companyName',
        type:'string'
    },
    {
        name:'title',
        type:'string'
    },
    {
        name:'state',
        type:'string'
    },
    {
        name:'mobile',
        type:'string'
    }
]
});