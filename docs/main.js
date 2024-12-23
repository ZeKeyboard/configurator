(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}

var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$document = _Browser_document;
var $author$project$Language$Swedish = {$: 'Swedish'};
var $author$project$Keyboard$Key = F8(
	function (id, row, col, x, y, height, width, actions) {
		return {actions: actions, col: col, height: height, id: id, row: row, width: width, x: x, y: y};
	});
var $author$project$Keyboard$LayerAction = function (a) {
	return {$: 'LayerAction', a: a};
};
var $author$project$Keyboard$Single = function (a) {
	return {$: 'Single', a: a};
};
var $author$project$Generated$Layout$initialLayout = _List_fromArray(
	[
		A8(
		$author$project$Keyboard$Key,
		0,
		0,
		0,
		0,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61481)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		1,
		0,
		2,
		2,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61498)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		2,
		0,
		3,
		3,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61499)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		3,
		0,
		4,
		4,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61500)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		4,
		0,
		5,
		5,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61501)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		5,
		0,
		6,
		6.5,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61502)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		6,
		0,
		7,
		7.5,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61503)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		7,
		0,
		8,
		8.5,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61504)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		8,
		0,
		9,
		9.5,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61505)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		9,
		0,
		10,
		11.0,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61506)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		10,
		0,
		11,
		12.0,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61507)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		11,
		0,
		12,
		13.0,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61508)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		12,
		0,
		13,
		14.0,
		1.25,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61509)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		13,
		1,
		0,
		0,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61493)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		14,
		1,
		1,
		1,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61470)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		15,
		1,
		2,
		2,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61471)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		16,
		1,
		3,
		3,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61472)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		17,
		1,
		4,
		4,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61473)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		18,
		1,
		5,
		5,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61474)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		19,
		1,
		6,
		6,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61475)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		20,
		1,
		7,
		7,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61476)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		21,
		1,
		8,
		8,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61477)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		22,
		1,
		9,
		9,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61478)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		23,
		1,
		10,
		10,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61479)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		24,
		1,
		11,
		11,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61485)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		25,
		1,
		12,
		12,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61486)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		26,
		1,
		13,
		13,
		2.5,
		1,
		2,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61482)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		27,
		1,
		14,
		15.25,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		28,
		1,
		15,
		16.5,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		29,
		1,
		16,
		17.5,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61524)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		30,
		1,
		17,
		18.5,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61525)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		31,
		1,
		18,
		19.5,
		2.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61526)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		32,
		2,
		0,
		0,
		3.5,
		1,
		1.5,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61483)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		33,
		2,
		1,
		1.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61460)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		34,
		2,
		2,
		2.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61466)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		35,
		2,
		3,
		3.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61448)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		36,
		2,
		4,
		4.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61461)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		37,
		2,
		5,
		5.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61463)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		38,
		2,
		6,
		6.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61468)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		39,
		2,
		7,
		7.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61464)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		40,
		2,
		8,
		8.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61452)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		41,
		2,
		9,
		9.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61458)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		42,
		2,
		10,
		10.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61459)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		43,
		2,
		11,
		11.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61487)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		44,
		2,
		12,
		12.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61488)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		45,
		2,
		13,
		13.5,
		3.5,
		1,
		1.5,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61489)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		46,
		2,
		14,
		15.25,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		47,
		2,
		15,
		16.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61535)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		48,
		2,
		16,
		17.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61536)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		49,
		2,
		17,
		18.5,
		3.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61537)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		50,
		2,
		18,
		19.5,
		3.5,
		2,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61527)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		51,
		3,
		0,
		0,
		4.5,
		1,
		1.75,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		52,
		3,
		1,
		1.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61444)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		53,
		3,
		2,
		2.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61462)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		54,
		3,
		3,
		3.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61447)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		55,
		3,
		4,
		4.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61449)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		56,
		3,
		5,
		5.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61450)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		57,
		3,
		6,
		6.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61451)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		58,
		3,
		7,
		7.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61453)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		59,
		3,
		8,
		8.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61454)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		60,
		3,
		9,
		9.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61455)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		61,
		3,
		10,
		10.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61491)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		62,
		3,
		11,
		11.75,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61492)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		63,
		3,
		13,
		12.75,
		4.5,
		1,
		2.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61480)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		64,
		3,
		14,
		15.25,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		65,
		3,
		15,
		16.5,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61532)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		66,
		3,
		16,
		17.5,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61533)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		67,
		3,
		17,
		18.5,
		4.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61534)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		68,
		4,
		0,
		0,
		5.5,
		1,
		1.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(57346)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		69,
		4,
		1,
		1.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61540)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		70,
		4,
		2,
		2.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61469)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		71,
		4,
		3,
		3.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61467)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		72,
		4,
		4,
		4.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61446)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		73,
		4,
		5,
		5.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61465)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		74,
		4,
		6,
		6.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61445)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		75,
		4,
		7,
		7.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61457)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		76,
		4,
		8,
		8.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61456)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		77,
		4,
		9,
		9.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61494)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		78,
		4,
		10,
		10.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61495)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		79,
		4,
		11,
		11.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61496)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		80,
		4,
		12,
		12.625,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61522)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		81,
		4,
		13,
		14.0,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		82,
		4,
		14,
		15.25,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		83,
		4,
		15,
		16.5,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61529)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		84,
		4,
		16,
		17.5,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61530)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		85,
		4,
		17,
		18.5,
		5.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61531)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		86,
		4,
		18,
		19.5,
		5.5,
		2,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61528)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		87,
		5,
		0,
		0,
		6.5,
		1,
		1.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(57345)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		88,
		5,
		1,
		1.25,
		6.5,
		1,
		1.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(57352)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		89,
		5,
		2,
		2.5,
		6.5,
		1,
		1.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(57348)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		90,
		5,
		4,
		3.75,
		6.5,
		1,
		2.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61484)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		91,
		5,
		6,
		6.0,
		6.5,
		1,
		1.75,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61484)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		92,
		5,
		8,
		7.75,
		6.5,
		1,
		2.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61484)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		93,
		5,
		10,
		10.0,
		6.5,
		1,
		1.25,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(57408)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		94,
		5,
		11,
		11.625,
		6.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61520)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		95,
		5,
		12,
		12.625,
		6.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61521)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		96,
		5,
		13,
		13.625,
		6.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61519)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		97,
		5,
		14,
		15.25,
		6.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing})),
		A8(
		$author$project$Keyboard$Key,
		98,
		5,
		15,
		16.5,
		6.5,
		1,
		2,
		$author$project$Keyboard$LayerAction(
			{
				actionLayer1: $elm$core$Maybe$Just(
					$author$project$Keyboard$Single(61538)),
				actionLayer2: $elm$core$Maybe$Nothing,
				actionLayer3: $elm$core$Maybe$Nothing
			})),
		A8(
		$author$project$Keyboard$Key,
		99,
		5,
		17,
		18.5,
		6.5,
		1,
		1,
		$author$project$Keyboard$LayerAction(
			{actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing}))
	]);
var $author$project$Settings$BooleanField = function (a) {
	return {$: 'BooleanField', a: a};
};
var $author$project$Settings$EnumField = F2(
	function (a, b) {
		return {$: 'EnumField', a: a, b: b};
	});
var $author$project$Settings$IntegerField = F3(
	function (a, b, c) {
		return {$: 'IntegerField', a: a, b: b, c: c};
	});
var $author$project$Settings$initialSettings = function () {
	var mouseSettings = _List_fromArray(
		[
			_Utils_Tuple3(
			0,
			'Mouse speed',
			A3($author$project$Settings$IntegerField, 5, 1, 10)),
			_Utils_Tuple3(
			1,
			'Mouse acceleration',
			A3($author$project$Settings$IntegerField, 3, 0, 10))
		]);
	var backlightSettings = _List_fromArray(
		[
			_Utils_Tuple3(
			2,
			'Highlight keys on layer',
			$author$project$Settings$BooleanField(true)),
			_Utils_Tuple3(
			3,
			'Default scheme',
			A2(
				$author$project$Settings$EnumField,
				0,
				_List_fromArray(
					['Wave', 'Game of Life', 'Lights'])))
		]);
	return _List_fromArray(
		[
			{name: 'Mouse', settings: mouseSettings},
			{name: 'Backlight', settings: backlightSettings}
		]);
}();
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function (_v0) {
	return _Utils_Tuple2(
		{currentLayerIndex: 0, hovering: false, language: $author$project$Language$Swedish, layout: $author$project$Generated$Layout$initialLayout, name: 'Untitled Configuration', selectedKey: $elm$core$Maybe$Nothing, settings: $author$project$Settings$initialSettings},
		$elm$core$Platform$Cmd$none);
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$none;
};
var $rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles = function (a) {
	return {$: 'UnscopedStyles', a: a};
};
var $elm$core$String$cons = _String_cons;
var $robinheghan$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {charsProcessed: charsProcessed, hash: hash, seed: seed, shift: shift};
	});
var $robinheghan$murmur3$Murmur3$c1 = 3432918353;
var $robinheghan$murmur3$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $robinheghan$murmur3$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Bitwise$or = _Bitwise_or;
var $robinheghan$murmur3$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $robinheghan$murmur3$Murmur3$finalize = function (data) {
	var acc = (!(!data.hash)) ? (data.seed ^ A2(
		$robinheghan$murmur3$Murmur3$multiplyBy,
		$robinheghan$murmur3$Murmur3$c2,
		A2(
			$robinheghan$murmur3$Murmur3$rotlBy,
			15,
			A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c1, data.hash)))) : data.seed;
	var h0 = acc ^ data.charsProcessed;
	var h1 = A2($robinheghan$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($robinheghan$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $robinheghan$murmur3$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$robinheghan$murmur3$Murmur3$multiplyBy,
			5,
			A2(
				$robinheghan$murmur3$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$robinheghan$murmur3$Murmur3$multiplyBy,
					$robinheghan$murmur3$Murmur3$c2,
					A2(
						$robinheghan$murmur3$Murmur3$rotlBy,
						15,
						A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c1, k1))))) + 3864292196;
	});
var $robinheghan$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | ((255 & $elm$core$Char$toCode(c)) << data.shift);
		var _v0 = data.shift;
		if (_v0 === 24) {
			return {
				charsProcessed: data.charsProcessed + 1,
				hash: 0,
				seed: A2($robinheghan$murmur3$Murmur3$mix, data.seed, res),
				shift: 0
			};
		} else {
			return {charsProcessed: data.charsProcessed + 1, hash: res, seed: data.seed, shift: data.shift + 8};
		}
	});
