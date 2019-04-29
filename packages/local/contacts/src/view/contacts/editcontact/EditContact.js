Ext.define('Contacts.view.contacts.editcontact.EditContact', {
  extend: 'Ext.form.Panel',
  requires: [
    'Contacts.view.contacts.editcontact.EditContactVC',
    'Contacts.view.contacts.editcontact.EditContactVM',
    'Contacts.view.contacts.editcontact.FirstName'
  ],
  cls: 'body-color',
  controller: 'editcontact-vc',
  xtype: 'editcontact',
  viewModel: {
    type: 'editcontactvm'
  },
  // bodyStyle: 'margin-left: 100px',
  bodyPadding: '0 100',

  jsonSubmit: true,

  scrollable: true,

  fieldDefaults: {
    labelAlign: 'top',
    msgTarget: 'side',
  },

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
          html: '<div class="edit-contact-heading">Edit Contact</div>',
          margin: '30 0 10 0 '
        },
        {
          xtype: 'image',
          // src: 'resources/images/ben-knapen.png',
          // name: 'contact_profile_pic',
          height: 100,
          width: 100,
          bind: {
            src: 'resources/images/{imgData}',
          }
        }
        , {
          xtype: 'textfield',
          hidden: true,
          bind: {
            value: '{imgData}'
          },
          name: 'contact_profile_pic'
        }
        , {
          xtype: 'filefield',
          xtype: 'fileuploadfield',
          buttonText: 'Edit Photo',
          buttonOnly: true,
          // name: 'contact_profile_pic',
          // value: 'resources/images/ben-knapen.png',
          cls: 'btn-browse',
          listeners: {
            change(field, input) {
              const dom = Ext.getDom(field.fileInputEl);
              const container = field.up('editcontact');
              var path = input.split('\\');
              const viewModel = container.getViewModel();
              // console.log(viewModel);
              const reader = new FileReader();
              console.log(path[path.length - 1]);
              reader.onload = e => {
                viewModel.set('imgData', path[path.length - 1]);
              }
              reader.readAsDataURL(dom.files[0]);
            }
          }
        }


      ]

    },
    {
      xtype: 'fieldcontainer',
      fieldLabel: 'Postal Address',
      layout: 'column',
      border: false,
      cls: 'backcolor',
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
          columnWidth: 1,
          height: 20,
          html: '<div style="margin-top:5px;">field marked are <b style="color:red">*</b> required</div>'
        },
        {
          xtype: 'datefield',
          fieldLabel: 'Date',
          name: 'created',
          emptyText: 'MM-DD-YYYY',
          name: '',
          format: 'm-d-Y',
          cls: 'date-style',
          altFormats: 'm,d,Y|m.d.Y',
        },
        {
          // xtype: 'textfield',
          //           name: 'firstname',
          //           reference: 'firstname',

          xtype: 'firstname',
          margin: '10 10 0 10',
          height: 70
        }
        , {
          xtype: 'textfield',
          fieldLabel: 'Last Name',
          name: 'lastname',
          reference: 'lastname'
        }, {
          xtype: 'textfield',
          fieldLabel: 'Mobile Number',
          name: 'mobile_number',
          emptyText: '+911234567890',
          reference: 'mobile',
          maxLength: 10,
          maskRe: /[0-9.]/,
          regex: /^\d{3}\d{3}\d{4}$/,

        },
        {
          xtype: 'textfield',
          fieldLabel: 'Email Id',
          name: 'email_address',
          vtype: 'email',
          reference: 'email'
        },
        {

          xtype: 'textfield',
          fieldLabel: 'Company Name',
          name: 'orgname',
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
          name: 'primary_business',
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
          name: 'employee_count',
          afterLabelTextTpl: '',
          allowBlank: true,
          cls: 'date-style',
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
          name: 'linkedin_id',
          afterLabelTextTpl: '',
          allowBlank: true,
          reference: 'linkedin'
        }
      ]
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Address Information',
      layout: 'column',
      cls: 'backcolor',
      defaults: {
        columnWidth: 0.25,
        afterLabelTextTpl: '',
        labelSeparator: '',
        margin: '10 10 10 10'
      },
      items: [
        {
          xtype: 'textfield',
          fieldLabel: 'Address',
          name: 'address',
          reference: 'address',

        },
        {
          xtype: 'textfield',
          fieldLabel: 'City',
          name: 'city',
          reference: 'city',

        }, {
          xtype: 'textfield',
          fieldLabel: 'State',
          name: 'state',
          reference: 'state',

        }, {
          xtype: 'combobox',
          fieldLabel: 'Country',
          name: 'country',
          displayField: 'country',
          cls: 'date-style',
          typeAhead: true,
          queryMode: 'local',
          emptyText: 'Select a country...',
          reference: 'country',
          bind: {
            store: '{countries}'
          }
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Contact Id *',
          name: 'contact_owner_id',
          allowBlank: 'false',
          hidden: true,
          value: '1001231'
        }
      ]
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Address Information',
      cls: 'backcolor',
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
        reference: 'notes'
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
        width: 80
      },
      items: [{
        text: 'Cancel',
        listeners: {
          click: 'cancelFormData'
        },
        cls: 'cancle-style',
        margin: '0 14 4 0'
      }, {
        text: 'Save',
        disabled: true,
        formBind: true,
        reference: 'savebutton',
        cls: 'save-style',
        listeners: {
          click: 'saveFormData'
        }
      },
      {
        text: 'save',
        reference: 'updatebutton',
        // disabled: true,
        // formBind: true,
        cls: 'update-style',
      }
      ]
    }
  ]

});