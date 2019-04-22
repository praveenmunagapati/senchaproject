Ext.define('Contacts.view.contacts.allcontacts.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'filterform',
    requires: [
        'Contacts.view.contacts.allcontacts.AllContactsVC'
    ],
    controller: 'allcontacts-vc',
    bodyPadding: 10,
    items: [{
        // xtype: 'checkbox',
        defaults: {
            width: 150
        },
        columns: 1,
        items: [{
            xtype: 'checkboxfield',
            
            boxLabel: 'First Name',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            name: 'filter_by_name',
            reference: 'firstname',
            hidden: true,
            margin: '0 5 0 10',
        }
            , {
            xtype: 'checkboxfield',
            boxLabel: 'Company',
            reference:'chkCompany',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'textfield',
            name: 'filter_by_companyname',
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
                cls: 'apply-button',
                width: 70,
                height: 30,
                margin: '0 10',                listeners: {
                    click: 'onClearFilter'
                }
            }, {
                text: 'Apply',
                cls: 'apply-button',
                width: 70,
                height: 30,
                margin: '0 10',                
                listeners: {
                    click: 'onApplyFilter'
                }
            }
        ]
    }]
})