var $robinheghan$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return $robinheghan$murmur3$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$robinheghan$murmur3$Murmur3$hashFold,
				A4($robinheghan$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $rtfeldman$elm_css$Hash$initialSeed = 15739;
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			_Utils_chr('-'),
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		$elm$core$String$cons,
		_Utils_chr('_'),
		$rtfeldman$elm_hex$Hex$toString(
			A2($robinheghan$murmur3$Murmur3$hashString, $rtfeldman$elm_css$Hash$initialSeed, str)));
};
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_v0, styles) {
		var isCssStyles = _v0.b;
		var cssTemplate = _v0.c;
		if (isCssStyles) {
			var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
			if (_v1.$ === 'Just') {
				return styles;
			} else {
				return A3(
					$elm$core$Dict$insert,
					cssTemplate,
					$rtfeldman$elm_css$Hash$fromString(cssTemplate),
					styles);
			}
		} else {
			return styles;
		}
	});
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlJson(value));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = F2(
	function (styles, _v0) {
		var val = _v0.a;
		var isCssStyles = _v0.b;
		var cssTemplate = _v0.c;
		if (isCssStyles) {
			var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
			if (_v1.$ === 'Just') {
				var classname = _v1.a;
				return A2(
					$elm$virtual_dom$VirtualDom$property,
					'className',
					$elm$json$Json$Encode$string(classname));
			} else {
				return A2(
					$elm$virtual_dom$VirtualDom$property,
					'className',
					$elm$json$Json$Encode$string('_unstyled'));
			}
		} else {
			return val;
		}
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS = F2(
	function (styles, _v0) {
		var val = _v0.a;
		var isCssStyles = _v0.b;
		var cssTemplate = _v0.c;
		if (isCssStyles) {
			var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
			if (_v1.$ === 'Just') {
				var classname = _v1.a;
				return A2($elm$virtual_dom$VirtualDom$attribute, 'class', classname);
			} else {
				return A2($elm$virtual_dom$VirtualDom$attribute, 'class', '_unstyled');
			}
		} else {
			return val;
		}
	});
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$nodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_nodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_v6, _v7) {
		var key = _v6.a;
		var html = _v6.b;
		var pairs = _v7.a;
		var styles = _v7.b;
		switch (html.$) {
			case 'Unstyled':
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v9 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v9.a;
				var finalStyles = _v9.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v10 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v10.a;
				var finalStyles = _v10.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v11 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v11.a;
				var finalStyles = _v11.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v12 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v12.a;
				var finalStyles = _v12.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _v0) {
		var nodes = _v0.a;
		var styles = _v0.b;
		switch (html.$) {
			case 'Unstyled':
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v2 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v2.a;
				var finalStyles = _v2.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v3 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v3.a;
				var finalStyles = _v3.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v4 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v4.a;
				var finalStyles = _v4.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v5 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v5.a;
				var finalStyles = _v5.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin = '\u0007';
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$styleToDeclaration = F3(
	function (template, classname, declaration) {
		return declaration + ('\n' + A3($elm$core$String$replace, $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin, classname, template));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return A3($elm$core$Dict$foldl, $rtfeldman$elm_css$VirtualDom$Styled$styleToDeclaration, '', dict);
};
var $rtfeldman$elm_css$VirtualDom$Styled$toScopedDeclaration = F2(
	function (scopingPrefix, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (template, classname, declaration) {
					return declaration + ('\n' + A3($elm$core$String$replace, '.' + $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin, '#' + (scopingPrefix + ('.' + classname)), template));
				}),
			'',
			dict);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = F2(
	function (maybeNonce, accumulatedStyles) {
		var cssText = function () {
			if (accumulatedStyles.$ === 'UnscopedStyles') {
				var allStyles = accumulatedStyles.a;
				return $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(allStyles);
			} else {
				var scope = accumulatedStyles.a.a;
				var rootStyles = accumulatedStyles.b;
				var descendantStyles = accumulatedStyles.c;
				return A2($rtfeldman$elm_css$VirtualDom$Styled$toScopedDeclaration, scope, rootStyles) + ('\n' + A2($rtfeldman$elm_css$VirtualDom$Styled$toScopedDeclaration, scope + ' ', descendantStyles));
			}
		}();
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			'span',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'style', 'display: none;'),
					A2($elm$virtual_dom$VirtualDom$attribute, 'class', 'elm-css-style-wrapper')
				]),
			_List_fromArray(
				[
					A3(
					$elm$virtual_dom$VirtualDom$node,
					'style',
					function () {
						if (maybeNonce.$ === 'Just') {
							var nonce = maybeNonce.a.a;
							return _List_fromArray(
								[
									A2($elm$virtual_dom$VirtualDom$attribute, 'nonce', nonce)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					$elm$core$List$singleton(
						$elm$virtual_dom$VirtualDom$text(cssText)))
				]));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F4(
	function (maybeNonce, elemType, properties, children) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = A2(
			$rtfeldman$elm_css$VirtualDom$Styled$toStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles));
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(styles),
			properties);
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _v1 = pairs.a;
				var str = _v1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _v1 = pairs.a;
				var firstKey = _v1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F3(
	function (maybeNonce, accumulatedStyles, keyedChildNodes) {
		var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toStyleNode, maybeNonce, accumulatedStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F4(
	function (maybeNonce, elemType, properties, keyedChildren) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A3(
			$rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles),
			keyedChildNodes);
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(styles),
			properties);
		return A3(
			$elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F5(
	function (maybeNonce, ns, elemType, properties, keyedChildren) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A3(
			$rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles),
			keyedChildNodes);
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(styles),
			properties);
		return A4(
			$elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F5(
	function (maybeNonce, ns, elemType, properties, children) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = A2(
			$rtfeldman$elm_css$VirtualDom$Styled$toStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles));
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(styles),
			properties);
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 'Unstyled':
			var plainNode = vdom.a;
			return plainNode;
		case 'Node':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyle, $elm$core$Maybe$Nothing, elemType, properties, children);
		case 'NodeNS':
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A5($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, $elm$core$Maybe$Nothing, ns, elemType, properties, children);
		case 'KeyedNode':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, $elm$core$Maybe$Nothing, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A5($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, $elm$core$Maybe$Nothing, ns, elemType, properties, children);
	}
};
var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var $author$project$Messages$FileRead = function (a) {
	return {$: 'FileRead', a: a};
};
var $author$project$Keyboard$createNewAction = F2(
	function (layout, key) {
		var replace = function (k) {
			return _Utils_eq(k.id, key.id) ? key : k;
		};
		return A2($elm$core$List$map, replace, layout);
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $author$project$KeyboardSerializer$encodeSequenceElement = function (keyPress) {
	return _List_fromArray(
		[keyPress.key, keyPress.modifier, keyPress.media]);
};
var $author$project$KeyboardSerializer$encodeSequence = function (keyPresses) {
	var length = $elm$core$List$length(keyPresses);
	var elements = A2($elm$core$List$concatMap, $author$project$KeyboardSerializer$encodeSequenceElement, keyPresses);
	return A2($elm$core$List$cons, length, elements);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$KeyCodes$standardKeyCode = 61440;
var $author$project$KeyCodes$asciiKeyCodes = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			_Utils_chr('a'),
			$author$project$KeyCodes$standardKeyCode | 4),
			_Utils_Tuple2(
			_Utils_chr('b'),
			$author$project$KeyCodes$standardKeyCode | 5),
			_Utils_Tuple2(
			_Utils_chr('c'),
			$author$project$KeyCodes$standardKeyCode | 6),
			_Utils_Tuple2(
			_Utils_chr('d'),
			$author$project$KeyCodes$standardKeyCode | 7),
			_Utils_Tuple2(
			_Utils_chr('e'),
			$author$project$KeyCodes$standardKeyCode | 8),
			_Utils_Tuple2(
			_Utils_chr('f'),
			$author$project$KeyCodes$standardKeyCode | 9),
			_Utils_Tuple2(
			_Utils_chr('g'),
			$author$project$KeyCodes$standardKeyCode | 10),
			_Utils_Tuple2(
			_Utils_chr('h'),
			$author$project$KeyCodes$standardKeyCode | 11),
			_Utils_Tuple2(
			_Utils_chr('i'),
			$author$project$KeyCodes$standardKeyCode | 12),
			_Utils_Tuple2(
			_Utils_chr('j'),
			$author$project$KeyCodes$standardKeyCode | 13),
			_Utils_Tuple2(
			_Utils_chr('k'),
			$author$project$KeyCodes$standardKeyCode | 14),
			_Utils_Tuple2(
			_Utils_chr('l'),
			$author$project$KeyCodes$standardKeyCode | 15),
			_Utils_Tuple2(
			_Utils_chr('m'),
			$author$project$KeyCodes$standardKeyCode | 16),
			_Utils_Tuple2(
			_Utils_chr('n'),
			$author$project$KeyCodes$standardKeyCode | 17),
			_Utils_Tuple2(
			_Utils_chr('o'),
			$author$project$KeyCodes$standardKeyCode | 18),
			_Utils_Tuple2(
			_Utils_chr('p'),
			$author$project$KeyCodes$standardKeyCode | 19),
			_Utils_Tuple2(
			_Utils_chr('q'),
			$author$project$KeyCodes$standardKeyCode | 20),
			_Utils_Tuple2(
			_Utils_chr('r'),
			$author$project$KeyCodes$standardKeyCode | 21),
			_Utils_Tuple2(
			_Utils_chr('s'),
			$author$project$KeyCodes$standardKeyCode | 22),
			_Utils_Tuple2(
			_Utils_chr('t'),
			$author$project$KeyCodes$standardKeyCode | 23),
			_Utils_Tuple2(
			_Utils_chr('u'),
			$author$project$KeyCodes$standardKeyCode | 24),
			_Utils_Tuple2(
			_Utils_chr('v'),
			$author$project$KeyCodes$standardKeyCode | 25),
			_Utils_Tuple2(
			_Utils_chr('w'),
			$author$project$KeyCodes$standardKeyCode | 26),
			_Utils_Tuple2(
			_Utils_chr('x'),
			$author$project$KeyCodes$standardKeyCode | 27),
			_Utils_Tuple2(
			_Utils_chr('y'),
			$author$project$KeyCodes$standardKeyCode | 28),
			_Utils_Tuple2(
			_Utils_chr('z'),
			$author$project$KeyCodes$standardKeyCode | 29),
			_Utils_Tuple2(
			_Utils_chr('1'),
			$author$project$KeyCodes$standardKeyCode | 30),
			_Utils_Tuple2(
			_Utils_chr('2'),
			$author$project$KeyCodes$standardKeyCode | 31),
			_Utils_Tuple2(
			_Utils_chr('3'),
			$author$project$KeyCodes$standardKeyCode | 32),
			_Utils_Tuple2(
			_Utils_chr('4'),
			$author$project$KeyCodes$standardKeyCode | 33),
			_Utils_Tuple2(
			_Utils_chr('5'),
			$author$project$KeyCodes$standardKeyCode | 34),
			_Utils_Tuple2(
			_Utils_chr('6'),
			$author$project$KeyCodes$standardKeyCode | 35),
			_Utils_Tuple2(
			_Utils_chr('7'),
			$author$project$KeyCodes$standardKeyCode | 36),
			_Utils_Tuple2(
			_Utils_chr('8'),
			$author$project$KeyCodes$standardKeyCode | 37),
			_Utils_Tuple2(
			_Utils_chr('9'),
			$author$project$KeyCodes$standardKeyCode | 38),
			_Utils_Tuple2(
			_Utils_chr('0'),
			$author$project$KeyCodes$standardKeyCode | 39),
			_Utils_Tuple2(
			_Utils_chr('\n'),
			$author$project$KeyCodes$standardKeyCode | 40),
			_Utils_Tuple2(
			_Utils_chr(' '),
			$author$project$KeyCodes$standardKeyCode | 44),
			_Utils_Tuple2(
			_Utils_chr('-'),
			$author$project$KeyCodes$standardKeyCode | 45),
			_Utils_Tuple2(
			_Utils_chr('='),
			$author$project$KeyCodes$standardKeyCode | 46),
			_Utils_Tuple2(
			_Utils_chr('['),
			$author$project$KeyCodes$standardKeyCode | 47),
			_Utils_Tuple2(
			_Utils_chr(']'),
			$author$project$KeyCodes$standardKeyCode | 48),
			_Utils_Tuple2(
			_Utils_chr('\\'),
			$author$project$KeyCodes$standardKeyCode | 49),
			_Utils_Tuple2(
			_Utils_chr(';'),
			$author$project$KeyCodes$standardKeyCode | 51),
			_Utils_Tuple2(
			_Utils_chr('\''),
			$author$project$KeyCodes$standardKeyCode | 52),
			_Utils_Tuple2(
			_Utils_chr('`'),
			$author$project$KeyCodes$standardKeyCode | 53),
			_Utils_Tuple2(
			_Utils_chr(','),
			$author$project$KeyCodes$standardKeyCode | 54),
			_Utils_Tuple2(
			_Utils_chr('.'),
			$author$project$KeyCodes$standardKeyCode | 55),
			_Utils_Tuple2(
			_Utils_chr('/'),
			$author$project$KeyCodes$standardKeyCode | 56)
		]));
var $author$project$KeyCodes$asciiCharToKeyCode = function (_char) {
	return A2($elm$core$Dict$get, _char, $author$project$KeyCodes$asciiKeyCodes);
};
var $author$project$KeyCodes$mediaKeyCode = 58368;
var $author$project$KeyCodes$blankMediaKeyCode = $author$project$KeyCodes$mediaKeyCode;
var $author$project$KeyCodes$modifierKeyCode = 57344;
var $author$project$KeyCodes$blankModifierKeyCode = $author$project$KeyCodes$modifierKeyCode;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Char$toLower = _Char_toLower;
var $author$project$KeyboardSerializer$charToKeyPress = function (_char) {
	var modifier = $elm$core$Char$isUpper(_char) ? 57346 : $author$project$KeyCodes$blankModifierKeyCode;
	var lowerChar = $elm$core$Char$toLower(_char);
	var maybeKeyCode = $author$project$KeyCodes$asciiCharToKeyCode(lowerChar);
	return A2(
		$elm$core$Maybe$map,
		function (k) {
			return {key: k, media: $author$project$KeyCodes$blankMediaKeyCode, modifier: modifier};
		},
		maybeKeyCode);
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$KeyboardSerializer$stringToKeyPressList = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$author$project$KeyboardSerializer$charToKeyPress,
		$elm$core$String$toList(str));
};
var $author$project$KeyboardSerializer$encodeFreetext = function (text) {
	var keyPresses = $author$project$KeyboardSerializer$stringToKeyPressList(text);
	return $author$project$KeyboardSerializer$encodeSequence(keyPresses);
};
var $author$project$KeyCodes$blankStandardKeyCode = $author$project$KeyCodes$standardKeyCode;
var $author$project$KeyCodes$isMediaKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$mediaKeyCode);
};
var $author$project$KeyCodes$isModifierKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$modifierKeyCode);
};
var $author$project$KeyCodes$controlKeyCode = 53248;
var $author$project$KeyCodes$isControlKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$controlKeyCode);
};
var $author$project$KeyCodes$layerHoldModifierKeyCode = 49152;
var $author$project$KeyCodes$isLayerHoldModifierKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$layerHoldModifierKeyCode);
};
var $author$project$KeyCodes$layerToggleModifierKeyCode = 45056;
var $author$project$KeyCodes$isLayerToggleModifierKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$layerToggleModifierKeyCode);
};
var $author$project$KeyCodes$mouseKeyCode = 40960;
var $author$project$KeyCodes$isMouseKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$mouseKeyCode);
};
var $author$project$KeyCodes$isStandardKeyCode = function (keyCode) {
	return _Utils_eq(keyCode & 65280, $author$project$KeyCodes$standardKeyCode);
};
var $author$project$KeyCodes$isStandardLayerControlOrMouseCode = function (keyCode) {
	return $author$project$KeyCodes$isStandardKeyCode(keyCode) || ($author$project$KeyCodes$isLayerHoldModifierKeyCode(keyCode) || ($author$project$KeyCodes$isLayerToggleModifierKeyCode(keyCode) || ($author$project$KeyCodes$isControlKeyCode(keyCode) || $author$project$KeyCodes$isMouseKeyCode(keyCode))));
};
var $author$project$KeyboardSerializer$encodeSingleAction = function (keyCode) {
	var standardKey = $author$project$KeyCodes$isStandardLayerControlOrMouseCode(keyCode) ? keyCode : $author$project$KeyCodes$blankStandardKeyCode;
	var modifierKey = $author$project$KeyCodes$isModifierKeyCode(keyCode) ? keyCode : $author$project$KeyCodes$blankModifierKeyCode;
	var mediaKey = $author$project$KeyCodes$isMediaKeyCode(keyCode) ? keyCode : $author$project$KeyCodes$blankMediaKeyCode;
	var length = 1;
	return _List_fromArray(
		[length, standardKey, modifierKey, mediaKey]);
};
var $author$project$KeyboardSerializer$encodeAction = function (action) {
	switch (action.$) {
		case 'Sequence':
			var keyPresses = action.b;
			return $author$project$KeyboardSerializer$encodeSequence(keyPresses);
		case 'Single':
			var keyCode = action.a;
			return $author$project$KeyboardSerializer$encodeSingleAction(keyCode);
		default:
			var text = action.a;
			return $author$project$KeyboardSerializer$encodeFreetext(text);
	}
};
var $author$project$KeyboardSerializer$encodeKey = function (key) {
	var encodeMaybeAction = F2(
		function (maybeAction, layer) {
			if (maybeAction.$ === 'Just') {
				var action = maybeAction.a;
				return _Utils_ap(
					_List_fromArray(
						[layer, key.row, key.col]),
					$author$project$KeyboardSerializer$encodeAction(action));
			} else {
				return _List_Nil;
			}
		});
	var encodeLayerModifierAction = function (code) {
		return _Utils_ap(
			_List_fromArray(
				[0, key.row, key.col]),
			$author$project$KeyboardSerializer$encodeSingleAction(code));
	};
	var _v0 = key.actions;
	if (_v0.$ === 'LayerModifier') {
		var code = _v0.a;
		return encodeLayerModifierAction(code);
	} else {
		var layers = _v0.a;
		return _Utils_ap(
			A2(encodeMaybeAction, layers.actionLayer1, 0),
			_Utils_ap(
				A2(encodeMaybeAction, layers.actionLayer2, 1),
				A2(encodeMaybeAction, layers.actionLayer3, 2)));
	}
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $author$project$KeyboardSerializer$byteToHexAscii = function (_byte) {
	var lowBits = 15 & _byte;
	var intToHexChar = function (value) {
		return $elm$core$Char$fromCode(
			(value < 10) ? (48 + value) : ((65 + value) - 10));
	};
	var highBits = _byte >> 4;
	return $elm$core$String$fromList(
		_List_fromArray(
			[
				intToHexChar(highBits),
				intToHexChar(lowBits)
			]));
};
var $author$project$KeyboardSerializer$encodeUint16AsAscii = function (value) {
	var lowByte = 255 & value;
	var highByte = value >> 8;
	return _Utils_ap(
		$author$project$KeyboardSerializer$byteToHexAscii(highByte),
		$author$project$KeyboardSerializer$byteToHexAscii(lowByte));
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$KeyboardSerializer$serializeLayout = function (layout) {
	var numKeys = A3(
		$elm$core$List$foldl,
		F2(
			function (key, sum) {
				var countMaybe = function (maybeAction) {
					if (maybeAction.$ === 'Just') {
						return 1;
					} else {
						return 0;
					}
				};
				var _v0 = key.actions;
				if (_v0.$ === 'LayerModifier') {
					return sum + 1;
				} else {
					var layers = _v0.a;
					return ((sum + countMaybe(layers.actionLayer1)) + countMaybe(layers.actionLayer2)) + countMaybe(layers.actionLayer3);
				}
			}),
		0,
		layout);
	var keysIntSequence = A2($elm$core$List$concatMap, $author$project$KeyboardSerializer$encodeKey, layout);
	var keysCheckSum = A2(
		$elm$core$Basics$modBy,
		65500,
		$elm$core$List$sum(keysIntSequence));
	var keysBytes = _Utils_ap(
		_List_fromArray(
			[
				$author$project$KeyboardSerializer$encodeUint16AsAscii(numKeys),
				$author$project$KeyboardSerializer$encodeUint16AsAscii(keysCheckSum)
			]),
		A2($elm$core$List$map, $author$project$KeyboardSerializer$encodeUint16AsAscii, keysIntSequence));
	return $elm$core$String$concat(keysBytes);
};
var $author$project$KeyboardSerializer$serializeSetting = function (_v0) {
	var settingNumber = _v0.a;
	var field = _v0.c;
	var value = function () {
		switch (field.$) {
			case 'IntegerField':
				var v = field.a;
				return v;
			case 'BooleanField':
				var v = field.a;
				return v ? 1 : 0;
			default:
				var v = field.a;
				return v;
		}
	}();
	return _List_fromArray(
		[settingNumber, value]);
};
var $author$project$KeyboardSerializer$serializeSettingsGroup = function (group) {
	var settingsList = A2($elm$core$List$concatMap, $author$project$KeyboardSerializer$serializeSetting, group.settings);
	return settingsList;
};
var $author$project$KeyboardSerializer$settingsStartWord = 'DEADBEEFDEADBEEF';
var $author$project$KeyboardSerializer$serializeSettings = function (settings) {
	var settingsList = A2($elm$core$List$map, $author$project$KeyboardSerializer$serializeSettingsGroup, settings);
	var settingsListFlat = $elm$core$List$concat(settingsList);
	var settingsAscii = A2($elm$core$List$map, $author$project$KeyboardSerializer$encodeUint16AsAscii, settingsListFlat);
	var numSettings = ($elm$core$List$length(settingsListFlat) / 2) | 0;
	var checkSum = A2(
		$elm$core$Basics$modBy,
		65500,
		$elm$core$List$sum(settingsListFlat));
	return _Utils_ap(
		$author$project$KeyboardSerializer$settingsStartWord,
		_Utils_ap(
			$author$project$KeyboardSerializer$encodeUint16AsAscii(numSettings),
			_Utils_ap(
				$author$project$KeyboardSerializer$encodeUint16AsAscii(checkSum),
				$elm$core$String$concat(settingsAscii))));
};
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$file$File$Download$string = F3(
	function (name, mime, content) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$never,
			A3(_File_download, name, mime, content));
	});
