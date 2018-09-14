import Markdown from '../../../libs/markdown';

import './style.scss';

export default class RangeDatePicker extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/rangedatepicker.md`);
  }
}
