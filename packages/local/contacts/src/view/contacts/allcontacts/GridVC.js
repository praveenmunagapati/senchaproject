Ext.define('Contacts.view.contacts.allcontacts.GridVC', {
    extend:'Ext.app.ViewController',
    requires:[
       
    ],
    alias:'controller.gridvc',
    

    // Function on checkbox selectionchange
    // Getting the selected array and based on the selected array enabling the delete button
    // Getting the button reference and setting listeners (click event)
    // On button click removing the particular data on store

    onSelectionChange: function (row, selected, eOpts) {
        var deleteButton = row.view.up('allcontacts').lookupReference('delete-button');
        if(selected.length>0){
       deleteButton.setDisabled(false);
       deleteButton.setListeners({
        click: function(button){
            var store = row.view.up('allcontacts').getViewModel().getStore('Contacts');
            console.log(selected[0].data.ddo_contact_id);
            store.remove(selected[0]);
            store.sync();
        }
       });
        }else{
            deleteButton.setDisabled(true);
        }
    }
});