var $author$project$FileView$exportConfiguration = function (model) {
	var serializedSettings = $author$project$KeyboardSerializer$serializeSettings(model.settings);
	var serializedLayout = $author$project$KeyboardSerializer$serializeLayout(model.layout);
	var serializedContent = _Utils_ap(serializedLayout, serializedSettings);
	return _Utils_Tuple2(
		model,
		A3($elm$file$File$Download$string, model.name + '.zkb', 'text/plain', serializedContent));
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $author$project$Language$English = {$: 'English'};
var $author$project$Model$Model = F7(
	function (layout, settings, currentLayerIndex, selectedKey, name, hovering, language) {
		return {currentLayerIndex: currentLayerIndex, hovering: hovering, language: language, layout: layout, name: name, selectedKey: selectedKey, settings: settings};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Keyboard$LayerModifier = function (a) {
	return {$: 'LayerModifier', a: a};
};
var $author$project$LayoutJSONDecoder$keyCodeDecoder = $elm$json$Json$Decode$int;
var $author$project$Keyboard$Layers = F3(
	function (actionLayer1, actionLayer2, actionLayer3) {
		return {actionLayer1: actionLayer1, actionLayer2: actionLayer2, actionLayer3: actionLayer3};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Keyboard$FreeText = function (a) {
	return {$: 'FreeText', a: a};
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$LayoutJSONDecoder$freeTextDecoder = A2($elm$json$Json$Decode$map, $author$project$Keyboard$FreeText, $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Keyboard$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $author$project$Keyboard$KeyPress = F3(
	function (key, modifier, media) {
		return {key: key, media: media, modifier: modifier};
	});
var $author$project$LayoutJSONDecoder$keypressDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Keyboard$KeyPress,
	A2($elm$json$Json$Decode$field, 'keyCode', $author$project$LayoutJSONDecoder$keyCodeDecoder),
	A2($elm$json$Json$Decode$field, 'modifier', $author$project$LayoutJSONDecoder$keyCodeDecoder),
	A2($elm$json$Json$Decode$field, 'media', $author$project$LayoutJSONDecoder$keyCodeDecoder));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$LayoutJSONDecoder$keypressListDecoder = $elm$json$Json$Decode$list($author$project$LayoutJSONDecoder$keypressDecoder);
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $author$project$LayoutJSONDecoder$sequenceDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Keyboard$Sequence,
	A2($elm$json$Json$Decode$field, 'rawString', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'presses', $author$project$LayoutJSONDecoder$keypressListDecoder),
	$elm$json$Json$Decode$nullable(
		A2($elm$json$Json$Decode$field, 'error', $elm$json$Json$Decode$string)));
var $author$project$LayoutJSONDecoder$singleKeyCodeDecoder = A2($elm$json$Json$Decode$map, $author$project$Keyboard$Single, $author$project$LayoutJSONDecoder$keyCodeDecoder);
var $author$project$LayoutJSONDecoder$actionDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[$author$project$LayoutJSONDecoder$singleKeyCodeDecoder, $author$project$LayoutJSONDecoder$sequenceDecoder, $author$project$LayoutJSONDecoder$freeTextDecoder]));
var $author$project$LayoutJSONDecoder$maybeActionDecoder = $elm$json$Json$Decode$nullable($author$project$LayoutJSONDecoder$actionDecoder);
var $author$project$LayoutJSONDecoder$layersDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Keyboard$Layers,
	A2($elm$json$Json$Decode$field, 'actionLayer1', $author$project$LayoutJSONDecoder$maybeActionDecoder),
	A2($elm$json$Json$Decode$field, 'actionLayer2', $author$project$LayoutJSONDecoder$maybeActionDecoder),
	A2($elm$json$Json$Decode$field, 'actionLayer3', $author$project$LayoutJSONDecoder$maybeActionDecoder));
var $author$project$LayoutJSONDecoder$keyActionsDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			$author$project$Keyboard$LayerModifier,
			A2($elm$json$Json$Decode$field, 'layerModifier', $author$project$LayoutJSONDecoder$keyCodeDecoder)),
			A2($elm$json$Json$Decode$map, $author$project$Keyboard$LayerAction, $author$project$LayoutJSONDecoder$layersDecoder)
		]));
var $elm$json$Json$Decode$map8 = _Json_map8;
var $author$project$LayoutJSONDecoder$keyDecoder = A9(
	$elm$json$Json$Decode$map8,
	$author$project$Keyboard$Key,
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'row', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'col', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'actions', $author$project$LayoutJSONDecoder$keyActionsDecoder));
var $author$project$LayoutJSONDecoder$layoutDecoder = $elm$json$Json$Decode$list($author$project$LayoutJSONDecoder$keyDecoder);
var $elm$json$Json$Decode$map7 = _Json_map7;
var $author$project$Settings$SettingsGroup = F2(
	function (name, settings) {
		return {name: name, settings: settings};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$LayoutJSONDecoder$booleanSettingsFieldDecoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$Settings$BooleanField,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$bool));
var $author$project$LayoutJSONDecoder$enumSettingsFieldDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Settings$EnumField,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$int),
	A2(
		$elm$json$Json$Decode$field,
		'options',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
var $author$project$LayoutJSONDecoder$integerSettingsFieldDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Settings$IntegerField,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'min', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'max', $elm$json$Json$Decode$int));
var $author$project$LayoutJSONDecoder$settingsFieldDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[$author$project$LayoutJSONDecoder$integerSettingsFieldDecoder, $author$project$LayoutJSONDecoder$booleanSettingsFieldDecoder, $author$project$LayoutJSONDecoder$enumSettingsFieldDecoder]));
var $author$project$LayoutJSONDecoder$settingsTupleDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (a, b, c) {
			return _Utils_Tuple3(a, b, c);
		}),
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'field', $author$project$LayoutJSONDecoder$settingsFieldDecoder));
var $author$project$LayoutJSONDecoder$settingsTupleListDecoder = $elm$json$Json$Decode$list($author$project$LayoutJSONDecoder$settingsTupleDecoder);
var $author$project$LayoutJSONDecoder$settingsGroupDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Settings$SettingsGroup,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'settings', $author$project$LayoutJSONDecoder$settingsTupleListDecoder));
var $author$project$LayoutJSONDecoder$settingsDecoder = $elm$json$Json$Decode$list($author$project$LayoutJSONDecoder$settingsGroupDecoder);
var $author$project$LayoutJSONDecoder$modelDecoder = function (name) {
	return A8(
		$elm$json$Json$Decode$map7,
		$author$project$Model$Model,
		A2($elm$json$Json$Decode$field, 'layout', $author$project$LayoutJSONDecoder$layoutDecoder),
		A2($elm$json$Json$Decode$field, 'settings', $author$project$LayoutJSONDecoder$settingsDecoder),
		$elm$json$Json$Decode$succeed(0),
		$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing),
		$elm$json$Json$Decode$succeed(name),
		$elm$json$Json$Decode$succeed(false),
		$elm$json$Json$Decode$succeed($author$project$Language$English));
};
var $author$project$LayoutJSONDecoder$decodeModel = F2(
	function (json, name) {
		var result = A2(
			$elm$json$Json$Decode$decodeString,
			$author$project$LayoutJSONDecoder$modelDecoder(name),
			json);
		if (result.$ === 'Ok') {
			var model = result.a;
			return $elm$core$Result$Ok(model);
		} else {
			var err = result.a;
			return $elm$core$Result$Err(
				$elm$json$Json$Decode$errorToString(err));
		}
	});
var $author$project$FileView$loadProjectFile = F2(
	function (content, model) {
		var _v0 = A2($author$project$LayoutJSONDecoder$decodeModel, content, model.name);
		if (_v0.$ === 'Ok') {
			var newModel = _v0.a;
			return _Utils_Tuple2(newModel, $elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $elm$file$File$name = _File_name;
var $author$project$LayoutJSONEncoder$encodeFreeText = function (text) {
	return $elm$json$Json$Encode$string(text);
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$LayoutJSONEncoder$encodeKeyPress = function (press) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'key',
				$elm$json$Json$Encode$int(press.key)),
				_Utils_Tuple2(
				'modifier',
				$elm$json$Json$Encode$int(press.modifier)),
				_Utils_Tuple2(
				'media',
				$elm$json$Json$Encode$int(press.media))
			]));
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$LayoutJSONEncoder$encodeSequence = F3(
	function (rawString, presses, maybeError) {
		var error = function () {
			if (maybeError.$ === 'Just') {
				var err = maybeError.a;
				return $elm$json$Json$Encode$string(err);
			} else {
				return $elm$json$Json$Encode$null;
			}
		}();
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'rawString',
					$elm$json$Json$Encode$string(rawString)),
					_Utils_Tuple2(
					'presses',
					A2($elm$json$Json$Encode$list, $author$project$LayoutJSONEncoder$encodeKeyPress, presses)),
					_Utils_Tuple2('error', error)
				]));
	});
var $author$project$LayoutJSONEncoder$encodeSingleCode = function (code) {
	return $elm$json$Json$Encode$int(code);
};
var $author$project$LayoutJSONEncoder$encodeMaybeAction = function (maybeAction) {
	if (maybeAction.$ === 'Just') {
		var action = maybeAction.a;
		switch (action.$) {
			case 'Single':
				var code = action.a;
				return $author$project$LayoutJSONEncoder$encodeSingleCode(code);
			case 'Sequence':
				var rawString = action.a;
				var presses = action.b;
				var error = action.c;
				return A3($author$project$LayoutJSONEncoder$encodeSequence, rawString, presses, error);
			default:
				var text = action.a;
				return $author$project$LayoutJSONEncoder$encodeFreeText(text);
		}
	} else {
		return $elm$json$Json$Encode$null;
	}
};
var $author$project$LayoutJSONEncoder$encodeKeyActions = function (actions) {
	if (actions.$ === 'LayerModifier') {
		var code = actions.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'layerModifier',
					$elm$json$Json$Encode$int(code))
				]));
	} else {
		var layers = actions.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'actionLayer1',
					$author$project$LayoutJSONEncoder$encodeMaybeAction(layers.actionLayer1)),
					_Utils_Tuple2(
					'actionLayer2',
					$author$project$LayoutJSONEncoder$encodeMaybeAction(layers.actionLayer2)),
					_Utils_Tuple2(
					'actionLayer3',
					$author$project$LayoutJSONEncoder$encodeMaybeAction(layers.actionLayer3))
				]));
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$LayoutJSONEncoder$encodeKey = function (key) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$int(key.id)),
				_Utils_Tuple2(
				'x',
				$elm$json$Json$Encode$float(key.x)),
				_Utils_Tuple2(
				'y',
				$elm$json$Json$Encode$float(key.y)),
				_Utils_Tuple2(
				'row',
				$elm$json$Json$Encode$int(key.row)),
				_Utils_Tuple2(
				'col',
				$elm$json$Json$Encode$int(key.col)),
				_Utils_Tuple2(
				'height',
				$elm$json$Json$Encode$float(key.height)),
				_Utils_Tuple2(
				'width',
				$elm$json$Json$Encode$float(key.width)),
				_Utils_Tuple2(
				'actions',
				$author$project$LayoutJSONEncoder$encodeKeyActions(key.actions))
			]));
};
var $author$project$LayoutJSONEncoder$encodeLayout = function (layout) {
	return A2($elm$json$Json$Encode$list, $author$project$LayoutJSONEncoder$encodeKey, layout);
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$LayoutJSONEncoder$encodeSettingsField = function (field) {
	switch (field.$) {
		case 'IntegerField':
			var value = field.a;
			var min = field.b;
			var max = field.c;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'value',
						$elm$json$Json$Encode$int(value)),
						_Utils_Tuple2(
						'min',
						$elm$json$Json$Encode$int(min)),
						_Utils_Tuple2(
						'max',
						$elm$json$Json$Encode$int(max))
					]));
		case 'BooleanField':
			var value = field.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'value',
						$elm$json$Json$Encode$bool(value))
					]));
		default:
			var value = field.a;
			var options = field.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'value',
						$elm$json$Json$Encode$int(value)),
						_Utils_Tuple2(
						'options',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, options))
					]));
	}
};
var $author$project$LayoutJSONEncoder$encodeSettingsTuple = function (_v0) {
	var id = _v0.a;
	var name = _v0.b;
	var field = _v0.c;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$int(id)),
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(name)),
				_Utils_Tuple2(
				'field',
				$author$project$LayoutJSONEncoder$encodeSettingsField(field))
			]));
};
var $author$project$LayoutJSONEncoder$encodeSettingsList = function (settings) {
	return A2($elm$json$Json$Encode$list, $author$project$LayoutJSONEncoder$encodeSettingsTuple, settings);
};
var $author$project$LayoutJSONEncoder$encodeSettingsGroup = function (group) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(group.name)),
				_Utils_Tuple2(
				'settings',
				$author$project$LayoutJSONEncoder$encodeSettingsList(group.settings))
			]));
};
var $author$project$LayoutJSONEncoder$encodeSettings = function (settings) {
	return A2($elm$json$Json$Encode$list, $author$project$LayoutJSONEncoder$encodeSettingsGroup, settings);
};
var $author$project$LayoutJSONEncoder$encodeModel = function (model) {
	return A2(
		$elm$json$Json$Encode$encode,
		4,
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'layout',
					$author$project$LayoutJSONEncoder$encodeLayout(model.layout)),
					_Utils_Tuple2(
					'settings',
					$author$project$LayoutJSONEncoder$encodeSettings(model.settings))
				])));
};
var $author$project$FileView$saveProjectFile = function (model) {
	var json = $author$project$LayoutJSONEncoder$encodeModel(model);
	return _Utils_Tuple2(
		model,
		A3($elm$file$File$Download$string, model.name + '.json', 'application/json', json));
};
var $author$project$Messages$Open = function (a) {
	return {$: 'Open', a: a};
};
var $elm$file$File$Select$file = F2(
	function (mimes, toMsg) {
		return A2(
			$elm$core$Task$perform,
			toMsg,
			_File_uploadOne(mimes));
	});
var $author$project$FileView$selectProjectFile = A2(
	$elm$file$File$Select$file,
	_List_fromArray(
		['application/json']),
	$author$project$Messages$Open);
var $author$project$Keyboard$defaultSingleAction = $author$project$Keyboard$Single(61444);
var $author$project$Keyboard$setLayerAction = F3(
	function (layerIndex, layers, maybeAction) {
		return (!layerIndex) ? _Utils_update(
			layers,
			{actionLayer1: maybeAction}) : ((layerIndex === 1) ? _Utils_update(
			layers,
			{actionLayer2: maybeAction}) : ((layerIndex === 2) ? _Utils_update(
			layers,
			{actionLayer3: maybeAction}) : layers));
	});
