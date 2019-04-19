Ext.define('Contacts.view.contacts.allcontacts.GridVC', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Contacts.model.Contact'
    ],
    alias: 'controller.gridvc',


    // Function on checkbox selectionchange
    // Getting the selected array and based on the selected array enabling the delete button
    // Getting the button reference and setting listeners (click event)
    // On button click removing the particular data on store

    onSelectionChange: function (row, selected, eOpts) {
        var deleteButton = row.view.up('allcontacts').lookupReference('delete-button');
        console.log(selected);
        if (selected) {
            deleteButton.setDisabled(false);
            deleteButton.setListeners({
                click: function (button) {
                    var store = row.view.up('allcontacts').getViewModel().getStore('Contacts');

                    console.log(selected);
                    for (i = 0; i < selected.length; i++) {

                        store.remove(selected);

                        store.sync({
                            success: function (response, opts) {
                                Ext.toast('Record successfully Deleted');
                            },

                            failure: function (response, opts) {
                                Ext.toast('Record is not Deleted');
                            },

                            params: {
                                ddo_contact_id: selected[i].id
                            }
                        });
                    }
                }
            });
        } else {
            deleteButton.setDisabled(true);
        }
    }
});