Ext.define('Contacts.view.contacts.editcontact.EditContactVC', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.editcontact-vc',

  // Function to change the card view in contacts tab
  // Here ViewModel of the contacts page is being fetched from contacts page and
  // Getting the view of that ViewModel
  // Setting active item of that view

  displayGrid: function (button) {
    var viewModel = button.up('contacts').getViewModel();
    // viewModel.data.activeItem='editcontact';

    var contactsView = viewModel.getView();
    contactsView.setActiveItem('allcontacts');
  },

  // Function to Save the data on submitting the form

  saveFormData: function (button) {
    // All form variables
    var flag;
    var store = Ext.create('Contacts.store.Contacts');
    var form = button.up('editcontact').getForm();

    if (form.isValid()) {
      store.add(form.getValues());

      // To set routing.. fetching activetab and redirecting it
      var viewModel = button.up('contacts').setActiveItem('allcontacts');
      var activeItem = button.up('contacts').getLayout().getActiveItem().itemId;
      this.redirectTo(activeItem);

      // Sending request to server
      store.sync({
        success: function (response, opts) {
          button.up('contacts').getView().refresh();
          Ext.toast('Record successfully submitted');
        },

        failure: function (response, opts) {
          Ext.toast('Record is not submitted');
        },
      

      });

      
    }

  }

});