var $author$project$Keyboard$setKeyAction = F3(
	function (key, layerIndex, maybeAction) {
		var blankLayers = {actionLayer1: $elm$core$Maybe$Nothing, actionLayer2: $elm$core$Maybe$Nothing, actionLayer3: $elm$core$Maybe$Nothing};
		var newLayers = A3($author$project$Keyboard$setLayerAction, layerIndex, blankLayers, maybeAction);
		var _v0 = key.actions;
		if (_v0.$ === 'LayerModifier') {
			return _Utils_update(
				key,
				{
					actions: $author$project$Keyboard$LayerAction(newLayers)
				});
		} else {
			var layers = _v0.a;
			return _Utils_update(
				key,
				{
					actions: $author$project$Keyboard$LayerAction(
						A3($author$project$Keyboard$setLayerAction, layerIndex, layers, maybeAction))
				});
		}
	});
var $author$project$Keyboard$setDefaultAction = F2(
	function (key, layerIndex) {
		return A3(
			$author$project$Keyboard$setKeyAction,
			key,
			layerIndex,
			$elm$core$Maybe$Just($author$project$Keyboard$defaultSingleAction));
	});
var $author$project$Keyboard$setLayerModifier = F2(
	function (key, keyCode) {
		return _Utils_update(
			key,
			{
				actions: $author$project$Keyboard$LayerModifier(keyCode)
			});
	});
var $elm$file$File$toString = _File_toString;
var $author$project$Settings$updateBooleanSetting = F3(
	function (settingNumber, value, oldSettings) {
		return A2(
			$elm$core$List$map,
			function (group) {
				return _Utils_update(
					group,
					{
						settings: A2(
							$elm$core$List$map,
							function (_v0) {
								var n = _v0.a;
								var name = _v0.b;
								var field = _v0.c;
								return _Utils_eq(n, settingNumber) ? _Utils_Tuple3(
									n,
									name,
									$author$project$Settings$BooleanField(value)) : _Utils_Tuple3(n, name, field);
							},
							group.settings)
					});
			},
			oldSettings);
	});
var $author$project$Settings$updateEnumSetting = F4(
	function (settingNumber, value, strOptions, oldSettings) {
		return A2(
			$elm$core$List$map,
			function (group) {
				return _Utils_update(
					group,
					{
						settings: A2(
							$elm$core$List$map,
							function (_v0) {
								var n = _v0.a;
								var name = _v0.b;
								var field = _v0.c;
								return _Utils_eq(n, settingNumber) ? _Utils_Tuple3(
									n,
									name,
									A2($author$project$Settings$EnumField, value, strOptions)) : _Utils_Tuple3(n, name, field);
							},
							group.settings)
					});
			},
			oldSettings);
	});
var $author$project$Settings$updateIntegerSetting = F5(
	function (settingNumber, value, minValue, maxValue, oldSettings) {
		return A2(
			$elm$core$List$map,
			function (group) {
				return _Utils_update(
					group,
					{
						settings: A2(
							$elm$core$List$map,
							function (_v0) {
								var n = _v0.a;
								var name = _v0.b;
								var field = _v0.c;
								return _Utils_eq(n, settingNumber) ? _Utils_Tuple3(
									n,
									name,
									A3($author$project$Settings$IntegerField, value, minValue, maxValue)) : _Utils_Tuple3(n, name, field);
							},
							group.settings)
					});
			},
			oldSettings);
	});
var $author$project$Keyboard$updateKeyInLayout = F2(
	function (layout, key) {
		var replace = function (k) {
			return _Utils_eq(k.id, key.id) ? key : k;
		};
		return A2($elm$core$List$map, replace, layout);
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'KeyClicked':
				var key = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							selectedKey: $elm$core$Maybe$Just(key)
						}),
					$elm$core$Platform$Cmd$none);
			case 'CreateAction':
				var key = msg.a;
				var newKey = A2($author$project$Keyboard$setDefaultAction, key, model.currentLayerIndex);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							layout: A2($author$project$Keyboard$createNewAction, model.layout, newKey),
							selectedKey: $elm$core$Maybe$Just(newKey)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ResetAction':
				var key = msg.a;
				var newKey = A3($author$project$Keyboard$setKeyAction, key, model.currentLayerIndex, $elm$core$Maybe$Nothing);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							layout: A2($author$project$Keyboard$updateKeyInLayout, model.layout, newKey),
							selectedKey: $elm$core$Maybe$Just(newKey)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetKeyAction':
				var key = msg.a;
				var action = msg.b;
				var newKey = A3(
					$author$project$Keyboard$setKeyAction,
					key,
					model.currentLayerIndex,
					$elm$core$Maybe$Just(action));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							layout: A2($author$project$Keyboard$updateKeyInLayout, model.layout, newKey),
							selectedKey: $elm$core$Maybe$Just(newKey)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetLayerModifier':
				var key = msg.a;
				var keyCode = msg.b;
				var newKey = A2($author$project$Keyboard$setLayerModifier, key, keyCode);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							layout: A2($author$project$Keyboard$updateKeyInLayout, model.layout, newKey),
							selectedKey: $elm$core$Maybe$Just(newKey)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetLayer':
				var index = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{currentLayerIndex: index}),
					$elm$core$Platform$Cmd$none);
			case 'Export':
				return $author$project$FileView$exportConfiguration(model);
			case 'Save':
				return $author$project$FileView$saveProjectFile(model);
			case 'ChangeName':
				var name = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{name: name}),
					$elm$core$Platform$Cmd$none);
			case 'SelectProjectFile':
				return _Utils_Tuple2(model, $author$project$FileView$selectProjectFile);
			case 'Open':
				var file = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							name: $elm$file$File$name(file)
						}),
					A2(
						$elm$core$Task$perform,
						$author$project$Messages$FileRead,
						$elm$file$File$toString(file)));
			case 'FileRead':
				var content = msg.a;
				return A2($author$project$FileView$loadProjectFile, content, model);
			case 'DragEnter':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{hovering: true}),
					$elm$core$Platform$Cmd$none);
			case 'DragLeave':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{hovering: false}),
					$elm$core$Platform$Cmd$none);
			case 'DroppedFiles':
				var file = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							hovering: false,
							name: $elm$file$File$name(file)
						}),
					A2(
						$elm$core$Task$perform,
						$author$project$Messages$FileRead,
						$elm$file$File$toString(file)));
			case 'UpdateIntegerSetting':
				var settingNumber = msg.a;
				var minValue = msg.b;
				var maxValue = msg.c;
				var value = msg.d;
				var valueInt = A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$String$toInt(value));
				var newSettings = A5($author$project$Settings$updateIntegerSetting, settingNumber, valueInt, minValue, maxValue, model.settings);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{settings: newSettings}),
					$elm$core$Platform$Cmd$none);
			case 'UpdateBooleanSetting':
				var settingNumber = msg.a;
				var value = msg.b;
				var newSettings = A3($author$project$Settings$updateBooleanSetting, settingNumber, value, model.settings);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{settings: newSettings}),
					$elm$core$Platform$Cmd$none);
			case 'UpdateEnumSetting':
				var settingNumber = msg.a;
				var value = msg.b;
				var strOptions = msg.c;
				var newSettings = A4($author$project$Settings$updateEnumSetting, settingNumber, value, strOptions, model.settings);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{settings: newSettings}),
					$elm$core$Platform$Cmd$none);
			default:
				var language = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{language: language}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 'Attribute', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$property, key, value),
			false,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$class = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('className');
var $author$project$Messages$DragEnter = {$: 'DragEnter'};
var $author$project$Messages$DragLeave = {$: 'DragLeave'};
var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 'Node', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node('div');
var $author$project$Messages$DroppedFiles = F2(
	function (a, b) {
		return {$: 'DroppedFiles', a: a, b: b};
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$file$File$decoder = _File_decoder;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$oneOrMoreHelp = F2(
	function (toValue, xs) {
		if (!xs.b) {
			return $elm$json$Json$Decode$fail('a ARRAY with at least ONE element');
		} else {
			var y = xs.a;
			var ys = xs.b;
			return $elm$json$Json$Decode$succeed(
				A2(toValue, y, ys));
		}
	});
var $elm$json$Json$Decode$oneOrMore = F2(
	function (toValue, decoder) {
		return A2(
			$elm$json$Json$Decode$andThen,
			$elm$json$Json$Decode$oneOrMoreHelp(toValue),
			$elm$json$Json$Decode$list(decoder));
	});
var $author$project$UI$dropDecoder = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['dataTransfer', 'files']),
	A2($elm$json$Json$Decode$oneOrMore, $author$project$Messages$DroppedFiles, $elm$file$File$decoder));
var $rtfeldman$elm_css$Html$Styled$h1 = $rtfeldman$elm_css$Html$Styled$node('h1');
var $author$project$UI$hijack = function (msg) {
	return _Utils_Tuple2(msg, true);
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $rtfeldman$elm_css$VirtualDom$Styled$on = F2(
	function (eventName, handler) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$on, eventName, handler),
			false,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $author$project$UI$hijackOn = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$Events$preventDefaultOn,
			event,
			A2($elm$json$Json$Decode$map, $author$project$UI$hijack, decoder));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		$elm$virtual_dom$VirtualDom$text(str));
};
var $rtfeldman$elm_css$Html$Styled$text = $rtfeldman$elm_css$VirtualDom$Styled$text;
var $author$project$UI$configuratorView = F7(
	function (name, hovering, viewControl, keyboardView, inputView, fileView, settingsView) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					A2(
					$author$project$UI$hijackOn,
					'dragenter',
					$elm$json$Json$Decode$succeed($author$project$Messages$DragEnter)),
					A2(
					$author$project$UI$hijackOn,
					'dragover',
					$elm$json$Json$Decode$succeed($author$project$Messages$DragEnter)),
					A2(
					$author$project$UI$hijackOn,
					'dragleave',
					$elm$json$Json$Decode$succeed($author$project$Messages$DragLeave)),
					A2($author$project$UI$hijackOn, 'drop', $author$project$UI$dropDecoder)
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$h1,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('whiteText')
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(name)
						])),
					viewControl,
					keyboardView,
					inputView,
					fileView,
					settingsView
				]));
	});
var $author$project$Messages$ChangeName = function (a) {
	return {$: 'ChangeName', a: a};
};
var $author$project$Messages$Export = {$: 'Export'};
var $author$project$Messages$Save = {$: 'Save'};
var $author$project$Messages$SelectProjectFile = {$: 'SelectProjectFile'};
var $rtfeldman$elm_css$Html$Styled$button = $rtfeldman$elm_css$Html$Styled$node('button');
var $rtfeldman$elm_css$Html$Styled$input = $rtfeldman$elm_css$Html$Styled$node('input');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $rtfeldman$elm_css$Html$Styled$Events$on = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $rtfeldman$elm_css$Html$Styled$Events$onClick = function (msg) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $rtfeldman$elm_css$Html$Styled$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $rtfeldman$elm_css$Html$Styled$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $rtfeldman$elm_css$Html$Styled$Events$onInput = function (tagger) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$rtfeldman$elm_css$Html$Styled$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $rtfeldman$elm_css$Html$Styled$Events$targetValue)));
};
var $rtfeldman$elm_css$Html$Styled$Attributes$placeholder = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('placeholder');
var $rtfeldman$elm_css$Html$Styled$Attributes$type_ = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('type');
var $rtfeldman$elm_css$Html$Styled$Attributes$value = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('value');
var $author$project$FileView$fileView = function (name) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$class('fileViewControl')
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$button,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$class('primaryButton'),
						$rtfeldman$elm_css$Html$Styled$Events$onClick($author$project$Messages$Export)
					]),
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$text('Export')
					])),
				A2(
				$rtfeldman$elm_css$Html$Styled$button,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$class('primaryButton'),
						$rtfeldman$elm_css$Html$Styled$Events$onClick($author$project$Messages$Save)
					]),
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$text('Save project')
					])),
				A2(
				$rtfeldman$elm_css$Html$Styled$button,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$class('primaryButton'),
						$rtfeldman$elm_css$Html$Styled$Events$onClick($author$project$Messages$SelectProjectFile)
					]),
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$text('Open project')
					])),
				A2(
				$rtfeldman$elm_css$Html$Styled$input,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$type_('text'),
						$rtfeldman$elm_css$Html$Styled$Attributes$placeholder('Name your configuration'),
						$rtfeldman$elm_css$Html$Styled$Events$onInput($author$project$Messages$ChangeName),
						$rtfeldman$elm_css$Html$Styled$Attributes$value(name)
					]),
				_List_Nil)
			]));
};
var $author$project$Messages$CreateAction = function (a) {
	return {$: 'CreateAction', a: a};
};
var $author$project$Messages$ResetAction = function (a) {
	return {$: 'ResetAction', a: a};
};
var $author$project$Messages$SetKeyAction = F2(
	function (a, b) {
		return {$: 'SetKeyAction', a: a, b: b};
	});
var $author$project$Messages$SetLayerModifier = F2(
	function (a, b) {
		return {$: 'SetLayerModifier', a: a, b: b};
	});
var $author$project$Keyboard$defaultFreeTextAction = $author$project$Keyboard$FreeText('');
var $author$project$Keyboard$defaultSequenceAction = A3($author$project$Keyboard$Sequence, '', _List_Nil, $elm$core$Maybe$Nothing);
var $rtfeldman$elm_css$Html$Styled$Attributes$name = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('name');
var $rtfeldman$elm_css$Html$Styled$option = $rtfeldman$elm_css$Html$Styled$node('option');
var $rtfeldman$elm_css$Html$Styled$select = $rtfeldman$elm_css$Html$Styled$node('select');
var $rtfeldman$elm_css$Html$Styled$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$selected = $rtfeldman$elm_css$Html$Styled$Attributes$boolProperty('selected');
var $author$project$Keyboard$selectedLayerAction = F2(
	function (layers, layerIndex) {
		return (!layerIndex) ? layers.actionLayer1 : ((layerIndex === 1) ? layers.actionLayer2 : ((layerIndex === 2) ? layers.actionLayer3 : $elm$core$Maybe$Nothing));
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _v0) {
		var keyframesByName = _v0.a;
		var declarations = _v0.b;
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var _v2 = declaration.a;
				var properties = _v2.c;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'MediaRule':
				var styleBlocks = declaration.b;
				return A2(
					$elm$core$List$all,
					function (_v3) {
						var properties = _v3.c;
						return $elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'SupportsRule':
				var otherDeclarations = declaration.b;
				return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'DocumentRule':
				return _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'PageRule':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'FontFace':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'Keyframes':
				var record = declaration.a;
				return $elm$core$String$isEmpty(record.declaration) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, record.name, record.declaration, keyframesByName),
					declarations);
			case 'Viewport':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'CounterStyle':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					$elm$core$List$all,
					function (_v4) {
						var properties = _v4.b;
						return $elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
		}
	});
