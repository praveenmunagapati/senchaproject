Ext.define('Contacts.view.contacts.addcontact.AddContact', {
  extend: 'Ext.container.Container',

  requires: [
    'Contacts.view.contacts.addcontact.AddContactVC'
  ],

  controller: 'addcontact-vc',

  xtype: 'addcontact',

  layout: 'fit',

  margin: '0 100px',

  defaults: {
    margin: '10px 0'
  },

  items: [
    {
      xtype: 'container',
      items: [{
        xtype: 'component',
        html: '<div class="headbar">Contacts</div>'
      }, {
        xtype: 'container',
        cls: 'addcontact',
        layout: {
          type: 'vbox',

          pack: 'center',

          align: 'middle',
        },

        padding: '100 0',

        items: [{
          padding: '0 0 30 0',
          html: '<div class="empty-text" style="">Your Contact List is empty! <br> Please add the contact by pressing add contact button.</div>'
        }, {
          cls: 'addcontact-button',
          xtype: 'button',
          text: '+ Add Button',

          listeners: {
            click: 'displayEditContacts'
          }
        }]
        // cls: 'empty-text',


      }]
    }]

});