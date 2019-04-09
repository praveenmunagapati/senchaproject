Ext.define('Contacts.view.contacts.addcontact.AddContact', {
  extend: 'Ext.panel.Panel',

  xtype: 'addcontact',

  layout: {
    type: 'vbox',

    pack: 'center',

    align: 'middle',
  },

  header: {
    title: 'Contacts',
    cls: 'addcontact-header'
  },

  // cls: 'addcontact',

  margin: '0 100px',

  defaults: {
    margin: '10px 0'
  },
  
  items: [
    {
      // cls: 'empty-text',
      html: '<div class="empty-text" style="text-align: center;color: rgb(180, 148, 148);font-family: "Muli", sans-serif;opacity: 0.53;">Your Contact List is empty! <br> Please add the contact by pressing add contact button.</div>'
    },
    {
      cls: 'addcontact-button',
      xtype: 'button',
      text: '+ Add Button',
    }
  ]

});