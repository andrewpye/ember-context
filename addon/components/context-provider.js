import Component from '@ember-component';
import layout from '../templates/components/context-provider';

/**
 * Base consumer component.
 */
export default Component.extend({
  tagName: '',

  layout,

  /**
   * The current value of the context.
   *
   * @property value
   * @type {any}
   * @public
   */
  value: null,

  /**
   * Unique provider ID, used to select the
   * appropriate provider for a given consumer.
   *
   * @property _providerId
   * @type {String}
   * @private
   */
  _providerId: null,
});
