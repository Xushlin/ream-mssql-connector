const Customer = {
    name: 'Customer',
    primaryKey: 'ID',
    properties: {
        ID: 'int',
        Company: 'string',
        addresses: { type: 'list', objectType: 'CustomerAddress', watch_table: true },
        Estimates: { type: 'list', objectType: 'Estimate', watch_table: true }, 
    }
}

const CustomerAddress = {
    name: 'CustomerAddress',
    primaryKey: 'pk',
    properties: {
        pk: 'string',
        customerid: { type: 'linkingObjects', objectType: 'Customer', property: 'addresses' },
        addressid: 'Address',
        IsBilling: 'bool',
    }
}

const Address = {
    name: 'Address',
    primaryKey: 'ID',
    properties: {
        ID: 'int',
        ZipCode: 'string',
    },
}

const Estimate = {
    name: 'Estimate',
    primaryKey: 'ID',
    properties: {
        ID: 'int',
        customerid: { type: 'linkingObjects', objectType: 'Customer', property: 'Estimates' },
        Something: 'string',
    }
}

const Person = {
    name: 'Person',
    primaryKey: 'RealmId',
    sqlserverPrimaryKey: 'PersonId',
    properties: {
        RealmId: 'string',
        PassportId: 'Passport',
        PersonId: { type: 'int', optional: true },
        Name: 'string',
    }
 }
 
 const Passport = {
        name: 'Passport',
        primaryKey: 'RealmId',
        sqlserverPrimaryKey: 'PassportId',
        properties: {
            Country: 'string',
            RealmId: 'string',
            PassportId: { type: 'int', optional: true },
        }
    }


module.exports = [
    Customer, 
    CustomerAddress, 
    Address, 
    Estimate,
   // Person,
   // Passport,

];