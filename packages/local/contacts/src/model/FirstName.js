Ext.define('Contacts.model.FristName',
{
    extend: 'Ext.data.Model',

    fields: [{
      name: 'title',
      type: 'string'
    }],

    proxy: {
            type: 'ajax',
            url:'resources/data/FirstNameData.json',
            reader: {
              type: 'json',
              rootProperty: 'data'
            }
          }
  
  });