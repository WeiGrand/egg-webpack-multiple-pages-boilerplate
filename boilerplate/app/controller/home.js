'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const data = {
      page: {
        title: 'Home page title',
        name: 'home',
      },
    };

    await this.ctx.render('home.tpl', data);
  }

  async test() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
