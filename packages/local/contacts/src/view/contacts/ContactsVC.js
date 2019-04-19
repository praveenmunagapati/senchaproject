Ext.define('Contacts.view.contacts.ContactsVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts-vc',

    mixins: [
        'Contacts.view.contacts.Routes'
    ],
  
    routes:{
        ':makeactivetab': 'makeActiveTab',
        // 'editcontact': 'makeActiveTabb'
    },

  });