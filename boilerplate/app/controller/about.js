'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const data = {
      page: {
        title: 'About page title',
        name: 'about',
      },
    };

    await this.ctx.render('about.tpl', data);
  }
}

module.exports = HomeController;
