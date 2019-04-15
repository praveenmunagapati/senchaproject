Ext.define('Contacts.store.Contacts', {
    extend:'Ext.data.Store',
    requires:[
        'Contacts.model.Contact'
    ],
    alias:'store.contacts',
    model: 'Contacts.model.Contact',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url:'resources/data/ContactData.json',
        reader: {
            type: 'json',
        }
    }

});