var $rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 'Keyframes', a: a};
};
var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			$elm$core$List$append,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var decl = _v0.b;
					return $rtfeldman$elm_css$Css$Structure$Keyframes(
						{declaration: decl, name: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactDeclarations = function (declarations) {
	var _v0 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v0.a;
	var compactedDeclarations = _v0.b;
	return A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
};
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var declarations = _v0.declarations;
	return {
		charset: charset,
		declarations: $rtfeldman$elm_css$Css$Structure$compactDeclarations(declarations),
		imports: imports,
		namespaces: namespaces
	};
};
var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var $rtfeldman$elm_css$Css$String$mapJoinHelp = F4(
	function (map, sep, strs, result) {
		mapJoinHelp:
		while (true) {
			if (!strs.b) {
				return result;
			} else {
				if (!strs.b.b) {
					var first = strs.a;
					return result + (map(first) + '');
				} else {
					var first = strs.a;
					var rest = strs.b;
					var $temp$map = map,
						$temp$sep = sep,
						$temp$strs = rest,
						$temp$result = result + (map(first) + (sep + ''));
					map = $temp$map;
					sep = $temp$sep;
					strs = $temp$strs;
					result = $temp$result;
					continue mapJoinHelp;
				}
			}
		}
	});
var $rtfeldman$elm_css$Css$String$mapJoin = F3(
	function (map, sep, strs) {
		return A4($rtfeldman$elm_css$Css$String$mapJoinHelp, map, sep, strs, '');
	});
var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.feature + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.value)) + ')'));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType.$) {
		case 'Print':
			return 'print';
		case 'Screen':
			return 'screen';
		default:
			return 'speech';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				$elm$core$String$join,
				' and ',
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 'AllQuery':
			var expressions = mediaQuery.a;
			return A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, ' and ', expressions);
		case 'OnlyQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 'NotQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var $rtfeldman$elm_css$Css$Structure$Output$importToString = function (_v0) {
	var name = _v0.a;
	var mediaQueries = _v0.b;
	return A3(
		$rtfeldman$elm_css$Css$String$mapJoin,
		$rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
		'\n',
		mediaQueries);
};
var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_v0) {
	var prefix = _v0.a;
	var str = _v0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A3(
		$rtfeldman$elm_css$Css$String$mapJoin,
		function (_v0) {
			var prop = _v0.a;
			return prop + ';';
		},
		'',
		properties);
};
var $elm$core$String$append = _String_append;
var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_v0) {
	var str = _v0.a;
	return '::' + str;
};
var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator.$) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 'ClassSelector':
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 'IdSelector':
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 'PseudoClassSelector':
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 'TypeSelectorSequence':
			var str = simpleSelectorSequence.a.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return _Utils_ap(
				str,
				A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, '', repeatableSimpleSelectors));
		case 'UniversalSelectorSequence':
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, '', repeatableSimpleSelectors);
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return _Utils_ap(
				str,
				A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, '', repeatableSimpleSelectors));
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_v0) {
	var combinator = _v0.a;
	var sequence = _v0.b;
	return $rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator) + (' ' + $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence));
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_v0) {
	var simpleSelectorSequence = _v0.a;
	var chain = _v0.b;
	var pseudoElement = _v0.c;
	var segments = A2(
		$elm$core$List$cons,
		$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		$elm$core$Maybe$withDefault,
		'',
		A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement));
	return A2(
		$elm$core$String$append,
		A2($elm$core$String$join, ' ', segments),
		pseudoElementsString);
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = function (_v0) {
	var firstSelector = _v0.a;
	var otherSelectors = _v0.b;
	var properties = _v0.c;
	var selectorStr = A3(
		$rtfeldman$elm_css$Css$String$mapJoin,
		$rtfeldman$elm_css$Css$Structure$Output$selectorToString,
		',',
		A2($elm$core$List$cons, firstSelector, otherSelectors));
	return selectorStr + ('{' + ($rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties) + '}'));
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = decl.a;
			return $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock(styleBlock);
		case 'MediaRule':
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, ', ', mediaQueries);
			var blocks = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, '\n', styleBlocks);
			return '@media ' + (query + ('{' + (blocks + '}')));
		case 'SupportsRule':
			return 'TODO';
		case 'DocumentRule':
			return 'TODO';
		case 'PageRule':
			return 'TODO';
		case 'FontFace':
			return 'TODO';
		case 'Keyframes':
			var name = decl.a.name;
			var declaration = decl.a.declaration;
			return '@keyframes ' + (name + ('{' + (declaration + '}')));
		case 'Viewport':
			return 'TODO';
		case 'CounterStyle':
			return 'TODO';
		default:
			return 'TODO';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var declarations = _v0.declarations;
	return $rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$importToString, '\n', imports) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, '\n', namespaces) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, '\n', declarations) + '')));
};
var $rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 'CounterStyle', a: a};
};
var $rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 'FontFace', a: a};
};
var $rtfeldman$elm_css$Css$Structure$PageRule = function (a) {
	return {$: 'PageRule', a: a};
};
var $rtfeldman$elm_css$Css$Structure$Property = function (a) {
	return {$: 'Property', a: a};
};
var $rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 'Selector', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 'SupportsRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 'Viewport', a: a};
};
var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 'MediaRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		return A3(
			$rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 'StyleBlockDeclaration':
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 'MediaRule':
						var _v1 = declarations.a;
						var mediaQueries = _v1.a;
						var styleBlocks = _v1.b;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									$rtfeldman$elm_css$Css$Structure$mapLast,
									$rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					$rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2($elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _v0) {
		var sequence = _v0.a;
		var selectors = _v0.b;
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			$elm$core$Maybe$Just(pseudo));
	});
var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 'CustomSelector', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 'TypeSelectorSequence', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 'UniversalSelectorSequence', a: a};
};
var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 'TypeSelectorSequence':
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				var list = sequence.a;
				return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _v1 = list.a;
				var combinator = _v1.a;
				var sequence = _v1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (declarations.a.$ === 'StyleBlockDeclaration') {
				var _v1 = declarations.a.a;
				var firstSelector = _v1.a;
				var otherSelectors = _v1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2($elm$core$List$cons, firstSelector, otherSelectors),
					$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 'DocumentRule', a: a, b: b, c: c, d: d, e: e};
	});
var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_v0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 'StyleBlockDeclaration':
							var styleBlock = declarations.a.a;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 'MediaRule':
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _v1 = declarations.a;
									var mediaQueries = _v1.a;
									var _v2 = _v1.b;
									var styleBlock = _v2.a;
									return _List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _v3 = declarations.a;
									var mediaQueries = _v3.a;
									var _v4 = _v3.b;
									var first = _v4.a;
									var rest = _v4.b;
									var _v5 = A2(
										$rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_v5.b && (_v5.a.$ === 'MediaRule')) && (!_v5.b.b)) {
										var _v6 = _v5.a;
										var newMediaQueries = _v6.a;
										var newStyleBlocks = _v6.b;
										return _List_fromArray(
											[
												A2(
												$rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2($elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _v5;
										return newDeclarations;
									}
								}
							} else {
								break _v0$12;
							}
						case 'SupportsRule':
							var _v7 = declarations.a;
							var str = _v7.a;
							var nestedDeclarations = _v7.b;
							return _List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 'DocumentRule':
							var _v8 = declarations.a;
							var str1 = _v8.a;
							var str2 = _v8.b;
							var str3 = _v8.c;
							var str4 = _v8.d;
							var styleBlock = _v8.e;
							return A2(
								$elm$core$List$map,
								A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			$elm$core$List$cons,
			first,
			A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 'Nothing') {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 'FontFeatureValues', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				$elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var styleBlock = declaration.a;
			return A2(
				$rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var structureStyleBlock = declaration.a;
			return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var structureStyleBlock = declaration.a;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 'MediaRule':
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 'SupportsRule':
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 'DocumentRule':
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_v0) {
	var declarations = _v0.a;
	return declarations;
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(decls));
		};
		var nextResult = A2(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _v14 = _Utils_Tuple2(
				$elm$core$List$head(nextResult),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((_v14.a.$ === 'Just') && (_v14.b.$ === 'Just')) {
				var nextResultParent = _v14.a.a;
				var originalParent = _v14.b.a;
				return _Utils_ap(
					A2(
						$elm$core$List$take,
						$elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return $elm$core$List$concat(
				A2(
					$rtfeldman$elm_css$Css$Structure$mapLast,
					$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						$elm$core$List$map,
						$elm$core$List$singleton,
						A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				insertStylesToNestedDecl,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 'AppendProperty':
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 'ExtendSelector':
					var _v4 = styles.a;
					var selector = _v4.a;
					var nestedStyles = _v4.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 'NestSnippet':
					var _v5 = styles.a;
					var selectorCombinator = _v5.a;
					var snippets = _v5.b;
					var rest = styles.b;
					var chain = F2(
						function (_v9, _v10) {
							var originalSequence = _v9.a;
							var originalTuples = _v9.b;
							var originalPseudoElement = _v9.c;
							var newSequence = _v10.a;
							var newTuples = _v10.b;
							var newPseudoElement = _v10.c;
							return A3(
								$rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								$rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 'StyleBlockDeclaration':
								var _v7 = declaration.a;
								var firstSelector = _v7.a;
								var otherSelectors = _v7.b;
								var nestedStyles = _v7.c;
								var newSelectors = A2(
									$elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											$elm$core$List$map,
											chain(originalSelector),
											A2($elm$core$List$cons, firstSelector, otherSelectors));
									},
									$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 'MediaRule':
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 'SupportsRule':
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 'DocumentRule':
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									$elm$core$List$map,
									A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 'PageRule':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$PageRule(properties)
									]);
							case 'FontFace':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 'Viewport':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 'CounterStyle':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return $elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								$elm$core$List$map,
								expandDeclaration,
								A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 'WithPseudoElement':
					var _v11 = styles.a;
					var pseudoElement = _v11.a;
					var nestedStyles = _v11.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 'WithKeyframes':
					var str = styles.a.a;
					var rest = styles.b;
					var name = $rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = $rtfeldman$elm_css$Css$Structure$Property('animation-name:' + name);
					var newDeclarations = A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						$elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$Keyframes(
								{declaration: str, name: name})
							]));
				case 'WithMedia':
					var _v12 = styles.a;
					var mediaQueries = _v12.a;
					var nestedStyles = _v12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_v13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _v13.a;
							var otherSelectors = _v13.b;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									$elm$core$List$singleton(
										$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_v2) {
	var firstSelector = _v2.a;
	var otherSelectors = _v2.b;
	var styles = _v2.c;
	return A2(
		$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			$rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 'MediaRule':
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 'SupportsRule':
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 'DocumentRule':
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				$elm$core$List$map,
				A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 'PageRule':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$PageRule(properties)
				]);
		case 'FontFace':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 'Viewport':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 'CounterStyle':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var snippets = _v0.snippets;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {charset: charset, declarations: declarations, imports: imports, namespaces: namespaces};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (sheet) {
	return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		$rtfeldman$elm_css$Css$Structure$compactStylesheet(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var $rtfeldman$elm_css$Css$Preprocess$Snippet = function (a) {
	return {$: 'Snippet', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return $rtfeldman$elm_css$Css$Preprocess$Snippet(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
					A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
				]));
	});
var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {charset: $elm$core$Maybe$Nothing, imports: _List_Nil, namespaces: _List_Nil, snippets: snippets};
};
var $rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 'ClassSelector', a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$templateSelector = $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
	_List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$ClassSelector($rtfeldman$elm_css$VirtualDom$Styled$classnameStandin)
		]));
var $rtfeldman$elm_css$VirtualDom$Styled$getCssTemplate = function (styles) {
	if (!styles.b) {
		return '';
	} else {
		var otherwise = styles;
		return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
			$rtfeldman$elm_css$Css$Preprocess$stylesheet(
				_List_fromArray(
					[
						A2($rtfeldman$elm_css$VirtualDom$Styled$makeSnippet, styles, $rtfeldman$elm_css$VirtualDom$Styled$templateSelector)
					])));
	}
};
var $rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var cssTemplate = $rtfeldman$elm_css$VirtualDom$Styled$getCssTemplate(styles);
	var classProperty = A2($elm$virtual_dom$VirtualDom$attribute, '', '');
	return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, true, cssTemplate);
};
var $rtfeldman$elm_css$Html$Styled$Attributes$css = $rtfeldman$elm_css$Html$Styled$Internal$css;
var $rtfeldman$elm_css$Css$PxUnits = {$: 'PxUnits'};
var $rtfeldman$elm_css$Css$Structure$Compatible = {$: 'Compatible'};
var $elm$core$String$fromFloat = _String_fromNumber;
var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			absoluteLength: $rtfeldman$elm_css$Css$Structure$Compatible,
			calc: $rtfeldman$elm_css$Css$Structure$Compatible,
			flexBasis: $rtfeldman$elm_css$Css$Structure$Compatible,
			fontSize: $rtfeldman$elm_css$Css$Structure$Compatible,
			length: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNone: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNoneOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumber: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible,
			lineHeight: $rtfeldman$elm_css$Css$Structure$Compatible,
			numericValue: numericValue,
			textIndent: $rtfeldman$elm_css$Css$Structure$Compatible,
			unitLabel: unitLabel,
			units: units,
			value: _Utils_ap(
				$elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var $rtfeldman$elm_css$Css$px = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$PxUnits, 'px');
var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 'AppendProperty', a: a};
};
var $rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(
			$rtfeldman$elm_css$Css$Structure$Property(key + (':' + value)));
	});
var $rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2($rtfeldman$elm_css$Css$property, key, arg.value);
	});
var $rtfeldman$elm_css$Css$width = $rtfeldman$elm_css$Css$prop1('width');
var $author$project$InputView$freeTextInput = F2(
	function (text, key) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$input,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Events$onInput(
					function (s) {
						return A2(
							$author$project$Messages$SetKeyAction,
							key,
							$author$project$Keyboard$FreeText(s));
					}),
					$rtfeldman$elm_css$Html$Styled$Attributes$value(text),
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$width(
							$rtfeldman$elm_css$Css$px(200))
						]))
				]),
			_List_Nil);
	});
var $author$project$KeyCodes$layerModifierCodes = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(130 | $author$project$KeyCodes$layerHoldModifierKeyCode, 'Layer Hold 2'),
			_Utils_Tuple2(131 | $author$project$KeyCodes$layerHoldModifierKeyCode, 'Layer Hold 3'),
			_Utils_Tuple2(133 | $author$project$KeyCodes$layerToggleModifierKeyCode, 'Layer Toggle 2'),
			_Utils_Tuple2(134 | $author$project$KeyCodes$layerToggleModifierKeyCode, 'Layer Toggle 3')
		]));
