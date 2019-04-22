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

//   saveFormData: function(button) {
//     // All form variables
//     var flag;
//     var store = button.up('editcontact').up('contacts').down('allcontacts').down('gridview').getStore('Contacts');
//     var form = button.up('editcontact').getForm();
//     //   var store = Ext.create('Contacts.store.Contacts');

// //       var item = store.data.items;
// //     //   console.log('item',item[3].data.ddo_contact_id)
// //       var form = button.up('editcontact').getForm();
// //       console.log('form',form);
// //       console.log('form',form._record.data.ddo_contact_id);
      
// //       console.log(item.length);
// //         for(i=0; i<item.length; i++){
// //             if((item[i].data.ddo_contact_id) == (form._record.data.ddo_contact_id)){
// //                 console.log(item[i]);
// //                  flag = true;
// //             }
// //         }
// // alert(flag);
// //true part here 
// //     if(){
        
// //             alert('update');
// //             var record = form.getRecord();
// //             var values = form.getValues(); 
// //             record.set(values);
// //             store.sync({
// //                 success: function (response, opts) {
// //                     Ext.toast('Record successfully Updated');
// //                 },
    
// //                 failure: function (response, opts) {
// //                     Ext.toast('Record is not Updated');
// //                 }
// //             }
// //             );

// //   // console.log(form);
// // }else{
// //     alert('save');
//     if (form.isValid()) {
//         store.add(form.getValues());
//         store.sync({
//             success: function (response, opts) {
//                 Ext.toast('Record successfully submitted');
//             },

//             failure: function (response, opts) {
//                 Ext.toast('Record is not submitted');
//             }
//         });
//     }
//   }
//   }

saveFormData: function(button) {
    // All form variables
    var flag;
    //   var store = Ext.create('Contacts.store.Contacts');
    var store = button.up('editcontact').up('contacts').down('allcontacts').down('gridview').getStore('Contacts');
    console.log(store);
      var viewModel = button.up('contacts').setActiveItem('allcontacts');         
      var activeItem = button.up('contacts').getLayout().getActiveItem().itemId;
      this.redirectTo(activeItem);
      
      var form = button.up('editcontact').getForm();
      alert('update');
                  var record = form.getRecord();
                  // console.log(record);
                  // var values = form.getValues(); 
                  // console.log(values);
                  // record.set(values);
                  // // store.update(record);
                  
                  // store.sync({
                  //     success: function (response, opts) {
                  //         alert('sdf');
                  //         Ext.toast('Record successfully Updated');
                  //     },
          
                  //     failure: function (response, opts) {
                  //         Ext.toast('Record is not Updated');
                  //     },
                  //     params:{
                  //       id: 51
                  //     }
                  // })
                  form.loadRecord(record);
                  form.updateRecord();
                  record.save();

                }
  // console.log(form);

});