Ext.define('Contacts.view.contacts.Routes', {
    extend: 'Ext.Mixin',
  
  
   // Function for routing
    // Making active tab
    makeActiveTab: function(activeItem){
        // console.log(activeItem);
        this.getView().setActiveItem(activeItem);
    },
    
  });