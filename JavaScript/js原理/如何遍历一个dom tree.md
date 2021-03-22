---
title: 如何遍历一个dom tree
date: 2019-11-05 18:39:52
permalink: /pages/abdbcb/
categories:
  - js原理
tags:
  - JavaScript
---
```js
function travelsal(node) {
    if(node && node.nodeType === 1) { //是元素节点
        console.log(node.tagName)
    }
    var i = 0,childNodes = node.childNodes,item;
    for(;i < childNodes.length; i++) {
        item = childNodes[i];
        if(item.nodeType === 1) {
            travelsal(item)
        }
    }
}
```

| 常量 | 值 | 描述 |
| :-----| :-----| :-----|
| Node.ELEMENT_NODE | 1 | 一个元素节点例如\<p>,\<br> |
| Node.TEXT_NODE | 3 | Element或者Attr中的实际的文字 |
| Node.PROCESSING_INSTRUCTION_NODE | 7 | 一个用于XML文档的ProcessingInstruction，例如\<?xml-stylesheet ...?>
| Node.COMMENT_NODE | 8 | 一个Comment节点 |
| Node.DOCUMENT_NODE | 9 | 一个Document节点 |
| Node.DOCUMENT_TYPE_NODE | 10 | 描述文档类型的 DocumentType 节点。例如 \<!DOCTYPE html>  就是用于 HTML5 的。Node.DOCUMENT_FRAGMENT_NODE11一个 DocumentFragment 节点 |
| Node.DOCUMENT_FRAGMENT_NODE | 11 | 一个 DocumentFragment 节点 |