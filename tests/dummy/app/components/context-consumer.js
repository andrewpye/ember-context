import Component from '@ember/component';
import layout from '../templates/components/context-consumer';
import context from '../contexts/my-context';

export default Component.extend(context.ConsumerMixin, {
  layout,
});
