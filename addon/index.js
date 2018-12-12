import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import ProviderComponent from './components/context-provider';
import ConsumerComponent from './components/context-consumer';

/**
 * Traverses the provided view's ancestor tree
 * to find the nearest provider component of the
 * appropriate type.
 */
function findProviderAncestorView(view, providerId) {
  let ancestorView = view.get('parentView');

  while (ancestorView) {
    // Check if ancestor view is context provider.
    if (ancestorView.get('_providerId') === providerId) {
      return ancestorView;
    }

    ancestorView = ancestorView.get('parentView');
  }

  return null;
}

/**
 * React-style createContext function.
 * Takes a default context value and returns a tuple of
 * Provider and Consumer components, and a ConsumerMixin
 * used for emulation of React's `Class.contextType`.
 */
export default function createContext(defaultValue) {
  const id = new Date().getTime();
  const providerId = `provider${id}`;

  const Provider = ProviderComponent.extend({
    _providerId: providerId,

    value: computed(function() { return defaultValue; }),
  });

  const ConsumerMixin = Mixin.create({
    _providerInstance: computed(function() {
      return findProviderAncestorView(this, providerId);
    }).readOnly(),

    context: computed('_providerInstance.value', function() {
      const providerInstance = this.get('_providerInstance');

      assert('Context consumer missing provider instance', !!providerInstance);

      return providerInstance && providerInstance.get('value');
    }).readOnly(),
  });

  const Consumer = ConsumerComponent.extend(ConsumerMixin);

  return {
    Provider,
    Consumer,
    ConsumerMixin,
  };
}
