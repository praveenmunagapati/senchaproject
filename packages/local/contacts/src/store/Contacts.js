Ext.define('Contacts.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'Contacts.model.Contact'
    ],
    alias: 'store.contacts',
    model: 'Contacts.model.Contact',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://ddost.walkingtree.in',
        api: {
            create: 'http://ddost.walkingtree.in/contact',
            read: 'http://ddost.walkingtree.in/contact',
            update: 'http://ddost.walkingtree.in/contacts',
            destroy: 'http://ddost.walkingtree.in/contacts'
        },
        reader: {
            // type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }

});