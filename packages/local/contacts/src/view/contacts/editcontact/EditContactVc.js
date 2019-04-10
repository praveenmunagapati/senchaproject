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
    }

});