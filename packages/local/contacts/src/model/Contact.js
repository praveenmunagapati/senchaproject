Ext.define('Contacts.model.Contact',
    {
        extend: 'Ext.data.Model',

        fields: [
            {
                xtype: 'checkcolumn',

            },
            {
                name: 'firstname',
                type: 'string'
            },
            {
                name: 'email_address',
                type: 'string'
            },
            {
                name: 'orgname',
                type: 'string'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'state',
                type: 'string'
            },
            {
                name: 'mobile_number',
                type: 'string'
            },{
                name: 'ddo_contact_id'
            }
        ]
    });