Ext.define('Contacts.view.contacts.Contacts', {
    extend: 'Ext.container.Container',

    requires: [

        'Contacts.view.contacts.editcontact.EditContact',
        'Contacts.view.contacts.addcontact.AddContact',
        'Contacts.view.contacts.allcontacts.AllContacts',
        'Contacts.view.contacts.ContactsVM',
    ],

    controller: 'contacts-vc',
    viewModel: {
        type: 'contacts-vm'
    },

    xtype: 'contacts',
    layout: 'card',

    cls: 'contacts',

    style: 'background-color: rgba(248, 248, 248, 1)',

    activeItem: 'allcontacts',
    // activeItem: 'editcontact',
    items: [
        {
        xtype: 'addcontact',
        itemId: 'addcontact'
    }, {
        xtype: 'editcontact',
        itemId: 'editcontact'
    }, {
        xtype: 'allcontacts',
        itemId: 'allcontacts'
    }
    ]
});