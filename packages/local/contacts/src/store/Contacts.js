Ext.define('Contacts.store.Contacts',
    {
        extend: 'Ext.data.Store',
        requires: [
            'Contacts.model.ContactData'
        ],
        alias: 'store.contacts',
        model: 'Contacts.model.ContactData',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/data/ContactData.json',
            reader: {
                type: 'json',
            }
        }

    });