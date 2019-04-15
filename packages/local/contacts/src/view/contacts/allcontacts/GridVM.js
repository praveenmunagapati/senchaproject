Ext.define('Contacts.view.contacts.allcontacts.GridVM', {
    extend:'Ext.app.ViewModel',
    requires:[
        'Contacts.store.Contacts'
    ],
    alias:'viewmodel.gridvm',
    stores: {
        Contacts: {
            type: 'contacts'
        }
    }
});