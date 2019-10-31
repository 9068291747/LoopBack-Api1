
module.exports = (app) => {
  app.datasources.db.autoupdate(['AccessToken', 'ACL', 'RoleMapping', 'Role', 'info','master_category_values',
  'partner_package','partner_package_test_mapping','partner_test'], err => {
    if (err) throw err;
    console.log('connected to mysql');
  });
}

