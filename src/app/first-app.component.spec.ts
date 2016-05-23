import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FirstAppAppComponent } from '../app/first-app.component';

beforeEachProviders(() => [FirstAppAppComponent]);

describe('App: FirstApp', () => {
  it('should create the app',
      inject([FirstAppAppComponent], (app: FirstAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'first-app works!\'',
      inject([FirstAppAppComponent], (app: FirstAppAppComponent) => {
    expect(app.title).toEqual('first-app works!');
  }));
});
