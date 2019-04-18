Ext.define('Contacts.view.contacts.allcontacts.Search', {
    extend: 'Ext.form.Panel',

    // requires: [
    //     'Ext.ux.form.SearchField',
    // ],

    xtype: 'search',

    height: 40,

    items: [{
        xtype: 'textfield',
        emptyText: 'Search',
        height: 40,
        padding: 0,
        width: 450,
        listeners: {
            change: 'onSearchfieldChange'
        }
    }],

    iconAlign: 'left',

    initComponent: function () {
        var me = this,
            store = Ext.create('Contacts.store.Contacts'),
            proxy;
        // console.log(store);
        me.callParent(arguments);
        me.on('specialkey', function (f, e) {
            if (e.getKey() == e.ENTER) {
                me.onSearchClick();
            }
        });

        if (!store || !store.isStore) {
            store = me.store = Ext.data.StoreManager.lookup(store);
        }

        // We're going to use filtering
        store.setRemoteFilter(true);

        // Set up the proxy to encode the filter in the simplest way as a name/value pair
        proxy = store.getProxy();
        // console.log(proxy);
        proxy.setFilterParam(me.paramName);
        proxy.encodeFilters = function (filters) {
            return filters[0].getValue();
        }
    },


});