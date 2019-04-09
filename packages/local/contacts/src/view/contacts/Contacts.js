Ext.define('Contacts.view.contacts.Contacts',{
    extend: 'Ext.panel.Panel',
    
    requires: [
    'Contacts.view.contacts.editcontact.EditContact',
    'Contacts.view.contacts.addcontact.AddContact',
    
    ],
    
    xtype: 'contacts',
    layout: 'card',
    
    cls: 'contacts',
    
    style: 'background-color: rgba(248, 248, 248, 1)',
    activeItem:1,
    items: [
    {
    html: 'Contacts',
    xtype: 'addcontact'
    },{
    xtype:'editcontact'
    },{
    html: 'Display Gridkkkkk',
    
    }
    ]
    });