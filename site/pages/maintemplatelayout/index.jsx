import Markdown from '../../../libs/markdown';

import './style.scss';

export default class MainTemplateLayout extends Markdown {
  document(locale) {
    return require(`../../../src/@317hu/mainTemplateLayout/README.md`);
  }
}
