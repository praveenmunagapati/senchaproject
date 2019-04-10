Ext.define('Contacts.view.contacts.Contacts', {
  extend: 'Ext.container.Container',

  requires: [
    'Contacts.view.contacts.editcontact.EditContact',
    'Contacts.view.contacts.addcontact.AddContact',
    // 'Contacts.view.contacts.ContactsVC',
    'Contacts.view.contacts.ContactsVM'
  ],

  //   controller: 'contacts-vc',
  viewModel: {
    type: 'contacts-vm'
  },

  xtype: 'contacts',
  layout: 'card',

  cls: 'contacts',

  style: 'background-color: rgba(248, 248, 248, 1)',

//   bind: {
//     activeItem: '{activeItem}'
//   },

  items: [
    {
      // html: 'Contacts',
      xtype: 'addcontact',
      itemId: 'addcontact'
    }, {
      xtype: 'editcontact',
      itemId: 'editcontact'
    }, {
      html: 'Display Gridkkkkk',
      itemId: 'gridview'
    }
  ]
});