var $author$project$KeyCodes$reverseDict = function (dict) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var k = _v0.a;
				var v = _v0.b;
				return _Utils_Tuple2(v, k);
			},
			$elm$core$Dict$toList(dict)));
};
var $author$project$KeyCodes$layerModifierCodesFromString = $author$project$KeyCodes$reverseDict($author$project$KeyCodes$layerModifierCodes);
var $author$project$KeyCodes$layerModifierCodeFromString = function (str) {
	return A2($elm$core$Dict$get, str, $author$project$KeyCodes$layerModifierCodesFromString);
};
var $author$project$KeyCodes$layerModifierCodeToString = function (keyCode) {
	var _v0 = A2($elm$core$Dict$get, keyCode, $author$project$KeyCodes$layerModifierCodes);
	if (_v0.$ === 'Just') {
		var str = _v0.a;
		return str;
	} else {
		return '';
	}
};
var $author$project$InputView$layerModifierInput = F2(
	function (keyCode, key) {
		var options = function (codes) {
			return A2(
				$elm$core$List$map,
				function (k) {
					return A2(
						$rtfeldman$elm_css$Html$Styled$option,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$value(
								$author$project$KeyCodes$layerModifierCodeToString(k)),
								$rtfeldman$elm_css$Html$Styled$Attributes$selected(
								_Utils_eq(k, keyCode))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(
								$author$project$KeyCodes$layerModifierCodeToString(k))
							]));
				},
				codes);
		};
		var keyCodeConvert = function (maybeCode) {
			if (maybeCode.$ === 'Just') {
				var c = maybeCode.a;
				return c;
			} else {
				return 0;
			}
		};
		return A2(
			$rtfeldman$elm_css$Html$Styled$select,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$name('actionType'),
					$rtfeldman$elm_css$Html$Styled$Attributes$class('keyDropdown inputViewControl'),
					$rtfeldman$elm_css$Html$Styled$Events$onInput(
					function (str) {
						return A2(
							$author$project$Messages$SetLayerModifier,
							key,
							keyCodeConvert(
								$author$project$KeyCodes$layerModifierCodeFromString(str)));
					})
				]),
			options(
				$elm$core$Dict$keys($author$project$KeyCodes$layerModifierCodes)));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$KeyCodes$keyCodes = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(1 | $author$project$KeyCodes$modifierKeyCode, 'Left Ctrl'),
			_Utils_Tuple2(2 | $author$project$KeyCodes$modifierKeyCode, 'Left Shift'),
			_Utils_Tuple2(4 | $author$project$KeyCodes$modifierKeyCode, 'Left Alt'),
			_Utils_Tuple2(8 | $author$project$KeyCodes$modifierKeyCode, 'Left Gui'),
			_Utils_Tuple2(16 | $author$project$KeyCodes$modifierKeyCode, 'Right Ctrl'),
			_Utils_Tuple2(32 | $author$project$KeyCodes$modifierKeyCode, 'Right Shift'),
			_Utils_Tuple2(64 | $author$project$KeyCodes$modifierKeyCode, 'Right Alt'),
			_Utils_Tuple2(128 | $author$project$KeyCodes$modifierKeyCode, 'Right Gui'),
			_Utils_Tuple2(176 | $author$project$KeyCodes$mediaKeyCode, 'Play'),
			_Utils_Tuple2(177 | $author$project$KeyCodes$mediaKeyCode, 'MediaPause'),
			_Utils_Tuple2(178 | $author$project$KeyCodes$mediaKeyCode, 'Record'),
			_Utils_Tuple2(179 | $author$project$KeyCodes$mediaKeyCode, 'FastForward'),
			_Utils_Tuple2(180 | $author$project$KeyCodes$mediaKeyCode, 'Rewind'),
			_Utils_Tuple2(181 | $author$project$KeyCodes$mediaKeyCode, 'NextTrack'),
			_Utils_Tuple2(182 | $author$project$KeyCodes$mediaKeyCode, 'PrevTrack'),
			_Utils_Tuple2(183 | $author$project$KeyCodes$mediaKeyCode, 'Stop'),
			_Utils_Tuple2(184 | $author$project$KeyCodes$mediaKeyCode, 'Eject'),
			_Utils_Tuple2(185 | $author$project$KeyCodes$mediaKeyCode, 'RandomPlay'),
			_Utils_Tuple2(205 | $author$project$KeyCodes$mediaKeyCode, 'PlayPause'),
			_Utils_Tuple2(206 | $author$project$KeyCodes$mediaKeyCode, 'PlaySkip'),
			_Utils_Tuple2(226 | $author$project$KeyCodes$mediaKeyCode, 'Mute'),
			_Utils_Tuple2(233 | $author$project$KeyCodes$mediaKeyCode, 'VolumeInc'),
			_Utils_Tuple2(234 | $author$project$KeyCodes$mediaKeyCode, 'VolumeDec'),
			_Utils_Tuple2(4 | $author$project$KeyCodes$standardKeyCode, 'A'),
			_Utils_Tuple2(5 | $author$project$KeyCodes$standardKeyCode, 'B'),
			_Utils_Tuple2(6 | $author$project$KeyCodes$standardKeyCode, 'C'),
			_Utils_Tuple2(7 | $author$project$KeyCodes$standardKeyCode, 'D'),
			_Utils_Tuple2(8 | $author$project$KeyCodes$standardKeyCode, 'E'),
			_Utils_Tuple2(9 | $author$project$KeyCodes$standardKeyCode, 'F'),
			_Utils_Tuple2(10 | $author$project$KeyCodes$standardKeyCode, 'G'),
			_Utils_Tuple2(11 | $author$project$KeyCodes$standardKeyCode, 'H'),
			_Utils_Tuple2(12 | $author$project$KeyCodes$standardKeyCode, 'I'),
			_Utils_Tuple2(13 | $author$project$KeyCodes$standardKeyCode, 'J'),
			_Utils_Tuple2(14 | $author$project$KeyCodes$standardKeyCode, 'K'),
			_Utils_Tuple2(15 | $author$project$KeyCodes$standardKeyCode, 'L'),
			_Utils_Tuple2(16 | $author$project$KeyCodes$standardKeyCode, 'M'),
			_Utils_Tuple2(17 | $author$project$KeyCodes$standardKeyCode, 'N'),
			_Utils_Tuple2(18 | $author$project$KeyCodes$standardKeyCode, 'O'),
			_Utils_Tuple2(19 | $author$project$KeyCodes$standardKeyCode, 'P'),
			_Utils_Tuple2(20 | $author$project$KeyCodes$standardKeyCode, 'Q'),
			_Utils_Tuple2(21 | $author$project$KeyCodes$standardKeyCode, 'R'),
			_Utils_Tuple2(22 | $author$project$KeyCodes$standardKeyCode, 'S'),
			_Utils_Tuple2(23 | $author$project$KeyCodes$standardKeyCode, 'T'),
			_Utils_Tuple2(24 | $author$project$KeyCodes$standardKeyCode, 'U'),
			_Utils_Tuple2(25 | $author$project$KeyCodes$standardKeyCode, 'V'),
			_Utils_Tuple2(26 | $author$project$KeyCodes$standardKeyCode, 'W'),
			_Utils_Tuple2(27 | $author$project$KeyCodes$standardKeyCode, 'X'),
			_Utils_Tuple2(28 | $author$project$KeyCodes$standardKeyCode, 'Y'),
			_Utils_Tuple2(29 | $author$project$KeyCodes$standardKeyCode, 'Z'),
			_Utils_Tuple2(30 | $author$project$KeyCodes$standardKeyCode, '1'),
			_Utils_Tuple2(31 | $author$project$KeyCodes$standardKeyCode, '2'),
			_Utils_Tuple2(32 | $author$project$KeyCodes$standardKeyCode, '3'),
			_Utils_Tuple2(33 | $author$project$KeyCodes$standardKeyCode, '4'),
			_Utils_Tuple2(34 | $author$project$KeyCodes$standardKeyCode, '5'),
			_Utils_Tuple2(35 | $author$project$KeyCodes$standardKeyCode, '6'),
			_Utils_Tuple2(36 | $author$project$KeyCodes$standardKeyCode, '7'),
			_Utils_Tuple2(37 | $author$project$KeyCodes$standardKeyCode, '8'),
			_Utils_Tuple2(38 | $author$project$KeyCodes$standardKeyCode, '9'),
			_Utils_Tuple2(39 | $author$project$KeyCodes$standardKeyCode, '0'),
			_Utils_Tuple2(40 | $author$project$KeyCodes$standardKeyCode, 'Enter'),
			_Utils_Tuple2(41 | $author$project$KeyCodes$standardKeyCode, 'Esc'),
			_Utils_Tuple2(42 | $author$project$KeyCodes$standardKeyCode, 'Backspace'),
			_Utils_Tuple2(43 | $author$project$KeyCodes$standardKeyCode, 'Tab'),
			_Utils_Tuple2(44 | $author$project$KeyCodes$standardKeyCode, 'Space'),
			_Utils_Tuple2(45 | $author$project$KeyCodes$standardKeyCode, '-'),
			_Utils_Tuple2(46 | $author$project$KeyCodes$standardKeyCode, '='),
			_Utils_Tuple2(47 | $author$project$KeyCodes$standardKeyCode, '['),
			_Utils_Tuple2(48 | $author$project$KeyCodes$standardKeyCode, ']'),
			_Utils_Tuple2(49 | $author$project$KeyCodes$standardKeyCode, '\\'),
			_Utils_Tuple2(50 | $author$project$KeyCodes$standardKeyCode, 'NonUsNum'),
			_Utils_Tuple2(51 | $author$project$KeyCodes$standardKeyCode, ';'),
			_Utils_Tuple2(52 | $author$project$KeyCodes$standardKeyCode, '\''),
			_Utils_Tuple2(53 | $author$project$KeyCodes$standardKeyCode, '~'),
			_Utils_Tuple2(54 | $author$project$KeyCodes$standardKeyCode, ','),
			_Utils_Tuple2(55 | $author$project$KeyCodes$standardKeyCode, '.'),
			_Utils_Tuple2(56 | $author$project$KeyCodes$standardKeyCode, '/'),
			_Utils_Tuple2(57 | $author$project$KeyCodes$standardKeyCode, 'CapsLock'),
			_Utils_Tuple2(58 | $author$project$KeyCodes$standardKeyCode, 'F1'),
			_Utils_Tuple2(59 | $author$project$KeyCodes$standardKeyCode, 'F2'),
			_Utils_Tuple2(60 | $author$project$KeyCodes$standardKeyCode, 'F3'),
			_Utils_Tuple2(61 | $author$project$KeyCodes$standardKeyCode, 'F4'),
			_Utils_Tuple2(62 | $author$project$KeyCodes$standardKeyCode, 'F5'),
			_Utils_Tuple2(63 | $author$project$KeyCodes$standardKeyCode, 'F6'),
			_Utils_Tuple2(64 | $author$project$KeyCodes$standardKeyCode, 'F7'),
			_Utils_Tuple2(65 | $author$project$KeyCodes$standardKeyCode, 'F8'),
			_Utils_Tuple2(66 | $author$project$KeyCodes$standardKeyCode, 'F9'),
			_Utils_Tuple2(67 | $author$project$KeyCodes$standardKeyCode, 'F10'),
			_Utils_Tuple2(68 | $author$project$KeyCodes$standardKeyCode, 'F11'),
			_Utils_Tuple2(69 | $author$project$KeyCodes$standardKeyCode, 'F12'),
			_Utils_Tuple2(70 | $author$project$KeyCodes$standardKeyCode, 'PrintScreen'),
			_Utils_Tuple2(71 | $author$project$KeyCodes$standardKeyCode, 'ScrollLock'),
			_Utils_Tuple2(72 | $author$project$KeyCodes$standardKeyCode, 'Pause'),
			_Utils_Tuple2(73 | $author$project$KeyCodes$standardKeyCode, 'Insert'),
			_Utils_Tuple2(74 | $author$project$KeyCodes$standardKeyCode, 'Home'),
			_Utils_Tuple2(75 | $author$project$KeyCodes$standardKeyCode, 'PageUp'),
			_Utils_Tuple2(76 | $author$project$KeyCodes$standardKeyCode, 'Delete'),
			_Utils_Tuple2(77 | $author$project$KeyCodes$standardKeyCode, 'End'),
			_Utils_Tuple2(78 | $author$project$KeyCodes$standardKeyCode, 'PageDown'),
			_Utils_Tuple2(79 | $author$project$KeyCodes$standardKeyCode, 'Right'),
			_Utils_Tuple2(80 | $author$project$KeyCodes$standardKeyCode, 'Left'),
			_Utils_Tuple2(81 | $author$project$KeyCodes$standardKeyCode, 'Down'),
			_Utils_Tuple2(82 | $author$project$KeyCodes$standardKeyCode, 'Up'),
			_Utils_Tuple2(83 | $author$project$KeyCodes$standardKeyCode, 'NumLock'),
			_Utils_Tuple2(84 | $author$project$KeyCodes$standardKeyCode, 'Num /'),
			_Utils_Tuple2(85 | $author$project$KeyCodes$standardKeyCode, 'Num *'),
			_Utils_Tuple2(86 | $author$project$KeyCodes$standardKeyCode, 'Num -'),
			_Utils_Tuple2(87 | $author$project$KeyCodes$standardKeyCode, 'Num +'),
			_Utils_Tuple2(88 | $author$project$KeyCodes$standardKeyCode, 'Num Enter'),
			_Utils_Tuple2(89 | $author$project$KeyCodes$standardKeyCode, 'Num 1'),
			_Utils_Tuple2(90 | $author$project$KeyCodes$standardKeyCode, 'Num 2'),
			_Utils_Tuple2(91 | $author$project$KeyCodes$standardKeyCode, 'Num 3'),
			_Utils_Tuple2(92 | $author$project$KeyCodes$standardKeyCode, 'Num 4'),
			_Utils_Tuple2(93 | $author$project$KeyCodes$standardKeyCode, 'Num 5'),
			_Utils_Tuple2(94 | $author$project$KeyCodes$standardKeyCode, 'Num 6'),
			_Utils_Tuple2(95 | $author$project$KeyCodes$standardKeyCode, 'Num 7'),
			_Utils_Tuple2(96 | $author$project$KeyCodes$standardKeyCode, 'Num 8'),
			_Utils_Tuple2(97 | $author$project$KeyCodes$standardKeyCode, 'Num 9'),
			_Utils_Tuple2(98 | $author$project$KeyCodes$standardKeyCode, 'Num 0'),
			_Utils_Tuple2(99 | $author$project$KeyCodes$standardKeyCode, 'Num .'),
			_Utils_Tuple2(100 | $author$project$KeyCodes$standardKeyCode, '<>'),
			_Utils_Tuple2(101 | $author$project$KeyCodes$standardKeyCode, 'Menu'),
			_Utils_Tuple2(104 | $author$project$KeyCodes$standardKeyCode, 'F13'),
			_Utils_Tuple2(105 | $author$project$KeyCodes$standardKeyCode, 'F14'),
			_Utils_Tuple2(106 | $author$project$KeyCodes$standardKeyCode, 'F15'),
			_Utils_Tuple2(107 | $author$project$KeyCodes$standardKeyCode, 'F16'),
			_Utils_Tuple2(108 | $author$project$KeyCodes$standardKeyCode, 'F17'),
			_Utils_Tuple2(109 | $author$project$KeyCodes$standardKeyCode, 'F18'),
			_Utils_Tuple2(110 | $author$project$KeyCodes$standardKeyCode, 'F19'),
			_Utils_Tuple2(111 | $author$project$KeyCodes$standardKeyCode, 'F20'),
			_Utils_Tuple2(112 | $author$project$KeyCodes$standardKeyCode, 'F21'),
			_Utils_Tuple2(113 | $author$project$KeyCodes$standardKeyCode, 'F22'),
			_Utils_Tuple2(114 | $author$project$KeyCodes$standardKeyCode, 'F23'),
			_Utils_Tuple2(115 | $author$project$KeyCodes$standardKeyCode, 'F24'),
			_Utils_Tuple2(116 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Left Click'),
			_Utils_Tuple2(117 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Right Click'),
			_Utils_Tuple2(118 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Middle Click'),
			_Utils_Tuple2(119 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Scroll Up'),
			_Utils_Tuple2(120 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Scroll Down'),
			_Utils_Tuple2(121 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Move Left'),
			_Utils_Tuple2(122 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Move Right'),
			_Utils_Tuple2(123 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Move Up'),
			_Utils_Tuple2(124 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Move Down'),
			_Utils_Tuple2(125 | $author$project$KeyCodes$mouseKeyCode, 'Mouse Move Faster'),
			_Utils_Tuple2(126 | $author$project$KeyCodes$controlKeyCode, 'Brightness increase'),
			_Utils_Tuple2(127 | $author$project$KeyCodes$controlKeyCode, 'Brightness decrease'),
			_Utils_Tuple2(128 | $author$project$KeyCodes$controlKeyCode, 'Toggle configuration mode'),
			_Utils_Tuple2(129 | $author$project$KeyCodes$controlKeyCode, 'Next backlight mode')
		]));
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $author$project$KeyCodes$keyCodesFromString = A2(
	$elm$core$Dict$union,
	$author$project$KeyCodes$reverseDict($author$project$KeyCodes$keyCodes),
	$elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('Ctrl', 1 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('Shift', 2 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('Alt', 4 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('Gui', 8 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('Win', 8 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('Super', 8 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('ctrl', 1 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('shift', 2 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('alt', 4 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('gui', 8 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('win', 8 | $author$project$KeyCodes$modifierKeyCode),
				_Utils_Tuple2('super', 8 | $author$project$KeyCodes$modifierKeyCode)
			])));
var $author$project$KeyCodes$keyCodeFromString = function (str) {
	return A2($elm$core$Dict$get, str, $author$project$KeyCodes$keyCodesFromString);
};
var $author$project$InputView$parseKeyPress = function (maybeKeyCodes) {
	var parsedKeys = A2(
		$elm$core$List$map,
		function (str) {
			return _Utils_Tuple2(
				str,
				$author$project$KeyCodes$keyCodeFromString(str));
		},
		maybeKeyCodes);
	var validKeyCodes = A2(
		$elm$core$List$filterMap,
		function (_v2) {
			var maybeKeyCode = _v2.b;
			return maybeKeyCode;
		},
		parsedKeys);
	var modifier = A2(
		$elm$core$Maybe$withDefault,
		$author$project$KeyCodes$blankModifierKeyCode,
		$elm$core$List$head(
			A2($elm$core$List$filter, $author$project$KeyCodes$isModifierKeyCode, validKeyCodes)));
	var media = A2(
		$elm$core$Maybe$withDefault,
		$author$project$KeyCodes$blankMediaKeyCode,
		$elm$core$List$head(
			A2($elm$core$List$filter, $author$project$KeyCodes$isMediaKeyCode, validKeyCodes)));
	var key = A2(
		$elm$core$Maybe$withDefault,
		$author$project$KeyCodes$blankStandardKeyCode,
		$elm$core$List$head(
			A2($elm$core$List$filter, $author$project$KeyCodes$isStandardKeyCode, validKeyCodes)));
	var invalidKeys = A2(
		$elm$core$List$filterMap,
		function (_v0) {
			var str = _v0.a;
			var maybeKeyCode = _v0.b;
			if (maybeKeyCode.$ === 'Just') {
				return $elm$core$Maybe$Nothing;
			} else {
				return $elm$core$Maybe$Just(str);
			}
		},
		parsedKeys);
	return ($elm$core$List$length(maybeKeyCodes) > 3) ? $elm$core$Result$Err(
		$elm$core$String$concat(
			_List_fromArray(
				[
					'Too many key codes in keypress (',
					A2($elm$core$String$join, ' + ', maybeKeyCodes),
					')'
				]))) : (($elm$core$List$length(maybeKeyCodes) < 1) ? $elm$core$Result$Err('No key codes in keypress') : (($elm$core$List$length(invalidKeys) > 0) ? $elm$core$Result$Err(
		$elm$core$String$concat(
			_List_fromArray(
				[
					'Invalid key codes in keypress: ',
					A2($elm$core$String$join, ', ', invalidKeys)
				]))) : $elm$core$Result$Ok(
		{key: key, media: media, modifier: modifier})));
};
var $elm$core$String$trim = _String_trim;
var $author$project$InputView$parseSequence = function (str) {
	var splitKeyPress = function (rawKeyPress) {
		return A2(
			$elm$core$List$map,
			$elm$core$String$trim,
			A2($elm$core$String$split, '+', rawKeyPress));
	};
	var rawKeyPresses = A2(
		$elm$core$List$map,
		$elm$core$String$trim,
		A2($elm$core$String$split, ',', str));
	var unparsedKeyPresses = A2($elm$core$List$map, splitKeyPress, rawKeyPresses);
	return A2($elm$core$List$map, $author$project$InputView$parseKeyPress, unparsedKeyPresses);
};
var $rtfeldman$elm_css$Html$Styled$span = $rtfeldman$elm_css$Html$Styled$node('span');
var $author$project$InputView$sequenceInput = F4(
	function (rawString, keyPresses, key, maybeError) {
		var onTextInput = function (str) {
			var parsedKeyPresses = $author$project$InputView$parseSequence(str);
			var validKeyPresses = A2(
				$elm$core$List$filterMap,
				function (result) {
					if (result.$ === 'Ok') {
						var keyPress = result.a;
						return $elm$core$Maybe$Just(keyPress);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				},
				parsedKeyPresses);
			var errors = A2(
				$elm$core$List$filterMap,
				function (result) {
					if (result.$ === 'Ok') {
						return $elm$core$Maybe$Nothing;
					} else {
						var err = result.a;
						return $elm$core$Maybe$Just(err);
					}
				},
				parsedKeyPresses);
			var errorText = A2($elm$core$String$join, ', ', errors);
			var maybeErrorText = ($elm$core$List$length(errors) > 0) ? $elm$core$Maybe$Just(errorText) : $elm$core$Maybe$Nothing;
			return A2(
				$author$project$Messages$SetKeyAction,
				key,
				A3($author$project$Keyboard$Sequence, str, validKeyPresses, maybeErrorText));
		};
		var numValidKeyPresses = $elm$core$List$length(keyPresses);
		var currentErrorText = A2($elm$core$Maybe$withDefault, '', maybeError);
		return A2(
			$rtfeldman$elm_css$Html$Styled$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$input,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('inputViewControl'),
							$rtfeldman$elm_css$Html$Styled$Events$onInput(onTextInput),
							$rtfeldman$elm_css$Html$Styled$Attributes$value(rawString)
						]),
					_List_Nil),
					A2(
					$rtfeldman$elm_css$Html$Styled$span,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('whiteText')
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(
							$elm$core$String$concat(
								_List_fromArray(
									[
										$elm$core$String$fromInt(numValidKeyPresses),
										' key combinations.'
									])))
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$span,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('whiteText')
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(currentErrorText)
						]))
				]));
	});
var $rtfeldman$elm_css$Html$Styled$hr = $rtfeldman$elm_css$Html$Styled$node('hr');
var $author$project$KeyCodes$americanToSwedishDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('[', 'Å'),
			_Utils_Tuple2(';', 'Ö'),
			_Utils_Tuple2('\'', 'Ä'),
			_Utils_Tuple2(']', '^'),
			_Utils_Tuple2('\\', '*'),
			_Utils_Tuple2('/', '-'),
			_Utils_Tuple2('=', '`'),
			_Utils_Tuple2('-', '+'),
			_Utils_Tuple2('~', '§')
		]));
var $author$project$KeyCodes$americanToSwedish = function (str) {
	return A2($elm$core$Dict$get, str, $author$project$KeyCodes$americanToSwedishDict);
};
var $author$project$KeyCodes$keyCodeToString = F2(
	function (keyCode, language) {
		var _v0 = A2($elm$core$Dict$get, keyCode, $author$project$KeyCodes$keyCodes);
		if (_v0.$ === 'Just') {
			var str = _v0.a;
			if (language.$ === 'English') {
				return str;
			} else {
				var _v2 = $author$project$KeyCodes$americanToSwedish(str);
				if (_v2.$ === 'Just') {
					var s = _v2.a;
					return s;
				} else {
					return str;
				}
			}
		} else {
			return '';
		}
	});
var $author$project$InputView$singleInput = F3(
	function (keyCode, key, language) {
		var options = function (codes) {
			return A2(
				$elm$core$List$map,
				function (k) {
					return A2(
						$rtfeldman$elm_css$Html$Styled$option,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$value(
								A2($author$project$KeyCodes$keyCodeToString, k, language)),
								$rtfeldman$elm_css$Html$Styled$Attributes$selected(
								_Utils_eq(k, keyCode))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(
								A2($author$project$KeyCodes$keyCodeToString, k, language))
							]));
				},
				codes);
		};
		var keyCodeConvert = function (maybeCode) {
			if (maybeCode.$ === 'Just') {
				var c = maybeCode.a;
				return c;
			} else {
				return 0;
			}
		};
		var allCodes = $elm$core$Dict$keys($author$project$KeyCodes$keyCodes);
		var controlKeys = A2($elm$core$List$filter, $author$project$KeyCodes$isControlKeyCode, allCodes);
		var layerModifierKeys = A2(
			$elm$core$List$filter,
			function (k) {
				return $author$project$KeyCodes$isLayerHoldModifierKeyCode(k) || $author$project$KeyCodes$isLayerToggleModifierKeyCode(k);
			},
			allCodes);
		var mediaKeys = A2($elm$core$List$filter, $author$project$KeyCodes$isMediaKeyCode, allCodes);
		var modifierKeys = A2($elm$core$List$filter, $author$project$KeyCodes$isModifierKeyCode, allCodes);
		var mouseKeys = A2($elm$core$List$filter, $author$project$KeyCodes$isMouseKeyCode, allCodes);
		var standardKeys = A2($elm$core$List$filter, $author$project$KeyCodes$isStandardKeyCode, allCodes);
		return A2(
			$rtfeldman$elm_css$Html$Styled$select,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$name('actionType'),
					$rtfeldman$elm_css$Html$Styled$Attributes$class('keyDropdown inputViewControl'),
					$rtfeldman$elm_css$Html$Styled$Events$onInput(
					function (str) {
						return A2(
							$author$project$Messages$SetKeyAction,
							key,
							$author$project$Keyboard$Single(
								keyCodeConvert(
									$author$project$KeyCodes$keyCodeFromString(str))));
					})
				]),
			_Utils_ap(
				options(standardKeys),
				_Utils_ap(
					_List_fromArray(
						[
							A2($rtfeldman$elm_css$Html$Styled$hr, _List_Nil, _List_Nil)
						]),
					_Utils_ap(
						options(modifierKeys),
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Html$Styled$hr, _List_Nil, _List_Nil)
								]),
							_Utils_ap(
								options(layerModifierKeys),
								_Utils_ap(
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Html$Styled$hr, _List_Nil, _List_Nil)
										]),
									_Utils_ap(
										options(mediaKeys),
										_Utils_ap(
											_List_fromArray(
												[
													A2($rtfeldman$elm_css$Html$Styled$hr, _List_Nil, _List_Nil)
												]),
											_Utils_ap(
												options(mouseKeys),
												_Utils_ap(
													_List_fromArray(
														[
															A2($rtfeldman$elm_css$Html$Styled$hr, _List_Nil, _List_Nil)
														]),
													options(controlKeys))))))))))));
	});
