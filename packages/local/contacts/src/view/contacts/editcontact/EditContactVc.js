Ext.define('Contacts.view.contacts.editcontact.EditContactVC', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.editcontact-vc',

  // Function to change the card view in contacts tab
  // Here ViewModel of the contacts page is being fetched from contacts page and
  // Getting the view of that ViewModel
  // Setting active item of that view

  displayGrid: function(button) {
    var viewModel = button.up('contacts').getViewModel();
    // viewModel.data.activeItem='editcontact';

    var contactsView = viewModel.getView();
    contactsView.setActiveItem('allcontacts');
  },

  // Function to Save the data on submitting the form

  saveFormData: function(button) {
    // All form variables
    var flag;
      var store = Ext.create('Contacts.store.Contacts');
     
    
      
    //   console.log(item.length);
        // for(i=0; i<item.length; i++){
        //     if(item[i].data.ddo_contact_id === form._record.data.ddo_contact_id){
        //          flag = true;
        //     }else{
        //         flag = false;
        //     }
        // }
      var form = button.up('editcontact').getForm();
      console.log('form',form);
      console.log('form',form._record.data.ddo_contact_id);
    //   console.log(store.data.items[7]);
      if (form.isValid()) {
          store.add(form.getValues());
          store.sync({
              success: function (response, opts) {
                  Ext.toast('Record successfully submitted');
              },

              failure: function (response, opts) {
                  Ext.toast('Record is not submitted');
              }
          });
      }
  // console.log(form);
}

});