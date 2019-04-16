Ext.define('Contacts.view.contacts.allcontacts.FilterForm',{
    extend:'Ext.form.Panel',
    xtype:'filterform',
    requires:[
        'Contacts.view.contacts.allcontacts.AllContactsVC'
    ],
    controller:'allcontacts-vc',
    items:[{
        // xtype: 'checkbox',
        defaults: {
            width: 150
        },
        columns: 1,
        items: [{
            xtype: 'checkboxfield',
            boxLabel: 'First Name',
            listeners: {
                  change: function (checkbox) {
                    textField = checkbox.up('filterform').lookupReference('firstname');
                        if (checkbox.getValue()){
                            textField.show();
                        }else{
                            textField.hide();
                        }

                  }
              
            }
        },
        {
            xtype:'textfield',
            name:'firstname',
            reference: 'firstname',
            hidden:true,
            margin: '0 5 0 10',
        }
        , {
            xtype: 'checkboxfield',
            boxLabel: 'Company',
            listeners: {
                  change: function (checkbox) {
                    textField = checkbox.up('filterform').lookupReference('company');
                        if (checkbox.getValue()){
                            textField.show();
                        }else{
                            textField.hide();
                        }

                  }
              
            }
        },
        {
            xtype:'textfield',
            name:'company',
            reference: 'company',
            hidden: true,
            margin: '0 5 5 10'
        }],
    }, {
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            xtype: 'button'
        },
        items: [
            {
                text: 'Clear',
                listeners:{
                    click:'onClearFilter'
                }
            }, {
                text: 'Apply',
                listeners: {
                    click:'onApplyFilter'
            }
        }
        ]
    }]
})