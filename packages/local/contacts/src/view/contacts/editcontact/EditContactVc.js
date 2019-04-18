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
<<<<<<< HEAD

        var form = button.up('editcontact').getForm();

        var formData = form.getFieldValues();

        Ext.Ajax.request({
            url: 'http://ddost.walkingtree.in/contact/',
            method: "POST",
            // type: "json",
            data: formData,

            success: function(response, opts) {
                // var obj = Ext.decode(response.responseText);
                // console.dir(obj);
                Ext.toast('Record successfully submitted');
            },
       
            failure: function(response, opts) {
                Ext.toast('Record is not submitted');
                // console.log('server-side failure with status code ' + response.status);
            }
        });
        // console.log(form);
=======
        var store = Ext.create('Contacts.store.Contacts');
        var form = button.up('editcontact').getForm();
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
>>>>>>> Completed adding login page and export functionality
    }

});