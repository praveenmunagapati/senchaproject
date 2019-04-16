Ext.define('Contacts.view.contacts.editcontact.EditContact', {
  extend: 'Ext.form.Panel',
  requires: [
    'Contacts.view.contacts.editcontact.EditContactVC',
    'Contacts.view.contacts.editcontact.EditContactVM'
  ],
  controller: 'editcontact-vc',
  xtype: 'editcontact',
  
  viewModel: {
    type: 'editcontactvm'
  },
  // bodyStyle: 'margin-left: 100px',
  bodyPadding: '0 100',
  cls:'body-color',
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
          html: '<div class="edit-contact-heading">Edit Contact</div>',
          margin: '30 0 10 0 '
        },
        {
          xtype: 'image',
          src: 'resources/images/ben-knapen.png',
          name: 'image',
          height: 100,
          width: 100,
          bind: {
            src: '{imgData}'
          }
        }, {
          // xtype: 'filefield', 
          xtype: 'fileuploadfield',
          buttonText: 'Edit Photo',
          buttonOnly: true,
          cls: 'btn-browse',
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
      fieldLabel: 'Contact Information',
      labelSeparator:'',
      layout: 'column',
      cls: 'backcolor',
      border: false,

      defaults: {
        columnWidth: 0.25,
        labelSeparator: '',
        margin: '10',
        afterLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
        allowBlank: false,
        height: 48,


      },
      items: [
        {
          columnWidth:1,
          height:20,
          html:'<div style="margin-top:5px;">field marked are <b style="color:red">*</b> required</div>'
        },
        {
          xtype: 'datefield',
          fieldLabel: 'Date',
          name: 'date',
          emptyText: 'MM-DD-YYYY',
          name: 'first',
          format: 'm-d-Y',
          altFormats: 'm,d,Y|m.d.Y',
        },
        {

          xtype: 'textfield',
          fieldLabel: 'First Name',
          name: 'firstname',
          reference: 'firstname'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Last Name',
          name: 'lastname',
          reference: 'lastname'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Mobile Number',
          name: 'mobile',
          emptyText: '+911234567890',
          reference: 'mobile'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Email Id',
          name: 'email',
          vtype: 'email',
          reference: 'email'
        },
        {

          xtype: 'textfield',
          fieldLabel: 'Company Name',
          name: 'company',
          reference: 'company'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Title',
          name: 'title',
          reference: 'title'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Industry',
          name: 'industry',
          afterLabelTextTpl: '',
          allowBlank: true,
          reference: 'industry'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Primary Buniness',
          name: 'p-business',
          afterLabelTextTpl: '',
          allowBlank: true,
          reference: 'p-business'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Website',
          name: 'website',
          afterLabelTextTpl: '',
          allowBlank: true,
          reference: 'website'
        }, {
          xtype: 'numberfield',
          fieldLabel: 'No. of Employees',
          name: 'num-of-employees',
          afterLabelTextTpl: '',
          allowBlank: true,
          minValue: 1,
          reference: 'num-of-employees'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Revenue',
          name: 'revenue',
          afterLabelTextTpl: '',
          allowBlank: true,
          reference: 'revenue'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Linked In',
          name: 'linkedin',
          afterLabelTextTpl: '',
          allowBlank: true,
          reference: 'linkedin'
        }
      ]
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Address Information',
      labelSeparator:'',
      layout: 'column',
      cls: 'backcolor',
      defaults: {
        columnWidth: 0.25,
        margin: '10 10 10 10'
      },
      items: [
        {
          xtype: 'textfield',
          fieldLabel: 'Address',
          name: 'address',
          reference: 'address'
        },
        {
          xtype: 'textfield',
          fieldLabel: 'City',
          name: 'city',
          reference: 'city'
        }, {
          xtype: 'textfield',
          fieldLabel: 'State',
          name: 'state',
          reference: 'state'
        }, {
          xtype: 'combobox',
          fieldLabel: 'Country',
          name: 'country',
          displayField: 'country',
          typeAhead: true,
          queryMode: 'local',
          emptyText: 'Select a country...',
          reference: 'country',
          bind:{
            store:'{countries}'
          }
        },
      ]
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Description Information',
      labelSeparator:'',
      layout: 'column',
      cls: 'backcolor',
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
        reference: 'notes'
      }]
    },
    {
      xtype: 'fieldcontainer',
      cls: 'backcolor',
      layout: {
        type: 'hbox',
        pack: 'center',
        align: 'middle'
      },
      defaults: {
        xtype: 'button'
      },
      items: [{
        text: 'Cancel',
        cls: 'cancle-style'
      }, {
        text: 'Save',
        disabled: true,
        formBind: true,
        cls: 'save-style',

        listeners:{
          click: 'saveFormData'
        }
      }
      ]
    }
  ]

});