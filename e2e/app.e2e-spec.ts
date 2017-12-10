import { HotelmanagementPage } from './app.po';

describe('hotelmanagement App', function() {
  let page: HotelmanagementPage;

  beforeEach(() => {
    page = new HotelmanagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
