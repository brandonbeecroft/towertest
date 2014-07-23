
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_signup-btnCopy2}","click",function(sym,e){sym.stop(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1100,function(sym,e){sym.$("rrec").css({'width':'473px','height':'397px','overflow':'hidden','color':'#fff'});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'
})(jQuery,AdobeEdge,"EDGE-39185663");