Ext.define('Contacts.view.contacts.allcontacts.AllContactsVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.allcontacts-vc',



    onApplyFilter: function (btn) {
        var apply = btn.up('filterform').getForm();
        var value = apply.getFieldValues();

        var firstName = value.firstname;
        var company = value.company;
        console.log(company);
        console.log(firstName);

        var viewModel = btn.up('filterform').up('allcontacts').getViewModel();
        console.log(viewModel.getStore('Contact'));
        var store = viewModel.getStore('Contact');
        store.filter([
            { property: 'firstname', value: firstName },
            { property: 'orgname', value: company },
        ]);
        console.log(store);
    },

    onClearFilter: function (btn) {
        var apply = btn.up('filterform').getForm();
        var value = apply.getFieldValues();

        btn.up('filterform').lookupReference('firstname').setValue('');
        btn.up('filterform').lookupReference('company').setValue('');

        var viewModel = btn.up('filterform').up('allcontacts').getViewModel();
        console.log(viewModel.getStore('Contact'));
        var store = viewModel.getStore('Contact');

        store.filter([
            { property: 'firstname', value: '' },
            { property: 'orgname', value: '' },
        ]);
    },

    onApplyColumn: function (btn) {
        var toHide = [];
        var toShow = [];
        if (btn.up('allcontacts').lookupReference('firstname').value) {
            toShow.push(btn.up('allcontacts').lookupReference('firstname').inputValue);
        } else {
            toHide.push(btn.up('allcontacts').lookupReference('firstname').inputValue);
        }

        if (btn.up('allcontacts').lookupReference('company').value) {
            toShow.push(btn.up('allcontacts').lookupReference('company').inputValue);
        } else {
            toHide.push(btn.up('allcontacts').lookupReference('company').inputValue);
        }


        if (btn.up('allcontacts').lookupReference('mobile').value) {
            toShow.push(btn.up('allcontacts').lookupReference('mobile').inputValue);
        } else {
            toHide.push(btn.up('allcontacts').lookupReference('mobile').inputValue);

        }

        if (btn.up('allcontacts').lookupReference('email').value) {
            toShow.push(btn.up('allcontacts').lookupReference('email').inputValue);
        } else {
            toHide.push(btn.up('allcontacts').lookupReference('email').inputValue);

        }

        if (btn.up('allcontacts').lookupReference('title').value) {
            toShow.push(btn.up('allcontacts').lookupReference('title').inputValue);
        } else {
            toHide.push(btn.up('allcontacts').lookupReference('title').inputValue);

        }

        if (btn.up('allcontacts').lookupReference('state').value) {
            toShow.push(btn.up('allcontacts').lookupReference('state').inputValue);
        } else {
            toHide.push(btn.up('allcontacts').lookupReference('state').inputValue);

        }
        for (i = 0; i < toHide.length; i++) {
            console.log(btn.up('allcontacts').down('gridview').getColumns()[toHide[i]].setHidden(true));
        }

        for (i = 0; i < toShow.length; i++) {
<<<<<<< HEAD
            console.log(btn.up('allcontacts').down('gridview').getColumns()[toShow[i]].setHidden(false));
=======
            btn.up('allcontacts').down('gridview').getColumns()[toShow[i]].setHidden(false);
        }
    },




    // Function to change the card view in contacts tab
    // Here ViewModel of the contacts page is being fetched from contacts page and
    // Getting the view of that ViewModel
    // Setting active item of that view

    displayEditContacts: function (button) {
        var viewModel = button.up('contacts').getViewModel();
        // viewModel.data.activeItem='editcontact';

        var contactsView = viewModel.getView();
        contactsView.setActiveItem('editcontact');
    },



    // Function to search and filter out records using change event

    onSearchfieldChange: function (search) {
        var firstName = search.value;
        // console.log(firstName, company, mobile);
        var viewModel = search.up('allcontacts').getViewModel();
        var store = viewModel.getStore('Contacts');
        console.log(viewModel, store);
        store.filter([
            { property: 'firstname', value: firstName }
            // {property:'email_address', value:email}
        ]);
    },



    // Function to show a textfield when checkbox is clicked
    onChange: function (checkbox) {
        if (checkbox.boxLabel === 'First Name') {
            textField = checkbox.up('filterform').lookupReference('firstname');
        } else {
            textField = checkbox.up('filterform').lookupReference('company');
>>>>>>> Completed adding login page and export functionality
        }
    }



    // Function to export grid data
    onGridExport: function(button){
        var grid = button.up('allcontacts').down('gridview');
         console.log(grid);
         grid.saveDocumentAs({    
            type: 'csv',  // What other possible values can go here
            title: 'griddata',
            fileName: 'griddata.csv'
   });
    },

});