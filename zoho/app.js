/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Zoho.Application',

    name: 'Zoho',

    requires: [
        // This will automatically load all classes in the Zoho namespace
        // so that application classes do not need to require each other.
        'Zoho.*'
    ],

    // The name of the initial view to create.
    mainView: 'Zoho.view.main.Main'
});
