'use strict';

import zam from './zam';
import directive from './directive';
import dText from './directives/text';
import dShow from './directives/show';
import dAttr from './directives/attr';
import dClass from './directives/class';
import dExist from './directives/exist';
import dStyle from './directives/style';
import dModel from './directives/model';
import dIn from './directives/in';
import dOn from './directives/on';
import dSkip from './directives/skip';
import dCloak from './directives/cloak';

[dText, dShow, dAttr, dClass, dExist, dStyle, dModel, dIn, dOn, dSkip, dCloak]
	.forEach(directive);

export default zam;