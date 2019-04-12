Ext.define('Contacts.view.contacts.allcontacts.GridVM', {
    extend:'Ext.app.ViewModel',
    requires:[
        'Contacts.model.ContactData'
    ],
    alias:'viewmodel.gridvm',
    stores: {
        contactDatas: {
            model: 'Contacts.model.ContactData',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url:'resources/data/ContactData.json',
                reader: {
                    type: 'json',
                }
            }

        }
    }
});