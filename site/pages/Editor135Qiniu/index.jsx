import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Editor135Qiniu extends Markdown {
  document(locale) {
    return require(`../../../src/@317hu/editor135qiniu/README.md`);
  }
}
