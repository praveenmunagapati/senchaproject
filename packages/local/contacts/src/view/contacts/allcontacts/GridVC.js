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
        if (selected.length>0) {
            deleteButton.setDisabled(false);
            deleteButton.setListeners({


                // Functon to delete the record
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
    },


  
    // Function on grid row focused
    onHover : function( record, event, item, index , eOpts){
      var editButton =  record.up('gridview').down('actioncolumn');
        console.log(event);
      editButton.setListeners({
        click: function(grid, rowIndex, colIndex) {
            // var rec = grid.getStore().getAt(rowIndex);
        grid.up('allcontacts').up('contacts').setActiveItem('editcontact');
        var editContact = grid.up('allcontacts').up('contacts').down('editcontact');
        var form = editContact.getForm().loadRecord(event);
        console.log(form);
        },
      })
       
    }
});