var $author$project$InputView$valueInput = F3(
	function (key, layerIndex, language) {
		var _v0 = key.actions;
		if (_v0.$ === 'LayerModifier') {
			var keyCode = _v0.a;
			return A2($author$project$InputView$layerModifierInput, keyCode, key);
		} else {
			var layers = _v0.a;
			var maybeAction = A2($author$project$Keyboard$selectedLayerAction, layers, layerIndex);
			if (maybeAction.$ === 'Nothing') {
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			} else {
				var action = maybeAction.a;
				switch (action.$) {
					case 'Single':
						var keyCode = action.a;
						return A3($author$project$InputView$singleInput, keyCode, key, language);
					case 'Sequence':
						var rawString = action.a;
						var sequence = action.b;
						var maybeError = action.c;
						return A4($author$project$InputView$sequenceInput, rawString, sequence, key, maybeError);
					default:
						var freeText = action.a;
						return A2($author$project$InputView$freeTextInput, freeText, key);
				}
			}
		}
	});
var $author$project$InputView$actionInput = F3(
	function (key, currentLayerIndex, language) {
		var singleActionString = 'single';
		var sequenceActionString = 'sequence';
		var layerActionString = 'layer';
		var freeActionString = 'free';
		var selectedAction = function () {
			var _v1 = key.actions;
			if (_v1.$ === 'LayerModifier') {
				return layerActionString;
			} else {
				var layers = _v1.a;
				var maybeAction = A2($author$project$Keyboard$selectedLayerAction, layers, currentLayerIndex);
				if (maybeAction.$ === 'Nothing') {
					return '';
				} else {
					var action = maybeAction.a;
					switch (action.$) {
						case 'Single':
							return singleActionString;
						case 'Sequence':
							return sequenceActionString;
						default:
							return freeActionString;
					}
				}
			}
		}();
		var actionInputToMessage = function (str) {
			switch (str) {
				case 'single':
					return A2($author$project$Messages$SetKeyAction, key, $author$project$Keyboard$defaultSingleAction);
				case 'sequence':
					return A2($author$project$Messages$SetKeyAction, key, $author$project$Keyboard$defaultSequenceAction);
				case 'free':
					return A2($author$project$Messages$SetKeyAction, key, $author$project$Keyboard$defaultFreeTextAction);
				case 'layer':
					return A2($author$project$Messages$SetLayerModifier, key, 1 | $author$project$KeyCodes$layerHoldModifierKeyCode);
				default:
					return A2($author$project$Messages$SetKeyAction, key, $author$project$Keyboard$defaultSingleAction);
			}
		};
		var actionDropdown = A2(
			$rtfeldman$elm_css$Html$Styled$select,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$class('keyDropdown inputViewControl'),
					$rtfeldman$elm_css$Html$Styled$Attributes$name('actionType'),
					$rtfeldman$elm_css$Html$Styled$Events$onInput(actionInputToMessage)
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$option,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$value(singleActionString),
							$rtfeldman$elm_css$Html$Styled$Attributes$selected(
							_Utils_eq(selectedAction, singleActionString))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('Single key')
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$option,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$value(sequenceActionString),
							$rtfeldman$elm_css$Html$Styled$Attributes$selected(
							_Utils_eq(selectedAction, sequenceActionString))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('Sequence')
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$option,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$value(freeActionString),
							$rtfeldman$elm_css$Html$Styled$Attributes$selected(
							_Utils_eq(selectedAction, freeActionString))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('Free text')
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$option,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$value(layerActionString),
							$rtfeldman$elm_css$Html$Styled$Attributes$selected(
							_Utils_eq(selectedAction, layerActionString))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('Layer Modifier')
						]))
				]));
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					actionDropdown,
					A3($author$project$InputView$valueInput, key, currentLayerIndex, language),
					A2(
					$rtfeldman$elm_css$Html$Styled$button,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('inputViewControl'),
							$rtfeldman$elm_css$Html$Styled$Events$onClick(
							$author$project$Messages$ResetAction(key))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('Reset action')
						]))
				]));
	});
var $author$project$Keyboard$isKeyBlank = F2(
	function (key, layerIndex) {
		var _v0 = key.actions;
		if (_v0.$ === 'LayerModifier') {
			return false;
		} else {
			var layers = _v0.a;
			var _v1 = A2($author$project$Keyboard$selectedLayerAction, layers, layerIndex);
			if (_v1.$ === 'Just') {
				var action = _v1.a;
				switch (action.$) {
					case 'Single':
						return false;
					case 'Sequence':
						return false;
					default:
						return false;
				}
			} else {
				return true;
			}
		}
	});
var $author$project$InputView$inputView = F3(
	function (key, layerIndex, language) {
		return A2($author$project$Keyboard$isKeyBlank, key, layerIndex) ? A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$button,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Events$onClick(
							$author$project$Messages$CreateAction(key))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text('New action')
						]))
				])) : A3($author$project$InputView$actionInput, key, layerIndex, language);
	});
var $rtfeldman$elm_css$Css$height = $rtfeldman$elm_css$Css$prop1('height');
var $author$project$KeyboardView$keySize = 50;
var $author$project$Messages$KeyClicked = function (a) {
	return {$: 'KeyClicked', a: a};
};
var $rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'background-color', c.value);
};
var $rtfeldman$elm_css$Css$borderColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-color', c.value);
};
var $rtfeldman$elm_css$Css$borderStyle = $rtfeldman$elm_css$Css$prop1('border-style');
var $rtfeldman$elm_css$Css$color = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'color', c.value);
};
var $rtfeldman$elm_css$Css$dashed = {borderStyle: $rtfeldman$elm_css$Css$Structure$Compatible, textDecorationStyle: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'dashed'};
var $rtfeldman$elm_css$Css$Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {$: 'ExtendSelector', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$PseudoClassSelector = function (a) {
	return {$: 'PseudoClassSelector', a: a};
};
var $rtfeldman$elm_css$Css$pseudoClass = function (_class) {
	return $rtfeldman$elm_css$Css$Preprocess$ExtendSelector(
		$rtfeldman$elm_css$Css$Structure$PseudoClassSelector(_class));
};
var $rtfeldman$elm_css$Css$hover = $rtfeldman$elm_css$Css$pseudoClass('hover');
var $rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return funcName + ('(' + (A2($elm$core$String$join, ',', args) + ')'));
	});
var $rtfeldman$elm_css$Css$rgb = F3(
	function (r, g, b) {
		return {
			alpha: 1,
			blue: b,
			color: $rtfeldman$elm_css$Css$Structure$Compatible,
			green: g,
			red: r,
			value: A2(
				$rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromInt,
					_List_fromArray(
						[r, g, b])))
		};
	});
var $rtfeldman$elm_css$Css$rgba = F4(
	function (r, g, b, alpha) {
		return {
			alpha: alpha,
			blue: b,
			color: $rtfeldman$elm_css$Css$Structure$Compatible,
			green: g,
			red: r,
			value: A2(
				$rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				_Utils_ap(
					A2(
						$elm$core$List$map,
						$elm$core$String$fromInt,
						_List_fromArray(
							[r, g, b])),
					_List_fromArray(
						[
							$elm$core$String$fromFloat(alpha)
						])))
		};
	});
