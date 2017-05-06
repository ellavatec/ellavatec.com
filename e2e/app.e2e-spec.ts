import { Ellavatec.ComPage } from './app.po';

describe('ellavatec.com App', () => {
  let page: Ellavatec.ComPage;

  beforeEach(() => {
    page = new Ellavatec.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
