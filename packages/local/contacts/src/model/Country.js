Ext.define('Contacts.model.Country',
{
    extend: 'Ext.data.Model',

    fields: [{
      name: 'country',
      type: 'string'
    }],

    proxy: {
            type: 'ajax',
            url:'resources/data/CountryData.json',
            reader: {
              type: 'json',
              rootProperty: 'data'
            }
          }
  });
