import zam from './zam';
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
import dIsolate from './directives/isolate';
import dInherit from './directives/inherit';
import dValue from './directives/value';

[dText, dShow, dAttr, dClass, dExist, dStyle, dModel, dIn, dOn, dSkip, dCloak,
	dIsolate, dInherit, dValue].forEach(zam.directive);

export default zam;