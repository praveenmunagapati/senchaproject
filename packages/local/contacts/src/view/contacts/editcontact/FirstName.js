Ext.define('Contacts.view.contacts.editcontact.FirstName', {
    extend: 'Ext.container.Container',
    requires:[
        'Contacts.view.contacts.editcontact.EditContactVM'
    ],
   xtype:'firstname',
    layout:'vbox',
   cls:'first-name',
    height:100,
    viewModel: {
        type: 'editcontactvm'
      },
    items:[
        {
            xtype:'label',
            html:'First Name<span style="color:red">*</span>',
            margin:'8 0 4 '
        },
        {
            xtype:'container',
            layout:'column',
            items:[

                {
        
                    xtype: 'combobox',
                    // fieldLabel: 'Country',
                    cls:'title-color',
                    name:'gender',
                    columnWidth: 0.15,
                    width:76,
                    displayField: 'title',
                    typeAhead: true,
                    queryMode: 'local',
                    bind:{
                        store: '{titles}'
                    }
                  },
                      {
                    xtype: 'textfield',
                    name: 'firstname',
                    reference: 'firstname',
                    columnWidth: 0.85,
                    width:189

                  }
            ]
        }
      ]
});