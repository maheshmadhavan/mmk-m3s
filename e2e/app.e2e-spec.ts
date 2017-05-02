import { MmkM3sPage } from './app.po';

describe('mmk-m3s App', () => {
  let page: MmkM3sPage;

  beforeEach(() => {
    page = new MmkM3sPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
