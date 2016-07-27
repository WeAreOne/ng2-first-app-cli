import { Ng2FirstAppCliPage } from './app.po';

describe('ng2-first-app-cli App', function() {
  let page: Ng2FirstAppCliPage;

  beforeEach(() => {
    page = new Ng2FirstAppCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
