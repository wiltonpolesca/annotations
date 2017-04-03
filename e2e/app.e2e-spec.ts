import { AnnotationsPage } from './app.po';

describe('annotations App', () => {
  let page: AnnotationsPage;

  beforeEach(() => {
    page = new AnnotationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
