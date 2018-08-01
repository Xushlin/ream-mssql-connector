module.exports = {
    // Database name
    database_name: 'SQLSyncDemo',

    database_schema: 'dbo',

    // Realm Object Server URL
    //self-hosted: "realm://10.0.0.7:9080"
   // realm_object_server_url: https://small-plastic-handle.us1a.cloud.realm.io/
    //note: port only required for self-hosted
    realm_object_server_url: "https://projectportaldev.us1.cloud.realm.io",

    //self-hosted:"http://10.0.0.7:9080"
    //realm_object_server_url: https://small-plastic-handle.us1a.cloud.realm.io/
    auth_server_url: "https://projectportaldev.us1.cloud.realm.io",

    //enter as necessary
    //admin_username: 'Martin.ahlstrom@swecom.com',
    //admin_password: 'Lustig95',
    admin_username: 'michael',
    admin_password: 'Password1',
    // The synced Realm path for the data
    target_realm_path: '/SQLDemoNew',

    // Postgres config used for all connections - replace with your data
    sqlserver_config: {
        user:       'sa',
        password:   'sa',
        server:     '.',
        port:        1433
    },
}