var $author$project$KeyboardView$keyBackgroundColor = F2(
	function (isSelected, hovering) {
		return hovering ? A4($rtfeldman$elm_css$Css$rgba, 201, 156, 64, 0.05) : (isSelected ? A3($rtfeldman$elm_css$Css$rgb, 201, 156, 64) : A3($rtfeldman$elm_css$Css$rgb, 200, 200, 200));
	});
var $author$project$KeyboardView$keyBorderColor = F2(
	function (isSelected, hovering) {
		return hovering ? A3($rtfeldman$elm_css$Css$rgb, 200, 200, 200) : (isSelected ? A3($rtfeldman$elm_css$Css$rgb, 255, 255, 255) : A3($rtfeldman$elm_css$Css$rgb, 0, 0, 0));
	});
var $author$project$KeyboardView$keyForegroundColor = F2(
	function (isSelected, hovering) {
		return (isSelected || hovering) ? A3($rtfeldman$elm_css$Css$rgb, 255, 255, 255) : A3($rtfeldman$elm_css$Css$rgb, 0, 0, 0);
	});
var $author$project$KeyboardView$keyHoverColor = function (isSelected) {
	return isSelected ? A3($rtfeldman$elm_css$Css$rgb, 194, 168, 116) : A3($rtfeldman$elm_css$Css$rgb, 150, 150, 150);
};
var $author$project$KeyboardView$keyIsSelected = F2(
	function (key, selectedKey) {
		if (selectedKey.$ === 'Nothing') {
			return false;
		} else {
			var k = selectedKey.a;
			return _Utils_eq(key.id, k.id);
		}
	});
var $author$project$KeyboardView$keyPadding = 5;
var $author$project$KeyboardView$offsetX = 10;
var $author$project$KeyboardView$keyX = function (key) {
	return (key.x * ($author$project$KeyboardView$keySize + $author$project$KeyboardView$keyPadding)) + $author$project$KeyboardView$offsetX;
};
var $author$project$KeyboardView$offsetY = 10;
var $author$project$KeyboardView$keyY = function (key) {
	return (key.y * ($author$project$KeyboardView$keySize + $author$project$KeyboardView$keyPadding)) + $author$project$KeyboardView$offsetY;
};
var $rtfeldman$elm_css$Css$left = $rtfeldman$elm_css$Css$prop1('left');
var $rtfeldman$elm_css$Css$solid = {borderStyle: $rtfeldman$elm_css$Css$Structure$Compatible, textDecorationStyle: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'solid'};
var $rtfeldman$elm_css$Css$top = $rtfeldman$elm_css$Css$prop1('top');
var $author$project$KeyboardView$keyView = F5(
	function (key, layerIndex, selectedKey, hovering, language) {
		var y = $author$project$KeyboardView$keyY(key);
		var x = $author$project$KeyboardView$keyX(key);
		var keyText = function () {
			if (hovering) {
				return '...';
			} else {
				var _v0 = key.actions;
				if (_v0.$ === 'LayerModifier') {
					var keyCode = _v0.a;
					return $author$project$KeyCodes$layerModifierCodeToString(keyCode);
				} else {
					var layers = _v0.a;
					var _v1 = A2($author$project$Keyboard$selectedLayerAction, layers, layerIndex);
					if (_v1.$ === 'Nothing') {
						return '';
					} else {
						var action = _v1.a;
						if (action.$ === 'Single') {
							var keyCode = action.a;
							return A2($author$project$KeyCodes$keyCodeToString, keyCode, language);
						} else {
							return '[..]';
						}
					}
				}
			}
		}();
		var keyBorderStyle = hovering ? $rtfeldman$elm_css$Css$dashed : $rtfeldman$elm_css$Css$solid;
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$width(
							$rtfeldman$elm_css$Css$px((key.width * $author$project$KeyboardView$keySize) + ((key.width - 1) * $author$project$KeyboardView$keyPadding))),
							$rtfeldman$elm_css$Css$height(
							$rtfeldman$elm_css$Css$px((key.height * $author$project$KeyboardView$keySize) + ((key.height - 1) * $author$project$KeyboardView$keyPadding))),
							$rtfeldman$elm_css$Css$backgroundColor(
							A2(
								$author$project$KeyboardView$keyBackgroundColor,
								A2($author$project$KeyboardView$keyIsSelected, key, selectedKey),
								hovering)),
							$rtfeldman$elm_css$Css$color(
							A2(
								$author$project$KeyboardView$keyForegroundColor,
								A2($author$project$KeyboardView$keyIsSelected, key, selectedKey),
								hovering)),
							$rtfeldman$elm_css$Css$top(
							$rtfeldman$elm_css$Css$px(y)),
							$rtfeldman$elm_css$Css$left(
							$rtfeldman$elm_css$Css$px(x)),
							$rtfeldman$elm_css$Css$borderColor(
							A2(
								$author$project$KeyboardView$keyBorderColor,
								A2($author$project$KeyboardView$keyIsSelected, key, selectedKey),
								hovering)),
							$rtfeldman$elm_css$Css$borderStyle(keyBorderStyle),
							$rtfeldman$elm_css$Css$hover(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$backgroundColor(
									$author$project$KeyboardView$keyHoverColor(
										A2($author$project$KeyboardView$keyIsSelected, key, selectedKey)))
								]))
						])),
					$rtfeldman$elm_css$Html$Styled$Attributes$class('keyContainer'),
					$rtfeldman$elm_css$Html$Styled$Events$onClick(
					$author$project$Messages$KeyClicked(key))
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('keyText')
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(keyText)
						]))
				]));
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_css$Css$position = $rtfeldman$elm_css$Css$prop1('position');
var $rtfeldman$elm_css$Css$relative = {position: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'relative'};
var $author$project$KeyboardView$keyboardView = F5(
	function (layout, layerIndex, selectedKey, hovering, language) {
		var maxKeyY = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$maximum(
				A2($elm$core$List$map, $author$project$KeyboardView$keyY, layout)));
		var viewHeight = $rtfeldman$elm_css$Css$height(
			$rtfeldman$elm_css$Css$px((maxKeyY + $author$project$KeyboardView$keySize) + $author$project$KeyboardView$offsetY));
		var maxKeyX = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$maximum(
				A2($elm$core$List$map, $author$project$KeyboardView$keyX, layout)));
		var viewWidth = $rtfeldman$elm_css$Css$width(
			$rtfeldman$elm_css$Css$px((maxKeyX + $author$project$KeyboardView$keySize) + $author$project$KeyboardView$offsetX));
		var viewCss = $rtfeldman$elm_css$Html$Styled$Attributes$css(
			_List_fromArray(
				[
					viewWidth,
					viewHeight,
					$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative)
				]));
		var keys = A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[viewCss]),
			A2(
				$elm$core$List$map,
				function (k) {
					return A5($author$project$KeyboardView$keyView, k, layerIndex, selectedKey, hovering, language);
				},
				layout));
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[keys]));
	});
var $rtfeldman$elm_css$Html$Styled$h3 = $rtfeldman$elm_css$Html$Styled$node('h3');
var $author$project$Messages$UpdateBooleanSetting = F2(
	function (a, b) {
		return {$: 'UpdateBooleanSetting', a: a, b: b};
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$checked = $rtfeldman$elm_css$Html$Styled$Attributes$boolProperty('checked');
var $rtfeldman$elm_css$Html$Styled$Attributes$for = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('htmlFor');
var $rtfeldman$elm_css$Html$Styled$label = $rtfeldman$elm_css$Html$Styled$node('label');
var $rtfeldman$elm_css$Html$Styled$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $rtfeldman$elm_css$Html$Styled$Events$onCheck = function (tagger) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $rtfeldman$elm_css$Html$Styled$Events$targetChecked));
};
var $author$project$SettingsView$booleanSettingsFieldView = F3(
	function (settingNumber, settingName, settingValue) {
		var numStr = $elm$core$String$fromInt(settingNumber);
		var checked = $rtfeldman$elm_css$Html$Styled$Attributes$checked(settingValue);
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$label,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$for(numStr)
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(settingName + ': ')
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$input,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$type_('checkbox'),
							$rtfeldman$elm_css$Html$Styled$Attributes$name(numStr),
							checked,
							$rtfeldman$elm_css$Html$Styled$Events$onCheck(
							$author$project$Messages$UpdateBooleanSetting(settingNumber))
						]),
					_List_Nil)
				]));
	});
var $author$project$Messages$UpdateEnumSetting = F3(
	function (a, b, c) {
		return {$: 'UpdateEnumSetting', a: a, b: b, c: c};
	});
var $author$project$SettingsView$enumSettingsFieldView = F4(
	function (settingNumber, settingName, settingValue, strOptions) {
		var toInt = function (str) {
			var _v0 = $elm$core$String$toInt(str);
			if (_v0.$ === 'Just') {
				var i = _v0.a;
				return i;
			} else {
				return 0;
			}
		};
		var optionFromEnumValue = F2(
			function (index, strOpt) {
				return A2(
					$rtfeldman$elm_css$Html$Styled$option,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$value(
							$elm$core$String$fromInt(index)),
							$rtfeldman$elm_css$Html$Styled$Attributes$selected(
							_Utils_eq(settingValue, index))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(strOpt)
						]));
			});
		var optionsHtml = A2($elm$core$List$indexedMap, optionFromEnumValue, strOptions);
		var numStr = $elm$core$String$fromInt(settingNumber);
		var enumInputToIndex = function (str) {
			return A3(
				$author$project$Messages$UpdateEnumSetting,
				settingNumber,
				toInt(str),
				strOptions);
		};
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$label,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$for(numStr)
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(settingName + ': ')
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$select,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Events$onInput(enumInputToIndex)
						]),
					optionsHtml)
				]));
	});
var $author$project$Messages$UpdateIntegerSetting = F4(
	function (a, b, c, d) {
		return {$: 'UpdateIntegerSetting', a: a, b: b, c: c, d: d};
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$max = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('max');
var $rtfeldman$elm_css$Html$Styled$Attributes$min = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('min');
var $author$project$SettingsView$integerSettingsFieldView = F5(
	function (settingNumber, settingName, settingValue, minValue, maxValue) {
		var numStr = $elm$core$String$fromInt(settingNumber);
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$label,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$for(numStr)
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(settingName + ': ')
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$input,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('integerSpinner'),
							$rtfeldman$elm_css$Html$Styled$Attributes$type_('number'),
							$rtfeldman$elm_css$Html$Styled$Attributes$value(
							$elm$core$String$fromInt(settingValue)),
							$rtfeldman$elm_css$Html$Styled$Attributes$name(numStr),
							$rtfeldman$elm_css$Html$Styled$Attributes$min(
							$elm$core$String$fromInt(minValue)),
							$rtfeldman$elm_css$Html$Styled$Attributes$max(
							$elm$core$String$fromInt(maxValue)),
							$rtfeldman$elm_css$Html$Styled$Events$onInput(
							A3($author$project$Messages$UpdateIntegerSetting, settingNumber, minValue, maxValue))
						]),
					_List_Nil)
				]));
	});
var $author$project$SettingsView$settingsFieldView = function (settingsField) {
	var _v0 = settingsField;
	var settingNumber = _v0.a;
	var name = _v0.b;
	var field = _v0.c;
	var fieldView = function () {
		switch (field.$) {
			case 'IntegerField':
				var settingValue = field.a;
				var minValue = field.b;
				var maxValue = field.c;
				return A5($author$project$SettingsView$integerSettingsFieldView, settingNumber, name, settingValue, minValue, maxValue);
			case 'BooleanField':
				var settingValue = field.a;
				return A3($author$project$SettingsView$booleanSettingsFieldView, settingNumber, name, settingValue);
			default:
				var settingValue = field.a;
				var strOptions = field.b;
				return A4($author$project$SettingsView$enumSettingsFieldView, settingNumber, name, settingValue, strOptions);
		}
	}();
	return fieldView;
};
var $author$project$SettingsView$settingsGroupView = function (settingsGroup) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$h3,
				_List_Nil,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$text(settingsGroup.name)
					])),
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_Nil,
				A2($elm$core$List$map, $author$project$SettingsView$settingsFieldView, settingsGroup.settings))
			]));
};
var $author$project$SettingsView$settingsView = function (settings) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$class('whiteText')
			]),
		A2($elm$core$List$map, $author$project$SettingsView$settingsGroupView, settings));
};
var $author$project$Messages$SetLanguage = function (a) {
	return {$: 'SetLanguage', a: a};
};
var $author$project$Messages$SetLayer = function (a) {
	return {$: 'SetLayer', a: a};
};
var $author$project$ViewControl$viewControl = F2(
	function (currentLayerIndex, language) {
		var layerInputToMessage = function (str) {
			switch (str) {
				case '0':
					return $author$project$Messages$SetLayer(0);
				case '1':
					return $author$project$Messages$SetLayer(1);
				case '2':
					return $author$project$Messages$SetLayer(2);
				default:
					return $author$project$Messages$SetLayer(0);
			}
		};
		var languageInputToMessage = function (str) {
			switch (str) {
				case 'se':
					return $author$project$Messages$SetLanguage($author$project$Language$Swedish);
				case 'en':
					return $author$project$Messages$SetLanguage($author$project$Language$English);
				default:
					return $author$project$Messages$SetLanguage($author$project$Language$Swedish);
			}
		};
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$select,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('layerViewControl'),
							$rtfeldman$elm_css$Html$Styled$Events$onInput(layerInputToMessage)
						]),
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$option,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$value('0'),
									$rtfeldman$elm_css$Html$Styled$Attributes$selected(!currentLayerIndex)
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text('Layer 1')
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$option,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$value('1'),
									$rtfeldman$elm_css$Html$Styled$Attributes$selected(currentLayerIndex === 1)
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text('Layer 2')
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$option,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$value('2'),
									$rtfeldman$elm_css$Html$Styled$Attributes$selected(currentLayerIndex === 2)
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text('Layer 3')
								]))
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$select,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$class('layerViewControl'),
							$rtfeldman$elm_css$Html$Styled$Events$onInput(languageInputToMessage)
						]),
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$option,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$value('se'),
									$rtfeldman$elm_css$Html$Styled$Attributes$selected(
									_Utils_eq(language, $author$project$Language$Swedish))
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text('🇸🇪')
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$option,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$value('en'),
									$rtfeldman$elm_css$Html$Styled$Attributes$selected(
									_Utils_eq(language, $author$project$Language$English))
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text('🇺🇸')
								]))
						]))
				]));
	});
var $author$project$Main$view = function (model) {
	var keyInputView = function () {
		var _v0 = model.selectedKey;
		if (_v0.$ === 'Nothing') {
			return A2(
				$rtfeldman$elm_css$Html$Styled$span,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$class('whiteText inputViewControl')
					]),
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$text('Please select a key')
					]));
		} else {
			var key = _v0.a;
			return A3($author$project$InputView$inputView, key, model.currentLayerIndex, model.language);
		}
	}();
	var totalView = A7(
		$author$project$UI$configuratorView,
		model.name,
		model.hovering,
		A2($author$project$ViewControl$viewControl, model.currentLayerIndex, model.language),
		A5($author$project$KeyboardView$keyboardView, model.layout, model.currentLayerIndex, model.selectedKey, model.hovering, model.language),
		keyInputView,
		$author$project$FileView$fileView(model.name),
		$author$project$SettingsView$settingsView(model.settings));
	return totalView;
};
var $author$project$Main$main = function () {
	var toDocument = F3(
		function (title, htmlView, model) {
			return {
				body: _List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$toUnstyled(
						htmlView(model))
					]),
				title: title
			};
		});
	return $elm$browser$Browser$document(
		{
			init: $author$project$Main$init,
			subscriptions: $author$project$Main$subscriptions,
			update: $author$project$Main$update,
			view: A2(toDocument, 'Keyboard configurator', $author$project$Main$view)
		});
}();
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));