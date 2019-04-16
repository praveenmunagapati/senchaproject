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
            toHide.push(btn.up('allcontacts').lookupReference('firstname').inputValue);
        } else {
            toShow.push(btn.up('allcontacts').lookupReference('firstname').inputValue);
        }

        if (btn.up('allcontacts').lookupReference('company').value) {
            toHide.push(btn.up('allcontacts').lookupReference('company').inputValue);
        } else {
            toShow.push(btn.up('allcontacts').lookupReference('company').inputValue);
        }


        if (btn.up('allcontacts').lookupReference('mobile').value) {
            toHide.push(btn.up('allcontacts').lookupReference('mobile').inputValue);
        } else {
            toShow.push(btn.up('allcontacts').lookupReference('mobile').inputValue);

        }

        if (btn.up('allcontacts').lookupReference('email').value) {
            toHide.push(btn.up('allcontacts').lookupReference('email').inputValue);
        } else {
            toShow.push(btn.up('allcontacts').lookupReference('email').inputValue);

        }

        if (btn.up('allcontacts').lookupReference('title').value) {
            toHide.push(btn.up('allcontacts').lookupReference('title').inputValue);
        } else {
            toShow.push(btn.up('allcontacts').lookupReference('title').inputValue);

        }

        if (btn.up('allcontacts').lookupReference('state').value) {
            toHide.push(btn.up('allcontacts').lookupReference('state').inputValue);
        } else {
            toShow.push(btn.up('allcontacts').lookupReference('state').inputValue);

        }
        for (i = 0; i < toHide.length; i++) {
            console.log(btn.up('allcontacts').down('gridview').getColumns()[toHide[i]].setHidden(true));
        }

        for (i = 0; i < toShow.length; i++) {
            console.log(btn.up('allcontacts').down('gridview').getColumns()[toShow[i]].setHidden(false));
        }
    }



});