'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async get(name) {
        return await userDatabase.get(name);
    }
}