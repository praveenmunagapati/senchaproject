Ext.define('Contacts.view.contacts.addcontact.AddContactVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addcontact-vc',

    /**
     * Function to change the card view in contacts tab
     * Here ViewModel of the contacts page is being fetched from contacts page and
     * Getting the view of that ViewModel
     * Setting active item of that view
     */

    displayEditContacts: function (button) {
        var viewModel = button.up('contacts').getViewModel();
        // viewModel.data.activeItem='editcontact';

        var contactsView = viewModel.getView();
        contactsView.setActiveItem('editcontact');
        var activeItem = contactsView.getLayout().getActiveItem().itemId;
        this.redirectTo(activeItem);  
    }

});