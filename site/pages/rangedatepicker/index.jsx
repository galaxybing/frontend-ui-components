import Markdown from '../../../libs/markdown';

import './style.scss';

export default class RangeDatePicker extends Markdown {
  document(locale) {
    return require(`../../../src/@317hu/rangedatepicker/README.md`);
  }
}
