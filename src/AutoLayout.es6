import Attribute from './Attribute.es6';
import Relation from './Relation.es6';
import Priority from './Priority.es6';
import VisualFormat from './VisualFormat.es6';
import View from './View.es6';
import SubView from './SubView.es6';
//import DOM from './DOM.es6';

/**
 * AutoLayout.
 *
 * @namespace AutoLayout
 * @property {Attribute} Attribute
 * @property {Relation} Relation
 * @property {Priority} Priority
 * @property {VisualFormat} VisualFormat
 * @property {View} View
 * @property {SubView} SubView
 */
var AutoLayout = {
    Attribute: Attribute,
    Relation: Relation,
    Priority: Priority,
    VisualFormat: VisualFormat,
    View: View,
    SubView: SubView
    //DOM: DOM
};

export {AutoLayout as default};
