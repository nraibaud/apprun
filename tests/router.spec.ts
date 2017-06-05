import { } from 'jasmine';
import app, { Router } from '../index-zero';

let fired = false;
app.on('#1', _ => fired = true);

describe('router', () => {

  it('should not fire if not initialize', () => {
    window.history.pushState({}, null, '#1');
    expect(fired).toBeFalsy();
  });

  it('should fire if initialized', () => {
    new Router();
    window.history.replaceState({}, null, '#1');
    expect(fired).toBeTruthy();
  });

});