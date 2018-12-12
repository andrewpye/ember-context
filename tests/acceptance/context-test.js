import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | context', function(hooks) {
  setupApplicationTest(hooks);

  module('Consumer component', function() {
    test('yields provided context', async function(assert) {
      assert.expect(1);

      await visit('/context-consumer-component');

      assert.dom('#context-value').hasText('original value');
    });

    test('receives updated context when context changes', async function(assert) {
      assert.expect(1);

      await visit('/context-consumer-component');

      await click('#update-context-button');

      assert.dom('#context-value').hasText('updated value');
    });
  });

  module('Consumer mixin', function() {
    test('gives component access to provided context', async function(assert) {
      assert.expect(1);

      await visit('/context-consumer-mixin');

      assert.dom('#context-value').hasText('original value');
    });

    test('gives component access to updated context when context changes', async function(assert) {
      assert.expect(1);

      await visit('/context-consumer-mixin');

      await click('#update-context-button');

      assert.dom('#context-value').hasText('updated value');
    });
  });
});
