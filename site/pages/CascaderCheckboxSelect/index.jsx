import Markdown from '../../../libs/markdown';

import './style.scss';

export default class CascaderCheckboxSelect extends Markdown {
  document(locale) {
    return require(`../../../src/@317hu/CascaderCheckboxSelect/README.md`);
  }
}
