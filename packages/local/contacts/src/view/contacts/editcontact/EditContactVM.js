Ext.define('Contacts.view.contacts.editcontact.EditContactVM',{
    extend: 'Ext.app.ViewModel',

    requires: [
        'Contacts.model.Country'
    ],

    alias: 'viewmodel.editcontactvm',

    stores: {
        countries: {
            model : 'Contacts.model.Country',
            autoLoad: true
        }
    }
});