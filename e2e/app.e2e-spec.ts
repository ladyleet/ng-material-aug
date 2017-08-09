import { NgMaterialAugPage } from './app.po';

describe('ng-material-aug App', () => {
  let page: NgMaterialAugPage;

  beforeEach(() => {
    page = new NgMaterialAugPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
