Ext.define('Contacts.view.contacts.editcontact.EditContactVM',{
    extend: 'Ext.app.ViewModel',

    requires: [
        'Contacts.model.Country',
        // 'Contacts.model.FristName'
    ],

    alias: 'viewmodel.editcontactvm',

    stores: {
        countries: {
            model : 'Contacts.model.Country',
            autoLoad: true
        },
        titles:{
            model: Ext.create('Contacts.model.FristName'),
            autoLoad:true
        }
    }
});