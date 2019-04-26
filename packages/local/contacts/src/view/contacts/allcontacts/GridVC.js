Ext.define('Contacts.view.contacts.allcontacts.GridVC', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Contacts.model.Contact'
    ],
    alias: 'controller.gridvc',

    /*
    * Function on checkbox selectionchange
    * Getting the selected array and based on the selected array enabling the delete button
    * Getting the button reference and setting listeners (click event)
    * On button click removing the particular data on store
    */
    onDelete: function (row, selected, eOpts) {
        // Getting the delete button

        var deleteButton = row.view.up('allcontacts').lookupReference('delete-button');
        // The selection change event fires when there is a change in checkbox value
        // Checking for the condition that atleast one checkbox is selected or not
        if (selected.length > 0) {
            deleteButton.setDisabled(false); // If not empty .. Enabling deletebutton

        // Setting click eventlistener to the delete button and calling a function to get the pop up container.
        // Which is used to allow user to conform his choice
            deleteButton.setListeners({
                // Functon to delete the record
                click: function (button) {

                    // Getting contacts view and setting some styles to make the background appear as blur
                    row.view.up('allcontacts').up('contacts').setStyle({
                        backgroundColor: 'black',
                        opacity: 0.4,
                        filter: 'blur(0px) grayscale(10%)'
                    });
                    // Getting the store of allcontacts view
                    var store = row.view.up('allcontacts').getViewModel().getStore('Contacts');
                    // Pop Up to confirm whether to delete or not
                    var popup = row.view.up('allcontacts').lookupReference('popup');
                    popup.setHidden(false); // To show popup

                    // Getting the buttons YES/NO
                    var deleteYes = popup.items.items[1].items.items[1];
                    var deleteNo = popup.items.items[1].items.items[0];

                    // Click event listener on click of yes button
                    deleteYes.setListeners({
                        click: function (btn) {
                            // Running a loop to delete the selected number of rows one by one
                            for (i = 0; i < selected.length; i++) {
                                store.remove(selected[i]);
                                store.sync({
                                    success: function (response, opts) {
                                        popup.setHidden(true);
                                        row.view.up('allcontacts').up('contacts').setStyle({
                                            backgroundColor: 'rgb(248, 248, 248)',
                                            opacity: 1,
                                            filter: 'blur(0px) grayscale(0%)'
                                        });
                                        Ext.toast('Record Is Deleted');
                                    },

                                    failure: function (response, opts) {
                                        Ext.toast('Record is not Deleted');
                                        popup.setHidden(true);
                                        row.view.up('allcontacts').up('contacts').setStyle({
                                            backgroundColor: 'rgb(248, 248, 248)',
                                            opacity: 1,
                                            filter: 'blur(0px) grayscale(0%)'
                                        });
                                    },

                                    params: {
                                        ddo_contact_id: selected[i].id
                                    }
                                });
                            }
                        }
                    });


                    deleteNo.setListeners({
                        click: function (btn) {

                            popup.setHidden(true);
                            row.view.up('allcontacts').up('contacts').setStyle({
                                backgroundColor: 'rgb(248, 248, 248)',
                                opacity: 1,
                                filter: 'blur(0px) grayscale(0%)'
                            });

                        }
                    });
                }
            });
        }else{
            deleteButton.setDisabled(true); // If empty .. Enabling deletebutton
        }
    },

    /*
    *  Grid onHover show clickable button ,
    *  while click on edit button page would be redirect to editcontact tab
    *  after that fillup the form and click save button 
    *  while click on save button page redirect to allcontact 
    *  at last show the record on grid.
    */
    onEditHover: function (row, record, item, index, eOpts) {
        var editButton = row.up('gridview').down('actioncolumn');
        editButton.setHidden(false);
        console.log('record', record);
        editButton.setListeners({
            click: function (grid, rowIndex, colIndex) {
                // var rec = grid.getStore().getAt(rowIndex);
                grid.up('allcontacts').up('contacts').down('editcontact').lookupReference('savebutton').setStyle({
                    display: 'none'
                });
                grid.up('allcontacts').up('contacts').down('editcontact').lookupReference('updatebutton').setStyle({
                    display: 'block'
                });
                grid.up('allcontacts').up('contacts').setActiveItem('editcontact');
                var editContact = grid.up('allcontacts').up('contacts').down('editcontact');
                var form = editContact.getForm().loadRecord(record);
                console.log('form', form);
                var updateButton = grid.up('allcontacts').up('contacts').down('editcontact').lookupReference('updatebutton');
                updateButton.setListeners({
                    click: function (btn) {
                        form.updateRecord();
                        var record = form.getRecord();
                        console.log('record', record.data);

                        var store = grid.up('gridview').getStore();
                        console.log('store', store)
                        store.sync({
                            success: function (response, opts) {
                                Ext.toast('Record successfully Updated');
                            },
                            failure: function (response, opts) {
                                Ext.toast('Record is not Updated');
                            },
                        })
                    }
                })
            },
        })
    }
});