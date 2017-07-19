import { TradePage } from './app.po';

describe('trade App', () => {
  let page: TradePage;

  beforeEach(() => {
    page = new TradePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
