Ext.define('MyExtGenApp.view.personnel.PersonnelViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.personnelviewcontroller',

	onItemSelected: function (sender, record) {
    var users = [
      { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
      { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
      { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
      { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
    ];
    var user = Ext._.find(users, { lastName: "Doe", gender: "male" });

    Ext.Msg.confirm('Confirm', 'Are you sure? ' + user.age + ' years old', 'onConfirm', this);
//    Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  }
});
