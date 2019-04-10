Ext.define('Contacts.view.contacts.editcontact.EditContact', {
<<<<<<< Updated upstream
    extend: 'Ext.form.Panel',
    requires: [
        'Contacts.view.contacts.editcontact.EditContactVC'
    ],

    controller: 'editcontact-vc',

    xtype: 'editcontact',

    // bodyStyle: 'margin-left: 100px',
    bodyPadding: '0 100',

    scrollable: true,
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side',

    },

    items: [

        {
            xtype: 'fieldcontainer',

            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'middle'
            },
            items: [
                {
                    html: '<div style="font-size:large; font-weight:bold;">Edit Contact</div>',
                    margin: '30 0 10 0 '
                },
                {
                    xtype: 'image',
                    src: 'resources/images/ben-knapen.png',
                    height: 100,
                    width: 100
                }, {
                    // xtype: 'filefield', 
                    html: "<a href='#'>edit contact</a>"
                }]

        },
        {
            xtype: 'fieldcontainer',
            fieldLabel: 'Postal Address',
            layout: 'column',
            border: false,
            defaults: {
                columnWidth: 0.25,
                labelSeparator: '',
                margin: '10 10 10 10',
                afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
            },
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date',
                    name: 'first'
                },
                {

                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    name: 'firstName'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    name: 'lastName'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Mobile Number',
                    name: 'mobileNumber',
                    emptyText: '+911234567890'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email Id',
                    name: 'email',
                    vtype: 'email'
                },
                {

                    xtype: 'textfield',
                    fieldLabel: 'Company Name',
                    name: 'company'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    name: 'title'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Industry',
                    name: 'industry',
                    afterLabelTextTpl: ''
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Primary Buniness',
                    name: 'business',
                    afterLabelTextTpl: ''
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Website',
                    name: 'website',
                    afterLabelTextTpl: ''
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'No. of Employees',
                    name: 'noOfEmployees',
                    afterLabelTextTpl: ''
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Revenue',
                    name: 'revenue',
                    afterLabelTextTpl: ''
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Linked In',
                    name: 'linked',
                    afterLabelTextTpl: ''
                }
            ]
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Address Information',
            layout: 'column',
            defaults: {
                columnWidth: 0.25,
                margin: '10 10 10 10'
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Address',
                    name: 'address'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'City',
                    name: 'city'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'State',
                    name: 'state'
                }, {
                    xtype: 'combobox',
                    fieldLabel: 'Country',
                    name: 'country',
                    // store: {
                    //     type: 'country'
                    // },
                    valueField: 'abbr',
                    displayField: 'country',
                    typeAhead: true,
                    queryMode: 'local',
                    emptyText: 'Select a state...'
                },
            ]
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Address Information',
            layout: 'column',
            border: false,
            defaults: {
                columnWidth: 1,
                margin: '10 10 10 10'
            },
            items: [{
                xtype: 'textarea',
                hideLabel: true,
                fieldLabel: 'Notes',
                name: 'notes',
            }]
        },
        {
            xtype: 'fieldcontainer',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'middle'
            },
            defaults: {
                xtype: 'button'
            },
            items: [{
                text: 'Cancel'
            }, {
                text: 'Save',
                listeners: {
                    click: 'displayGrid'
                }
            }
            ]
