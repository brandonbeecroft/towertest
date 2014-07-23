/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_signup-btnCopy2}", "click", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.$("rrec").css({
         'width': '473px',
         'height': '397px',
         'overflow': 'hidden',
         'color': '#fff'
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'panel'
   (function(symbolName) {   
   
   })("panel");
   //Edge symbol end:'panel'

})(jQuery, AdobeEdge, "EDGE-39185663");