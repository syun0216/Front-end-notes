(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{355:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。\n示例1：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('输入: "abcabcbb"\n输出: 3 \n解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("示例2：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('输入: "bbbbb"\n输出: 1\n解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("示例3：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('输入: "pwwkew"\n输出: 3\n解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。\n     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("solutions: (执行用时：92 ms)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLongestSubstring = function(s) {\n    if(s.length === 0 || s.length === 1) return s.length; // 如果字符串s的长度为0 或者1 则马上返回该长度\n    var sArr = s.split(\"\"); \n    var _str = '';\n    var _finStr = '';\n    for(var i = 0;i<sArr.length;i++) {\n        if(_str.indexOf(sArr[i]) == -1) { // 如果子串不包含当前的字符\n            _str += sArr[i];\n        }else {\n            var _curIndex = _str.indexOf(sArr[i]) + 1; //获取子串当前重复字符的下一个字符角标\n            _str = _str.substr(_curIndex, _str.length -1) + sArr[i]; //切割子串 + 当前重复的字符\n        }\n        _finStr = _finStr.length > _str.length ? _finStr : _str; // 将较长者赋值给最后子串\n    }\n    return _finStr.length;\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters\n著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);n.default=t.exports}}]);