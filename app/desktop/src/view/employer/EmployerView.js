Ext.define('MyExtGenApp.view.employer.EmployerView',{
    xtype: 'employerview',
    cls: 'employerview',
    controller: {type: 'employerviewcontroller'},
    viewModel: {type: 'employerviewmodel'},
    requires:[],
    extend: 'Ext.Container',
    scrollable: true,
    html: `<div style="background:black">Ok</div>`
});