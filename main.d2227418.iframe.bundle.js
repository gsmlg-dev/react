(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/Xiangqi/Xiangqi.stories.tsx":"./src/components/Xiangqi/Xiangqi.stories.tsx","./mui/Vultr/NodeCard.stories.tsx":"./src/mui/Vultr/NodeCard.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Xiangqi/Xiangqi.sample.json":function(module){module.exports=JSON.parse('{"pieces":[{"color":"red","id":"r0","live":true,"name":"车","position":{"x":0,"y":0},"type":4},{"color":"red","id":"r1","live":true,"name":"马","position":{"x":1,"y":0},"type":3},{"color":"red","id":"r2","live":true,"name":"相","position":{"x":2,"y":0},"type":2},{"color":"red","id":"r3","live":true,"name":"士","position":{"x":3,"y":0},"type":1},{"color":"red","id":"r4","live":true,"name":"帅","position":{"x":4,"y":0},"type":0},{"color":"red","id":"r5","live":true,"name":"士","position":{"x":5,"y":0},"type":1},{"color":"red","id":"r6","live":true,"name":"相","position":{"x":6,"y":0},"type":2},{"color":"red","id":"r7","live":true,"name":"马","position":{"x":7,"y":0},"type":3},{"color":"red","id":"r8","live":true,"name":"车","position":{"x":8,"y":0},"type":4},{"color":"red","id":"r9","live":true,"name":"炮","position":{"x":1,"y":2},"type":5},{"color":"red","id":"r10","live":true,"name":"炮","position":{"x":7,"y":2},"type":5},{"color":"red","id":"r11","live":true,"name":"兵","position":{"x":0,"y":3},"type":6},{"color":"red","id":"r12","live":true,"name":"兵","position":{"x":2,"y":3},"type":6},{"color":"red","id":"r13","live":true,"name":"兵","position":{"x":4,"y":3},"type":6},{"color":"red","id":"r14","live":true,"name":"兵","position":{"x":6,"y":3},"type":6},{"color":"red","id":"r15","live":true,"name":"兵","position":{"x":8,"y":3},"type":6},{"color":"black","id":"b0","live":true,"name":"車","position":{"x":0,"y":9},"type":4},{"color":"black","id":"b1","live":true,"name":"馬","position":{"x":1,"y":9},"type":3},{"color":"black","id":"b2","live":true,"name":"象","position":{"x":2,"y":9},"type":2},{"color":"black","id":"b3","live":true,"name":"仕","position":{"x":3,"y":9},"type":1},{"color":"black","id":"b4","live":true,"name":"将","position":{"x":4,"y":9},"type":0},{"color":"black","id":"b5","live":true,"name":"仕","position":{"x":5,"y":9},"type":1},{"color":"black","id":"b6","live":true,"name":"象","position":{"x":6,"y":9},"type":2},{"color":"black","id":"b7","live":true,"name":"馬","position":{"x":7,"y":9},"type":3},{"color":"black","id":"b8","live":true,"name":"車","position":{"x":8,"y":9},"type":4},{"color":"black","id":"b9","live":true,"name":"砲","position":{"x":1,"y":7},"type":5},{"color":"black","id":"b10","live":true,"name":"砲","position":{"x":7,"y":7},"type":5},{"color":"black","id":"b11","live":true,"name":"卒","position":{"x":0,"y":6},"type":6},{"color":"black","id":"b12","live":true,"name":"卒","position":{"x":2,"y":6},"type":6},{"color":"black","id":"b13","live":true,"name":"卒","position":{"x":4,"y":6},"type":6},{"color":"black","id":"b14","live":true,"name":"卒","position":{"x":6,"y":6},"type":6},{"color":"black","id":"b15","live":true,"name":"卒","position":{"x":8,"y":6},"type":6}],"turn":"red"}')},"./src/components/Xiangqi/Xiangqi.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Sample",(function(){return Sample}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react-dnd-html5-backend/dist/esm/index.js")),dist_esm=__webpack_require__("./node_modules/react-dnd-touch-backend/dist/esm/index.js"),DndProvider=__webpack_require__("./node_modules/react-dnd/dist/esm/core/DndProvider.js"),DropTarget=(__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/react-dnd/dist/esm/decorators/DropTarget.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Xiangqi_Square=Object(DropTarget.a)("Piece",{canDrop:function canDrop(props,monitor){var item=monitor.getItem(),x=props.x,y=props.y,pieces=props.pieces;return props.canDrop(item,{x:x,y:y},pieces)},hover:function hover(_props,monitor,_component){monitor.isOver({shallow:!0}),monitor.canDrop()},drop:function drop(props,monitor,_component){if(!monitor.didDrop()){var item=monitor.getItem(),x=props.x,y=props.y;return props.movePiece(item,{x:x,y:y}),props.kill(),{moved:!0}}}},(function collect(connect,monitor){return{connectDropTarget:connect.dropTarget(),isOver:monitor.isOver(),isOverCurrent:monitor.isOver({shallow:!0}),isDropable:monitor.canDrop(),itemType:monitor.getItemType()}}))((function Square(_ref){var x=_ref.x,y=_ref.y,isDropable=_ref.isDropable,connectDropTarget=_ref.connectDropTarget,piece=_ref.piece,children=_ref.children,bgColor=isDropable?piece?"red":"green":"transparent";return connectDropTarget(Object(jsx_runtime.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:bgColor},children:[Object(jsx_runtime.jsx)("div",{style:{height:"1px",width:[0,8].includes(x)?"50%":"100%",backgroundColor:"black",transform:"translate("+(0===x?"30px":0)+", 30px)"}}),Object(jsx_runtime.jsx)("div",{style:{height:[0,9].includes(y)||[4,5].includes(y)&&![0,8].includes(x)?"50%":"100%",width:"1px",backgroundColor:"black",transform:"translate(30px, "+(0===y||5===y&&![0,8].includes(x)?"30px":0)+")"}}),children]}))})),DragSource=__webpack_require__("./node_modules/react-dnd/dist/esm/decorators/DragSource.js"),Xiangqi_Piece=Object(DragSource.a)("Piece",{canDrag:function canDrag(props){return props.item.color===props.turn},isDragging:function isDragging(props,monitor){return monitor.getItem().id===props.item.id},beginDrag:function beginDrag(props,_monitor,_component){return props.item},endDrag:function endDrag(props,monitor,_component){if(monitor.didDrop())monitor.getItem(),monitor.getDropResult()}},(function collect(connect,monitor){return{connectDragSource:connect.dragSource(),isDragging:monitor.isDragging()}}))((function Piece(_ref){var connectDragSource=_ref.connectDragSource,item=_ref.item;return connectDragSource(Object(jsx_runtime.jsx)("div",{style:{width:"50px",height:"50px",position:"absolute",left:"50%",top:"50%",marginTop:"-25px",marginLeft:"-25px",fontSize:"30px",textAlign:"center",lineHeight:"50px",border:"1px solid black",borderRadius:"50%",backgroundColor:"white",userSelect:"none",color:item.color},children:item.name}))})),ChessBoard_ChessBoard=function ChessBoard(_ref){for(var blackPieces=_ref.blackPieces,redPieces=_ref.redPieces,movePiece=_ref.movePiece,turn=_ref.turn,kill=_ref.kill,canDrop=_ref.canDrop,allPieces=redPieces.concat(blackPieces),renderSquare=function renderSquare(i){var x=i%9,y=Math.floor(i/9),pieces=allPieces.filter((function(p){return p.live})),item=pieces.find((function(_ref2){var _ref2$position=_ref2.position,px=_ref2$position.x,py=_ref2$position.y;return px===x&&py===y})),key=item?Object(jsx_runtime.jsx)(Xiangqi_Piece,{item:item,turn:turn}):null;return Object(jsx_runtime.jsx)("div",{style:{width:"60px",height:"60px",position:"relative",backgroundColor:"transparent"},children:Object(jsx_runtime.jsx)(Xiangqi_Square,{piece:item,x:x,y:y,movePiece:movePiece,pieces:pieces,kill:function killPiece(){item&&kill(item)},canDrop:canDrop,children:key})},"key-"+i)},squares=[],i=0;i<90;i+=1)squares.push(renderSquare(i));return Object(jsx_runtime.jsxs)("div",{style:{width:"540px",height:"600px",display:"flex",flexWrap:"wrap",position:"relative"},children:[squares,Object(jsx_runtime.jsx)("div",{style:{position:"absolute",top:"50%",left:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"},children:"楚 河"}),Object(jsx_runtime.jsx)("div",{style:{position:"absolute",top:"50%",right:"25%",marginTop:"-30px",height:"60px",lineHeight:"60px",fontSize:"24px",userSelect:"none"},children:"漢 界"})]})};ChessBoard_ChessBoard.displayName="ChessBoard";var ChessColor,PieceType;try{ChessBoard_ChessBoard.displayName="ChessBoard",ChessBoard_ChessBoard.__docgenInfo={description:"",displayName:"ChessBoard",props:{redPieces:{defaultValue:null,description:"",name:"redPieces",required:!0,type:{name:"PieceShape[]"}},blackPieces:{defaultValue:null,description:"",name:"blackPieces",required:!0,type:{name:"PieceShape[]"}},kill:{defaultValue:null,description:"",name:"kill",required:!0,type:{name:"(item: PieceShape) => PieceShape"}},movePiece:{defaultValue:null,description:"",name:"movePiece",required:!0,type:{name:"(item: PieceShape, pos: PositionShape) => void"}},canDrop:{defaultValue:null,description:"",name:"canDrop",required:!0,type:{name:"(item: PieceShape, pos: PositionShape, pieces: PieceShape[]) => boolean"}},turn:{defaultValue:null,description:"",name:"turn",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"red"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Xiangqi/ChessBoard.tsx#ChessBoard"]={docgenInfo:ChessBoard_ChessBoard.__docgenInfo,name:"ChessBoard",path:"src/components/Xiangqi/ChessBoard.tsx#ChessBoard"})}catch(__react_docgen_typescript_loader_error){}!function(ChessColor){ChessColor.Black="black",ChessColor.Red="red"}(ChessColor||(ChessColor={})),function(PieceType){PieceType[PieceType.General=0]="General",PieceType[PieceType.Advisor=1]="Advisor",PieceType[PieceType.Elephant=2]="Elephant",PieceType[PieceType.Horse=3]="Horse",PieceType[PieceType.Chariot=4]="Chariot",PieceType[PieceType.Cannon=5]="Cannon",PieceType[PieceType.Soldier=6]="Soldier"}(PieceType||(PieceType={}));var findPos=function findPos(pieces,p){return pieces.find((function(_ref){var _ref$position=_ref.position,x=_ref$position.x,y=_ref$position.y;return p.x===x&&p.y===y}))},findGeneral=function findGeneral(pieces,color){return pieces.find((function(_ref2){var c=_ref2.color;return 0===_ref2.type&&c===color}))},Xiangqi_canDrop=function canDrop(item,pos,pieces){var fx=item.position.x,fy=item.position.y,tx=pos.x,ty=pos.y,target=findPos(pieces,pos);if(target&&target.color===item.color)return!1;var hasntPiece=function hasntPiece(pos_){return!findPos(pieces,pos_)},rk=findGeneral(pieces,ChessColor.Red),bk=findGeneral(pieces,ChessColor.Black);if(!rk||!bk)return!1;if(0!==item.type&&rk.position.x===bk.position.x&&fx===rk.position.x){for(var count=0,i=rk.position.y+1;i<bk.position.y;i++)hasntPiece({x:fx,y:i})||count++;if(1===count&&tx!==fx)return!1}switch(item.type){case PieceType.General:if(tx<3||tx>5)return!1;if("red"===item.color&&ty>2)return!1;if("black"===item.color&&ty<7)return!1;if("red"===item.color){if(tx===bk.position.x){for(var _count=0,_i=rk.position.y+1;_i<bk.position.y;_i++)hasntPiece({x:tx,y:_i})||_count++;if(0===_count)return!1}}else if(tx===rk.position.x){for(var _count2=0,_i2=rk.position.y+1;_i2<bk.position.y;_i2++)hasntPiece({x:tx,y:_i2})||_count2++;if(0===_count2)return!1}return tx===fx&&(ty===fy+1||ty===fy-1)||ty===fy&&(tx===fx+1||tx===fx-1);case PieceType.Advisor:return!(tx<3||tx>5)&&(!("red"===item.color&&ty>2)&&(!("black"===item.color&&ty<7)&&(tx===fx+1&&(ty===fy+1||ty===fy-1)||tx===fx-1&&(ty===fy+1||ty===fy-1))));case PieceType.Elephant:return!("red"===item.color&&ty>4)&&(!("black"===item.color&&ty<5)&&(!(!hasntPiece({x:fx-1,y:fy-1})||tx!==fx-2||ty!==fy-2)||(!(!hasntPiece({x:fx-1,y:fy+1})||tx!==fx-2||ty!==fy+2)||(!(!hasntPiece({x:fx+1,y:fy-1})||tx!==fx+2||ty!==fy-2)||!(!hasntPiece({x:fx+1,y:fy+1})||tx!==fx+2||ty!==fy+2)))));case PieceType.Horse:return!(!hasntPiece({x:fx-1,y:fy})||tx!==fx-2||ty!==fy+1&&ty!==fy-1)||(!(!hasntPiece({x:fx+1,y:fy})||tx!==fx+2||ty!==fy+1&&ty!==fy-1)||(!(!hasntPiece({x:fx,y:fy-1})||ty!==fy-2||tx!==fx+1&&tx!==fx-1)||!(!hasntPiece({x:fx,y:fy+1})||ty!==fy+2||tx!==fx+1&&tx!==fx-1)));case PieceType.Chariot:if(fx===tx){var _count3=0;if(ty>fy)for(var _i3=fy+1;_i3<=ty;_i3++)findPos(pieces,{x:fx,y:_i3})&&_count3++;else for(var _i4=fy-1;_i4>=ty;_i4--)findPos(pieces,{x:fx,y:_i4})&&_count3++;return 0===_count3||1===_count3&&!!target}if(fy===ty){var _count4=0;if(tx>fx)for(var _i5=fx+1;_i5<=tx;_i5++)findPos(pieces,{x:_i5,y:fy})&&_count4++;else for(var _i6=fx-1;_i6>=tx;_i6--)findPos(pieces,{x:_i6,y:fy})&&_count4++;return 0===_count4||1===_count4&&!!target}return!1;case PieceType.Cannon:if(fx===tx){var _count5=0;if(ty>fy)for(var _i7=fy+1;_i7<=ty;_i7++)findPos(pieces,{x:fx,y:_i7})&&_count5++;else for(var _i8=fy-1;_i8>=ty;_i8--)findPos(pieces,{x:fx,y:_i8})&&_count5++;return 0===_count5||2===_count5&&!!target}if(fy===ty){var _count6=0;if(tx>fx)for(var _i9=fx+1;_i9<=tx;_i9++)findPos(pieces,{x:_i9,y:fy})&&_count6++;else for(var _i10=fx-1;_i10>=tx;_i10--)findPos(pieces,{x:_i10,y:fy})&&_count6++;return 0===_count6||2===_count6&&!!target}return!1;case PieceType.Soldier:return"red"===item.color?item.position.y>4?pos.x===item.position.x&&pos.y===item.position.y+1||pos.x===item.position.x+1&&pos.y===item.position.y||pos.x===item.position.x-1&&pos.y===item.position.y:pos.x===item.position.x&&pos.y===item.position.y+1:item.position.y<5?pos.x===item.position.x&&pos.y===item.position.y-1||pos.x===item.position.x+1&&pos.y===item.position.y||pos.x===item.position.x-1&&pos.y===item.position.y:pos.x===item.position.x&&pos.y===item.position.y-1}return!1};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DndContext_DragDropContext=function DragDropContext(props){var _useState2=_slicedToArray(Object(react.useState)(!1),2),hasTouch=_useState2[0],setTouchable=_useState2[1];Object(react.useEffect)((function(){var touchable=!1;"ontouchstart"in window.document.documentElement&&(touchable=!0),window.navigator.hasOwnProperty("pointerEnabled")&&(touchable=!0),window.navigator.hasOwnProperty("msPointerEnabled")&&(touchable=!0),setTouchable(touchable)}),[]);var redPieces=props.redPieces,blackPieces=props.blackPieces,kill=props.kill,movePiece=props.movePiece,turn=props.turn;return Object(jsx_runtime.jsx)(DndProvider.a,{backend:hasTouch?dist_esm.a:esm.a,children:Object(jsx_runtime.jsx)(ChessBoard_ChessBoard,{redPieces:redPieces,blackPieces:blackPieces,kill:kill,movePiece:movePiece,canDrop:Xiangqi_canDrop,turn:turn})})};DndContext_DragDropContext.displayName="DragDropContext";var Xiangqi_DndContext=DndContext_DragDropContext;try{DndContext.displayName="DndContext",DndContext.__docgenInfo={description:"",displayName:"DndContext",props:{redPieces:{defaultValue:null,description:"",name:"redPieces",required:!0,type:{name:"PieceShape[]"}},blackPieces:{defaultValue:null,description:"",name:"blackPieces",required:!0,type:{name:"PieceShape[]"}},kill:{defaultValue:null,description:"",name:"kill",required:!0,type:{name:"(item: PieceShape) => PieceShape"}},movePiece:{defaultValue:null,description:"",name:"movePiece",required:!0,type:{name:"(item: PieceShape, pos: PositionShape) => void"}},turn:{defaultValue:null,description:"",name:"turn",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"red"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Xiangqi/DndContext.tsx#DndContext"]={docgenInfo:DndContext.__docgenInfo,name:"DndContext",path:"src/components/Xiangqi/DndContext.tsx#DndContext"})}catch(__react_docgen_typescript_loader_error){}var Xiangqi_sample=__webpack_require__("./src/components/Xiangqi/Xiangqi.sample.json"),Xiangqi_stories_Template=(__webpack_exports__.default={title:"components/Xiangqi",component:Xiangqi_DndContext,argTypes:{turn:ChessColor}},function Template(args){return Object(jsx_runtime.jsx)(Xiangqi_DndContext,Object.assign({},args))});Xiangqi_stories_Template.displayName="Template";var Sample=Xiangqi_stories_Template.bind({}),red=Xiangqi_sample.pieces.filter((function(p){return p.color===ChessColor.Red})),black=Xiangqi_sample.pieces.filter((function(p){return p.color===ChessColor.Black}));Sample.args={redPieces:red,blackPieces:black,kill:function kill(item){item.live=!1;var list=item.color===ChessColor.Red?red:black,idx=list.findIndex((function(p){return p.id===item.id}));list.splice(idx,1)},movePiece:function movePiece(item,pos){item.position=pos;var list=item.color===ChessColor.Red?red:black,idx=list.findIndex((function(p){return p.id===item.id}));list.splice(idx,1,item)},turn:ChessColor.Red},Sample.parameters=Object.assign({storySource:{source:"(args) => <Xiangqi {...args} />"}},Sample.parameters)},"./src/mui/Vultr/NodeCard.sample.json":function(module){module.exports=JSON.parse('{"ams":{"name":"阿姆斯特丹","host":"ams-nl-ping.vultr.com","delay":59,"minDelay":10,"maxDelay":420,"averageDelay":120,"lost":0,"times":3}}')},"./src/mui/Vultr/NodeCard.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Sample",(function(){return Sample})),__webpack_require__.d(__webpack_exports__,"SampleWithStyle",(function(){return SampleWithStyle}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),Paper=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/@mui/material/Paper/Paper.js")),Card=__webpack_require__("./node_modules/@mui/material/Card/Card.js"),CardHeader=__webpack_require__("./node_modules/@mui/material/CardHeader/CardHeader.js"),CardContent=__webpack_require__("./node_modules/@mui/material/CardContent/CardContent.js"),Avatar=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["host"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var NodeCard=react.forwardRef((function(_ref,ref){var host=_ref.host,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(Paper.a,Object.assign({},props,{ref:ref,children:Object(jsx_runtime.jsxs)(Card.a,{children:[Object(jsx_runtime.jsx)(CardHeader.a,{avatar:Object(jsx_runtime.jsx)(Avatar.a,{"aria-label":"Recipe",children:host.name[0]}),title:host.name,subheader:host.host}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)(CardContent.a,{children:Object(jsx_runtime.jsxs)(Typography.a,{component:"div",children:[Object(jsx_runtime.jsx)("span",{children:"Delay: "}),Object(jsx_runtime.jsxs)("span",{children:[host.delay,"ms"]}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)("span",{children:"Min Delay: "}),Object(jsx_runtime.jsxs)("span",{children:[host.minDelay,"ms"]}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)("span",{children:"Max Delay: "}),Object(jsx_runtime.jsxs)("span",{children:[host.maxDelay,"ms"]}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)("span",{children:"Average Delay: "}),Object(jsx_runtime.jsxs)("span",{children:[host.averageDelay,"ms"]}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)("span",{children:"Package Lost: "}),Object(jsx_runtime.jsxs)("span",{children:[host.lost,"%"]}),Object(jsx_runtime.jsx)(Divider.a,{}),Object(jsx_runtime.jsx)("span",{children:"Times: "}),Object(jsx_runtime.jsx)("span",{children:host.times})]})})]})}))}));NodeCard.displayName="NodeCard";try{NodeCard.displayName="NodeCard",NodeCard.__docgenInfo={description:"",displayName:"NodeCard",props:{host:{defaultValue:null,description:"",name:"host",required:!0,type:{name:"Host"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mui/Vultr/NodeCard.tsx#NodeCard"]={docgenInfo:NodeCard.__docgenInfo,name:"NodeCard",path:"src/mui/Vultr/NodeCard.tsx#NodeCard"})}catch(__react_docgen_typescript_loader_error){}var NodeCard_sample=__webpack_require__("./src/mui/Vultr/NodeCard.sample.json"),NodeCard_stories_Template=(__webpack_exports__.default={title:"mui/Vultr/NodeCard",component:NodeCard,argTypes:{host:NodeCard_sample.ams}},function Template(args){return Object(jsx_runtime.jsx)(NodeCard,Object.assign({},args))});NodeCard_stories_Template.displayName="Template";var Sample=NodeCard_stories_Template.bind({});Sample.args={host:NodeCard_sample.ams};var SampleWithStyle=NodeCard_stories_Template.bind({});SampleWithStyle.args={host:NodeCard_sample.ams,style:{maxWidth:"24rem"}},Sample.parameters=Object.assign({storySource:{source:"(args) => <NodeCard {...args} />"}},Sample.parameters),SampleWithStyle.parameters=Object.assign({storySource:{source:"(args) => <NodeCard {...args} />"}},SampleWithStyle.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);