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
    var store = button.up('editcontact').up('contacts').down('allcontacts').down('gridview').getStore();
    var form = button.up('editcontact').getForm();
    if (form.isValid()) {
      store.add(form.getValues());
      store.sync({
        success: function (response, opts) {
          Ext.toast('Record successfully submitted');

          // To set routing.. fetching activetab and redirecting it
          button.up('contacts').setActiveItem('allcontacts');
          button.up('contacts').down('allcontacts').getView().refresh();
          var activeItem = button.up('contacts').getLayout().getActiveItem().itemId;
                button.up('contacts').down('allcontacts').getView().redirectTo(activeItem);             
        },
        failure: function (response, opts) {
          Ext.toast('Record is not submitted');
        }
      });
    }},
  /*
  *  Function to cancel the form data and 
  *  move to another tab , 
  *  if record is empty then move to allcontacts tab
  *  if record is not empty then move to addcontact tab
  */
  cancelFormData:function(btn){
    var selectView = btn.up('contacts');
    var store = selectView.down('allcontacts').down('gridview').getStore();
    if(store.data.length > 0 ){
        selectView.setActiveItem('allcontacts');
    }else{
        selectView.setActiveItem('addcontact');
    }
  }

});