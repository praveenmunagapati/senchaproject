Ext.define('Contacts.view.contacts.addcontact.AddContact', {
  extend: 'Ext.panel.Panel',

  xtype: 'addcontact',

  // layout: 'vbox',

  margin: '0 100px',

  defaults: {
    margin: '10px 0'
  },

  items: [
    {
      xtype: 'panel',
      layout: 'hbox',
      // height: 100,
      items: [{
        html: '<div style="padding-top: 10px;height: 50px;font-size: 42px;color: rgba(0, 0, 0, 1);font-family: "Muli", SemiBold;font-weight: bolder;">Contacts</div>'
      }, {
        xtype: 'tbfill'
      }, {
        cls: 'addcontact-button',
        xtype: 'button',
        text: '+ Add Button',
      }]
    },
    {
      xtype: 'panel',
      cls: 'addcontact',
      layout: {
        type: 'vbox',

        pack: 'center',

        align: 'middle',
      },

      padding: '100 0',

      items: [{
        padding: '0 0 30 0',
        html: '<div class="empty-text" style="text-align: center;color: rgb(180, 148, 148);font-family: "Muli", sans-serif;opacity: 0.53;">Your Contact List is empty! <br> Please add the contact by pressing add contact button.</div>'
      }, {
        cls: 'addcontact-button',
        xtype: 'button',
        text: '+ Add Button',
      }]
      // cls: 'empty-text',

    }
  ]

});