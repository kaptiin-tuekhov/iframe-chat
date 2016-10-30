import { IframeChatPage } from './app.po';

describe('iframe-chat App', function() {
  let page: IframeChatPage;

  beforeEach(() => {
    page = new IframeChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
