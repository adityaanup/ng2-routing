import { Ng2RoutingPage } from './app.po';

describe('ng2-routing App', function() {
  let page: Ng2RoutingPage;

  beforeEach(() => {
    page = new Ng2RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