=======
  extend: 'Ext.form.Panel',
  xtype: 'editcontact',

  // bodyStyle: 'margin-left: 100px',
  bodyPadding: '0 100',
  viewModel: {},
  scrollable: true,
  fieldDefaults: {
    labelAlign: 'top',
    msgTarget: 'side'
  },
  items: [
    {
      xtype: 'fieldcontainer',
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'middle'
      },
      items: [
        {
          html: '<div style="font-size:large; font-weight:bold;">Edit Contact</div>',
          margin: '30 0 10 0 '
        },
        {
          xtype: 'image',
           src: 'resources/images/ben-knapen.png',
          height: 100,
          width: 100,
          bind:{
            src: '{imgData}'
          }
        }, {
          // xtype: 'filefield', 
            xtype: 'fileuploadfield',
            buttonOnly: true,
            buttonText: 'Edit Photo',
            
            fieldCls: 'edit-photo-button',
            // style: {
            //     width: '95%',
            //     marginBottom: '10px'
            // }
            
            listeners: {
                change(field) {
                    alert(field);
                    const dom = Ext.getDom(field.fileInputEl);
                    const container = field.up('editcontact');
                    console.log(container);
                    const viewModel = container.getViewModel();
                    console.log(viewModel);
                    const reader = new FileReader();
                    reader.onload = e => viewModel.set('imgData', e.target.result);
                    reader.readAsDataURL(dom.files[0]);
                }
            }
        }]

    },
    {
      xtype: 'fieldcontainer',
      fieldLabel: 'Postal Address',
      layout: 'column',
      border: false,
      defaults: {
        columnWidth: 0.25,
        labelSeparator: '',
        margin: '10 10 10 10',
        afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
        allowBlank: false
      },
      items: [
        {
          xtype: 'datefield',
          fieldLabel: 'Date',
          name: 'first',
          format: 'm-d-Y',
          altFormats: 'm,d,Y|m.d.Y',
        },
        {

          xtype: 'textfield',
          fieldLabel: 'First Name',
          name: 'firstName'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Last Name',
          name: 'lastName'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Mobile Number',
          name: 'mobileNumber',
          emptyText: '+911234567890'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Email Id',
          name: 'email',
          vtype: 'email'
        },
        {

          xtype: 'textfield',
          fieldLabel: 'Company Name',
          name: 'company'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Title',
          name: 'title'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Industry',
          name: 'industry',
          afterLabelTextTpl: '',
          allowBlank: true
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Primary Buniness',
          name: 'business',
          afterLabelTextTpl: '',
          allowBlank: true
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Website',
          name: 'website',
          afterLabelTextTpl: '',
          allowBlank: true
        }, {
          xtype: 'numberfield',
          fieldLabel: 'No. of Employees',
          name: 'noOfEmployees',
          afterLabelTextTpl: '',
          allowBlank: true,
          minValue: 1
        }, {
          xtype: 'textfield',
          fieldLabel: 'Revenue',
          name: 'revenue',
          afterLabelTextTpl: '',
          allowBlank: true
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Linked In',
          name: 'linked',
          afterLabelTextTpl: '',
          allowBlank: true
>>>>>>> Stashed changes
        }
      ]
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Address Information',
      layout: 'column',
      defaults: {
        columnWidth: 0.25,
        margin: '10 10 10 10'
      },
      items: [
        {
          xtype: 'textfield',
          fieldLabel: 'Address',
          name: 'address'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'City',
          name: 'city'
        }, {
          xtype: 'textfield',
          fieldLabel: 'State',
          name: 'state'
        }, {
          xtype: 'combobox',
          fieldLabel: 'Country',
          name: 'country',
          displayField: 'country',
          typeAhead: true,
          queryMode: 'local',
          emptyText: 'Select a country...'
        },
      ]
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Address Information',
      layout: 'column',
      border: false,
      defaults: {
        columnWidth: 1,
        margin: '10 10 10 10'
      },
      items: [{
        xtype: 'textarea',
        hideLabel: true,
        fieldLabel: 'Notes',
        name: 'notes',
      }]
    },
    {
      xtype: 'fieldcontainer',
      layout: {
        type: 'hbox',
        pack: 'center',
        align: 'middle'
      },
      defaults: {
        xtype: 'button',
        // cls:'edit-photo-button'
      },
      items: [{
        text: 'Cancel'
      }, {
        text: 'Save',
        disabled: true,
        formBind: true
      }
      ]
    }
  ],


<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
});