(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/components/Dropzone/Dropzone.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return DropzoneComponent}));__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _mantine_dropzone__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mantine/dropzone/esm/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),DropzoneComponent=function DropzoneComponent(props){var _props$maxSize,_props$maxFiles,_props$padding,_props$radius,_props$disabled,_props$loading,_props$openRef,_props$multiple,_props$name,_props$activateOnClic,_props$activateOnDrag,_props$activateOnKeyb,_props$dragEventsBubb,_props$autoFocus,_props$onDragEnter,_props$onDragLeave,_props$onDragOver,_props$onFileDialogCa,_props$onFileDialogOp,_props$preventDropOnD,_props$useFsAccessApi;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mantine_dropzone__WEBPACK_IMPORTED_MODULE_1__.a,{accept:props.acceptFiles,onDrop:props.onDrop,onReject:props.rejectedUpload,maxSize:null!==(_props$maxSize=props.maxSize)&&void 0!==_props$maxSize?_props$maxSize:2*Math.pow(1024,2),maxFiles:null!==(_props$maxFiles=props.maxFiles)&&void 0!==_props$maxFiles?_props$maxFiles:1,padding:null!==(_props$padding=props.padding)&&void 0!==_props$padding?_props$padding:void 0,radius:null!==(_props$radius=props.radius)&&void 0!==_props$radius?_props$radius:void 0,disabled:null!==(_props$disabled=props.disabled)&&void 0!==_props$disabled?_props$disabled:void 0,loading:null!==(_props$loading=props.loading)&&void 0!==_props$loading?_props$loading:void 0,openRef:null!==(_props$openRef=props.openRef)&&void 0!==_props$openRef?_props$openRef:void 0,multiple:null!==(_props$multiple=props.multiple)&&void 0!==_props$multiple?_props$multiple:void 0,name:null!==(_props$name=props.name)&&void 0!==_props$name?_props$name:void 0,activateOnClick:null===(_props$activateOnClic=props.activateOnClick)||void 0===_props$activateOnClic||_props$activateOnClic,activateOnDrag:null===(_props$activateOnDrag=props.activateOnDrag)||void 0===_props$activateOnDrag||_props$activateOnDrag,activateOnKeyboard:null===(_props$activateOnKeyb=props.activateOnKeyboard)||void 0===_props$activateOnKeyb||_props$activateOnKeyb,dragEventsBubbling:null===(_props$dragEventsBubb=props.dragEventsBubbling)||void 0===_props$dragEventsBubb||_props$dragEventsBubb,autoFocus:null!==(_props$autoFocus=props.autoFocus)&&void 0!==_props$autoFocus&&_props$autoFocus,onDragEnter:null!==(_props$onDragEnter=props.onDragEnter)&&void 0!==_props$onDragEnter?_props$onDragEnter:void 0,onDragLeave:null!==(_props$onDragLeave=props.onDragLeave)&&void 0!==_props$onDragLeave?_props$onDragLeave:void 0,onDragOver:null!==(_props$onDragOver=props.onDragOver)&&void 0!==_props$onDragOver?_props$onDragOver:void 0,onFileDialogCancel:null!==(_props$onFileDialogCa=props.onFileDialogCancel)&&void 0!==_props$onFileDialogCa?_props$onFileDialogCa:void 0,onFileDialogOpen:null!==(_props$onFileDialogOp=props.onFileDialogOpen)&&void 0!==_props$onFileDialogOp?_props$onFileDialogOp:void 0,preventDropOnDocument:null===(_props$preventDropOnD=props.preventDropOnDocument)||void 0===_props$preventDropOnD||_props$preventDropOnD,useFsAccessApi:null!==(_props$useFsAccessApi=props.useFsAccessApi)&&void 0!==_props$useFsAccessApi&&_props$useFsAccessApi,children:props.children})})};DropzoneComponent.displayName="DropzoneComponent";try{DropzoneComponent.displayName="DropzoneComponent",DropzoneComponent.__docgenInfo={description:"",displayName:"DropzoneComponent",props:{acceptFiles:{defaultValue:null,description:"File types to accept",name:"acceptFiles",required:!0,type:{name:"string[] | Accept | undefined"}},onDrop:{defaultValue:null,description:"Called when files are dropped into dropzone",name:"onDrop",required:!0,type:{name:"(files: FileWithPath[]) => void"}},rejectedUpload:{defaultValue:null,description:"Called when selected files don't meet file restrictions",name:"rejectedUpload",required:!0,type:{name:"(rejectedFile: FileRejection[]) => void"}},padding:{defaultValue:null,description:"Padding from theme.spacing, or number to set padding in px",name:"padding",required:!1,type:{name:"MantineNumberSize"}},radius:{defaultValue:null,description:"Border radius from theme.radius or number to set border-radius in px",name:"radius",required:!1,type:{name:"MantineNumberSize"}},children:{defaultValue:null,description:"Dropzone statues",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Disable files capturing",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Display loading overlay over dropzone",name:"loading",required:!1,type:{name:"boolean"}},openRef:{defaultValue:null,description:"Get open function as ref",name:"openRef",required:!1,type:{name:"ForwardedRef<() => void>"}},multiple:{defaultValue:null,description:"Allow selection of multiple files",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Set maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"Name of the form control. Submitted with the form as part of a name/value pair.",name:"name",required:!1,type:{name:"string"}},maxFiles:{defaultValue:null,description:"Number of files that user can pick",name:"maxFiles",required:!1,type:{name:"number"}},autoFocus:{defaultValue:null,description:"Set to true to autofocus the root element",name:"autoFocus",required:!1,type:{name:"boolean"}},activateOnClick:{defaultValue:null,description:"If false, disables click to open the native file selection dialog",name:"activateOnClick",required:!1,type:{name:"boolean"}},activateOnDrag:{defaultValue:null,description:"If false, disables drag 'n' drop",name:"activateOnDrag",required:!1,type:{name:"boolean"}},activateOnKeyboard:{defaultValue:null,description:"If false, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state.",name:"activateOnKeyboard",required:!1,type:{name:"boolean"}},dragEventsBubbling:{defaultValue:null,description:"If false, stops drag event propagation to parents",name:"dragEventsBubbling",required:!1,type:{name:"boolean"}},onDragEnter:{defaultValue:null,description:"Called when the `dragenter` event occurs",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onDragLeave:{defaultValue:null,description:"Called when the `dragleave` event occurs",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onDragOver:{defaultValue:null,description:"Called when the `dragover` event occurs",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onFileDialogCancel:{defaultValue:null,description:"Called when user closes the file selection dialog with no selection",name:"onFileDialogCancel",required:!1,type:{name:"(() => void)"}},onFileDialogOpen:{defaultValue:null,description:"Called when user opens the file selection dialog",name:"onFileDialogOpen",required:!1,type:{name:"(() => void)"}},preventDropOnDocument:{defaultValue:null,description:"If false, allow dropped items to take over the current browser window",name:"preventDropOnDocument",required:!1,type:{name:"boolean"}},useFsAccessApi:{defaultValue:null,description:'Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true',name:"useFsAccessApi",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropzone/Dropzone.tsx#DropzoneComponent"]={docgenInfo:DropzoneComponent.__docgenInfo,name:"DropzoneComponent",path:"src/components/Dropzone/Dropzone.tsx#DropzoneComponent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dropzone/Models.ts":function(module,__webpack_exports__,__webpack_require__){},"./src/components/Dropzone/Types.ts":function(module,exports){},"./src/components/Dropzone/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Dropzone__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dropzone/Dropzone.tsx");__webpack_require__.d(__webpack_exports__,"DropzoneComponent",(function(){return _Dropzone__WEBPACK_IMPORTED_MODULE_0__.a}));__webpack_require__("./src/components/Dropzone/Types.ts"),__webpack_require__("./src/components/Dropzone/Models.ts");try{DropzoneComponent.displayName="DropzoneComponent",DropzoneComponent.__docgenInfo={description:"",displayName:"DropzoneComponent",props:{acceptFiles:{defaultValue:null,description:"File types to accept",name:"acceptFiles",required:!0,type:{name:"string[] | Accept | undefined"}},onDrop:{defaultValue:null,description:"Called when files are dropped into dropzone",name:"onDrop",required:!0,type:{name:"(files: FileWithPath[]) => void"}},rejectedUpload:{defaultValue:null,description:"Called when selected files don't meet file restrictions",name:"rejectedUpload",required:!0,type:{name:"(rejectedFile: FileRejection[]) => void"}},padding:{defaultValue:null,description:"Padding from theme.spacing, or number to set padding in px",name:"padding",required:!1,type:{name:"MantineNumberSize"}},radius:{defaultValue:null,description:"Border radius from theme.radius or number to set border-radius in px",name:"radius",required:!1,type:{name:"MantineNumberSize"}},children:{defaultValue:null,description:"Dropzone statues",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Disable files capturing",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Display loading overlay over dropzone",name:"loading",required:!1,type:{name:"boolean"}},openRef:{defaultValue:null,description:"Get open function as ref",name:"openRef",required:!1,type:{name:"ForwardedRef<() => void>"}},multiple:{defaultValue:null,description:"Allow selection of multiple files",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Set maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"Name of the form control. Submitted with the form as part of a name/value pair.",name:"name",required:!1,type:{name:"string"}},maxFiles:{defaultValue:null,description:"Number of files that user can pick",name:"maxFiles",required:!1,type:{name:"number"}},autoFocus:{defaultValue:null,description:"Set to true to autofocus the root element",name:"autoFocus",required:!1,type:{name:"boolean"}},activateOnClick:{defaultValue:null,description:"If false, disables click to open the native file selection dialog",name:"activateOnClick",required:!1,type:{name:"boolean"}},activateOnDrag:{defaultValue:null,description:"If false, disables drag 'n' drop",name:"activateOnDrag",required:!1,type:{name:"boolean"}},activateOnKeyboard:{defaultValue:null,description:"If false, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state.",name:"activateOnKeyboard",required:!1,type:{name:"boolean"}},dragEventsBubbling:{defaultValue:null,description:"If false, stops drag event propagation to parents",name:"dragEventsBubbling",required:!1,type:{name:"boolean"}},onDragEnter:{defaultValue:null,description:"Called when the `dragenter` event occurs",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onDragLeave:{defaultValue:null,description:"Called when the `dragleave` event occurs",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onDragOver:{defaultValue:null,description:"Called when the `dragover` event occurs",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onFileDialogCancel:{defaultValue:null,description:"Called when user closes the file selection dialog with no selection",name:"onFileDialogCancel",required:!1,type:{name:"(() => void)"}},onFileDialogOpen:{defaultValue:null,description:"Called when user opens the file selection dialog",name:"onFileDialogOpen",required:!1,type:{name:"(() => void)"}},preventDropOnDocument:{defaultValue:null,description:"If false, allow dropped items to take over the current browser window",name:"preventDropOnDocument",required:!1,type:{name:"boolean"}},useFsAccessApi:{defaultValue:null,description:'Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true',name:"useFsAccessApi",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropzone/index.tsx#DropzoneComponent"]={docgenInfo:DropzoneComponent.__docgenInfo,name:"DropzoneComponent",path:"src/components/Dropzone/index.tsx#DropzoneComponent"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var _components_Dropzone__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Dropzone/index.tsx");__webpack_require__.o(_components_Dropzone__WEBPACK_IMPORTED_MODULE_0__,"DropzoneComponent")&&__webpack_require__.d(__webpack_exports__,"DropzoneComponent",(function(){return _components_Dropzone__WEBPACK_IMPORTED_MODULE_0__.DropzoneComponent}));try{DropzoneComponent.displayName="DropzoneComponent",DropzoneComponent.__docgenInfo={description:"",displayName:"DropzoneComponent",props:{acceptFiles:{defaultValue:null,description:"File types to accept",name:"acceptFiles",required:!0,type:{name:"string[] | Accept | undefined"}},onDrop:{defaultValue:null,description:"Called when files are dropped into dropzone",name:"onDrop",required:!0,type:{name:"(files: FileWithPath[]) => void"}},rejectedUpload:{defaultValue:null,description:"Called when selected files don't meet file restrictions",name:"rejectedUpload",required:!0,type:{name:"(rejectedFile: FileRejection[]) => void"}},padding:{defaultValue:null,description:"Padding from theme.spacing, or number to set padding in px",name:"padding",required:!1,type:{name:"MantineNumberSize"}},radius:{defaultValue:null,description:"Border radius from theme.radius or number to set border-radius in px",name:"radius",required:!1,type:{name:"MantineNumberSize"}},children:{defaultValue:null,description:"Dropzone statues",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Disable files capturing",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Display loading overlay over dropzone",name:"loading",required:!1,type:{name:"boolean"}},openRef:{defaultValue:null,description:"Get open function as ref",name:"openRef",required:!1,type:{name:"ForwardedRef<() => void>"}},multiple:{defaultValue:null,description:"Allow selection of multiple files",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Set maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"Name of the form control. Submitted with the form as part of a name/value pair.",name:"name",required:!1,type:{name:"string"}},maxFiles:{defaultValue:null,description:"Number of files that user can pick",name:"maxFiles",required:!1,type:{name:"number"}},autoFocus:{defaultValue:null,description:"Set to true to autofocus the root element",name:"autoFocus",required:!1,type:{name:"boolean"}},activateOnClick:{defaultValue:null,description:"If false, disables click to open the native file selection dialog",name:"activateOnClick",required:!1,type:{name:"boolean"}},activateOnDrag:{defaultValue:null,description:"If false, disables drag 'n' drop",name:"activateOnDrag",required:!1,type:{name:"boolean"}},activateOnKeyboard:{defaultValue:null,description:"If false, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state.",name:"activateOnKeyboard",required:!1,type:{name:"boolean"}},dragEventsBubbling:{defaultValue:null,description:"If false, stops drag event propagation to parents",name:"dragEventsBubbling",required:!1,type:{name:"boolean"}},onDragEnter:{defaultValue:null,description:"Called when the `dragenter` event occurs",name:"onDragEnter",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onDragLeave:{defaultValue:null,description:"Called when the `dragleave` event occurs",name:"onDragLeave",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onDragOver:{defaultValue:null,description:"Called when the `dragover` event occurs",name:"onDragOver",required:!1,type:{name:"((event: DragEvent<HTMLElement>) => void)"}},onFileDialogCancel:{defaultValue:null,description:"Called when user closes the file selection dialog with no selection",name:"onFileDialogCancel",required:!1,type:{name:"(() => void)"}},onFileDialogOpen:{defaultValue:null,description:"Called when user opens the file selection dialog",name:"onFileDialogOpen",required:!1,type:{name:"(() => void)"}},preventDropOnDocument:{defaultValue:null,description:"If false, allow dropped items to take over the current browser window",name:"preventDropOnDocument",required:!1,type:{name:"boolean"}},useFsAccessApi:{defaultValue:null,description:'Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true',name:"useFsAccessApi",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#DropzoneComponent"]={docgenInfo:DropzoneComponent.__docgenInfo,name:"DropzoneComponent",path:"src/index.tsx#DropzoneComponent"})}catch(__react_docgen_typescript_loader_error){}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$":function(module,exports,__webpack_require__){var map={"./Dropzone.stories.tsx":"./stories/Dropzone.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$"},"./stories/Dropzone.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Dropzone",component:_src_index__WEBPACK_IMPORTED_MODULE_3__.DropzoneComponent,parameters:{controls:{expanded:!0}}};__webpack_exports__.default=meta;var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.DropzoneComponent,Object.assign({},args))};Template.displayName="Template";var maxSizeFiles=2*Math.pow(1024,2),Default=Template.bind({});Default.args={onDrop:function onDrop(acceptedFile){console.log(acceptedFile)},onReject:function onReject(rejectedFile){console.log(rejectedFile),console.log("rejected!")},acceptFiles:["image/png","image/gif","image/jpeg","image/svg+xml","image/webp"],maxSize:{maxSizeFiles:maxSizeFiles},maxFiles:2,name:"DROP IMAGES HERE"},Default.parameters=Object.assign({storySource:{source:"args => (\n  <DropzoneComponent {...args} />\n)"}},Default.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Dropzone.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"stories/Dropzone.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);