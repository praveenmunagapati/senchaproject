Ext.define('Contacts.model.Contact',
    {
        extend: 'Ext.data.Model',

        // idProperty: 'ddo_contact_id',

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
            }, {
                name: 'id',
                mapping: 'ddo_contact_id'
            }, {
                name: 'contact_profile_pic',
            }, {
                name: 'namefield',
                calculate: function (data) {

                    return data;
                }
            }
        ]
    });
