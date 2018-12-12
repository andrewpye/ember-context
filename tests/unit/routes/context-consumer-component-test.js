import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | context-consumer-component', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:context-consumer-component');
    assert.ok(route);
  });
});
