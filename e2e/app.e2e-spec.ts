import { EllavatecPage } from './app.po';
const expect = global['chai'].expect;

describe('ellavatec.com App', () => {
  let page: EllavatecPage;

  beforeEach(() => {
    page = new EllavatecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
