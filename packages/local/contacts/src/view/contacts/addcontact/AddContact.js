Ext.define('Contacts.view.contacts.addcontact.AddContact', {
  extend: 'Ext.container.Container',

  requires: [
    'Contacts.view.contacts.addcontact.AddContactVC'
  ],

  controller: 'addcontact-vc',

  xtype: 'addcontact',

  layout: 'fit',

  // height: 500,

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

        padding: '150 0',

        items: [{
          padding: '0 0 30 0',
          html: '<div class="empty-text" style="">Your Contact List is empty! <br> Please add the contact by pressing add contact button.</div>'
        }, {
          text: 'Add Contact',
          xtype: 'button',
          ui: 'addcontactbutton',
          glyph: 'f067@FontAwesome',
          listeners: {
            click: 'displayEditContacts'
          }
        }]
      }]
    }]

});