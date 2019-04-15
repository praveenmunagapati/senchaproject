Ext.define('Contacts.view.contacts.allcontacts.AllContactsVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.allcontacts-vc',



    onApplyFilter:function(btn){
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
                {property: 'firstname', value: firstName},
                {property: 'orgname', value: company},
         ]);
         console.log(store);
    },

    onClearFilter:function(btn){
        var apply = btn.up('filterform').getForm();
        var value = apply.getFieldValues();
       
        btn.up('filterform').lookupReference('firstname').setValue('');
        btn.up('filterform').lookupReference('company').setValue('');

        var viewModel = btn.up('filterform').up('allcontacts').getViewModel();
        console.log(viewModel.getStore('Contact'));
        var store = viewModel.getStore('Contact');
        
        store.filter([
                {property: 'firstname', value: ''},
                {property: 'orgname', value: ''},
         ]);

    }
    



});