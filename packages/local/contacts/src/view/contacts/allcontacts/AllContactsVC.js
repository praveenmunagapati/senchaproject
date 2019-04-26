Ext.define('Contacts.view.contacts.allcontacts.AllContactsVC', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.allcontacts-vc',


  // Function for Clearing the filter values
  // Getting the values of input fields from filter button and
  // Getting the store and filtering the records baesed on the input values
/**
 * 
 */
  onApplyFilter: function(btn) {
    var apply = btn.up('filterform').getForm();
    var value = apply.getFieldValues();

    var firstName = value.filter_by_name;
    var company = value.filter_by_companyname;
    // console.log(company);
    // console.log(firstName);

    var viewModel = btn.up('filterform').up('allcontacts').getViewModel();
    // console.log(viewModel.getStore('Contacts'));
    var store = viewModel.getStore('Contacts');
    
    // console.log(store);
    // store.setRemoteFilter(true);
    store.filter([{
      property: "firstname",
      value: firstName
    }, {
      property: "orgname",
      value: company
    }]);

  //console.log(store);
  },

  // Function for Clearing the filter values
  // Getting the values of input fields from filter button and
  // Setting its value to null (on click of clear button)
  // Then filtering for null will show whole data

  onClearFilter: function (btn) {
    var apply = btn.up('filterform').getForm();
    var value = apply.getFieldValues();
    
    btn.up('filterform').lookupReference('firstname').setValue('');
    btn.up('filterform').lookupReference('company').setValue('');
    
    var viewModel = btn.up('filterform').up('allcontacts').getViewModel();
    // console.log(viewModel.getStore('Contacts'));
    var store = viewModel.getStore('Contacts');
    btn.up('filterform').lookupReference('chkfirstname').setValue(false);
    btn.up('filterform').lookupReference('chkCompany').setValue(false);
    store.filter([
    { property: 'firstname', value: '' },
    { property: 'orgname', value: '' },
    ]);
    },

  // Function to dynamically Add/Remove the columns of grid 
  // Created two arrays and pushed checked values into one and unchecked into one array
  // Then using those values displayed the grid columns

  onSelectedColumns: function(checkbox) {
    var toHide = [];
    var toShow = [];
    if (checkbox.up('allcontacts').lookupReference('firstname').value) {
      toShow.push(checkbox.up('allcontacts').lookupReference('firstname').inputValue);
    } else {
      toHide.push(checkbox.up('allcontacts').lookupReference('firstname').inputValue);
    }

    if (checkbox.up('allcontacts').lookupReference('company').value) {
      toShow.push(checkbox.up('allcontacts').lookupReference('company').inputValue);
    } else {
      toHide.push(checkbox.up('allcontacts').lookupReference('company').inputValue);
    }


    if (checkbox.up('allcontacts').lookupReference('mobile').value) {
      toShow.push(checkbox.up('allcontacts').lookupReference('mobile').inputValue);
    } else {
      toHide.push(checkbox.up('allcontacts').lookupReference('mobile').inputValue);

    }

    if (checkbox.up('allcontacts').lookupReference('email').value) {
      toShow.push(checkbox.up('allcontacts').lookupReference('email').inputValue);
    } else {
      toHide.push(checkbox.up('allcontacts').lookupReference('email').inputValue);

    }

    if (checkbox.up('allcontacts').lookupReference('title').value) {
      toShow.push(checkbox.up('allcontacts').lookupReference('title').inputValue);
    } else {
      toHide.push(checkbox.up('allcontacts').lookupReference('title').inputValue);

    }

    if (checkbox.up('allcontacts').lookupReference('state').value) {
      toShow.push(checkbox.up('allcontacts').lookupReference('state').inputValue);
    } else {
      toHide.push(checkbox.up('allcontacts').lookupReference('state').inputValue);

    }


    var btn = checkbox.up('allcontacts').lookupReference('applybutton');
    if (toHide.length > 0) {

      btn.setStyle({
        fontWeight: 'bold',
        backgroundColor: 'rgba(49, 169, 80, 1)',
        color: 'white',
      });
      btn.setListeners({
        click: function(btn) {
          for (i = 0; i < toHide.length; i++) {
            btn.up('allcontacts').down('gridview').getColumns()[toHide[i]].setHidden(true);
          }
          ;
        }
      });
    } else {
      btn.setStyle({
        backgroundColor: 'rgba(229, 229, 229, 1)',
      });
    }
    if (toShow.length > 0) {
      btn.setListeners({
        click: function(btn) {
          for (i = 0; i < toShow.length; i++) {
            checkbox.up('allcontacts').down('gridview').getColumns()[toShow[i]].setHidden(false);
          }
          ;
        }
      });
    }
  },





  // Function to change the card view in contacts tab
  // Here ViewModel of the contacts page is being fetched from contacts page and
  // Getting the view of that ViewModel
  // Setting active item of that view

  displayEditContacts: function(button) {
    var viewModel = button.up('contacts').getViewModel();
    // viewModel.data.activeItem='editcontact';

    var contactsView = viewModel.getView();
    contactsView.setActiveItem('editcontact');
    var activeItem = contactsView.getLayout().getActiveItem().itemId;
    this.redirectTo(activeItem);
  },



  // Function to search and filter out records using change event

  onSearchfieldChange: function(search) {
    var firstName = search.value;
    // console.log(firstName, company, mobile);
    var viewModel = search.up('allcontacts').getViewModel();
    var store = viewModel.getStore('Contacts');
    // console.log(viewModel, store);
    store.filter({
      property: 'firstname',
      value: firstName
    });
  },



  // Function to show a textfield when checkbox is clicked
  onChange: function(checkbox) {
    if (checkbox.boxLabel === 'First Name') {
      textField = checkbox.up('filterform').lookupReference('firstname');
    } else {
      textField = checkbox.up('filterform').lookupReference('company');
    }
    if (checkbox.getValue()) {
      textField.show();
    } else {
      textField.hide();
    }
  },



  // Function to export grid data
  onGridExport: function(button) {
    var grid = button.up('allcontacts').down('gridview');
    console.log(grid);
    grid.saveDocumentAs({
      type: 'csv', // What other possible values can go here
      title: 'griddata',
      fileName: 'griddata.csv'
    });
  },




});