Ext.define('Contacts.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'Contacts.model.Contact'
    ],
    alias: 'store.contacts',
    model: 'Contacts.model.Contact',
    autoLoad: true,
    remoteFilter: true,
    // autoSync:true,
    proxy: {
        type: 'rest',
        url: 'http://ddost.walkingtree.tech',
        api: {
            create: 'http://ddost.walkingtree.tech/contact',
            read: 'http://ddost.walkingtree.tech/contact',
            update: 'http://ddost.walkingtree.tech/contact',
            destroy: 'http://ddost.walkingtree.tech/contact'
        },
        reader: {
            // type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        },
        appendId:false,
        paramsAsJson: true 
    }

});