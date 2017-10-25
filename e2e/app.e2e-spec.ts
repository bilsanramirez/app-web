import { SitioWebDidemoPage } from './app.po';

describe('sitio-web-didemo App', function() {
  let page: SitioWebDidemoPage;

  beforeEach(() => {
    page = new SitioWebDidemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
