"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[506],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},748:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={slug:"/StateManagement",title:"State Management \ud83d\uddc3\ufe0f"},l=void 0,c={unversionedId:"Guides/3_4_StateManagement",id:"Guides/3_4_StateManagement",title:"State Management \ud83d\uddc3\ufe0f",description:"This boilerplate use Redux-Toolkit",source:"@site/docs/3_Guides/3_4_StateManagement.md",sourceDirName:"3_Guides",slug:"/StateManagement",permalink:"/xtendly-prosperna-react-native-boilerplate/docs/StateManagement",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_4_StateManagement.md",tags:[],version:"current",frontMatter:{slug:"/StateManagement",title:"State Management \ud83d\uddc3\ufe0f"},sidebar:"tutorialSidebar",previous:{title:"Component Patterns \ud83e\udde9",permalink:"/xtendly-prosperna-react-native-boilerplate/docs/Components"},next:{title:"Using Flipper \ud83d\udc1b",permalink:"/xtendly-prosperna-react-native-boilerplate/docs/UsingFlipper"}},u=[{value:"Why Redux-Toolkit\u2753",id:"why-redux-toolkit",children:[],level:2},{value:"Why Redux-Persist\u2753",id:"why-redux-persist",children:[],level:2},{value:"How is it used in this boilerplate \u2753",id:"how-is-it-used-in-this-boilerplate-",children:[],level:2},{value:"Create a Slices \ud83c\udf55",id:"create-a-slices-",children:[],level:2},{value:"Create Redux Action \u26a1\ufe0f",id:"create-redux-action-\ufe0f",children:[],level:2},{value:"Create a Redux Reducer \ud83d\udce6",id:"create-a-redux-reducer-",children:[],level:2},{value:"Combine Reducers \ud83d\udce6 \ud83d\udce6",id:"combine-reducers--",children:[],level:2},{value:"How to trigger the Action in Slice \u2753",id:"how-to-trigger-the-action-in-slice-",children:[],level:2},{value:"Get the state from slice \ud83d\udc8e",id:"get-the-state-from-slice-",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This boilerplate use ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/introduction/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"Redux-Toolkit")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist"},(0,i.kt)("inlineCode",{parentName:"a"},"Redux-Persist")),"\nto deal with business side.\nWe use them because they are often used by the community, very trendy and easy to debug."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist"},(0,i.kt)("inlineCode",{parentName:"a"},"Redux-Persist"))," a library that allows saving a Redux store in the local storage of an application.\n",(0,i.kt)("strong",{parentName:"p"},"So we using it for saving all redux states in to local storage.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/introduction/getting-started"},(0,i.kt)("inlineCode",{parentName:"a"},"Redux-Toolkit"))," is intended to be the standard way to write Redux logic.\n",(0,i.kt)("strong",{parentName:"p"},"So we using it for synchronous operations.")),(0,i.kt)("h2",{id:"why-redux-toolkit"},"Why Redux-Toolkit\u2753"),(0,i.kt)("p",null,"Common issues when configuring a bare Redux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configuring a Redux store (where the entire state tree of the application is held) becomes too complicated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To use Redux we need to add a lot of additional packages which can be quite a headache for beginners.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Redux requires too much boilerplate code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cloning before updating the state."))),(0,i.kt)("p",null,"So that's why the the Redux team implemented and released Redux Toolkit: an improved version of Redux that enables state management with less code. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it."),(0,i.kt)("h2",{id:"why-redux-persist"},"Why Redux-Persist\u2753"),(0,i.kt)("p",null,"When we close a react native application that using a redux, the state always resets back to the initial values which in not a good thing when you try to build some large mobile application like e-commerce."),(0,i.kt)("p",null,"We can manually do the state persistent using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-async-storage/async-storage#readme"},(0,i.kt)("inlineCode",{parentName:"a"},"React Native Async Storage"))," method but honestly we will have to write everything from start and we have to maintain the structure of the state."),(0,i.kt)("p",null,"So here the redux-persist comes into play, with support for redux toolkit, that helps us to persist the state after application closed."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can check the boilerplate state management sample in the boilerplate it self! You can try or play with it your choice!"))),(0,i.kt)("h2",{id:"how-is-it-used-in-this-boilerplate-"},"How is it used in this boilerplate \u2753"),(0,i.kt)("p",null,"On the redux-persist side, it already configured and ready to use you can check the configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"configureStore.ts"),"."),(0,i.kt)("p",null,"Now all you have to do is to manage your stores, actions and reducers using redux-toolkit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/redux/configureStore.ts"',title:'"src/redux/configureStore.ts"'},'import AsyncStorage from "@react-native-async-storage/async-storage";\nimport { configureStore } from "@reduxjs/toolkit";\nimport { useDispatch } from "react-redux";\nimport {\n  persistReducer,\n  persistStore,\n  FLUSH,\n  REHYDRATE,\n  PAUSE,\n  PERSIST,\n  PURGE,\n  REGISTER,\n} from "redux-persist";\nimport rootReducer from "./rootReducer";\n\nconst persistConfig = {\n  key: "root",\n  storage: AsyncStorage,\n};\n\nconst persistedReducer = persistReducer(persistConfig, rootReducer);\n\nconst store = configureStore({\n  reducer: persistedReducer,\n  middleware: (getDefaultMiddleware) => {\n    const middlewares = getDefaultMiddleware({\n      serializableCheck: {\n        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],\n      },\n    });\n\n    if (__DEV__) {\n      const createDebugger = require("redux-flipper").default;\n      middlewares.push(createDebugger());\n    }\n\n    return middlewares;\n  },\n});\n\nconst persistor = persistStore(store);\n\nexport const configureAppStore = () => ({ store, persistor });\n\nexport type AppDispatch = typeof store.dispatch;\nexport const useAppDispatch = () => useDispatch<AppDispatch>();\n')),(0,i.kt)("h2",{id:"create-a-slices-"},"Create a Slices \ud83c\udf55"),(0,i.kt)("p",null,"We will use ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createslice"},(0,i.kt)("inlineCode",{parentName:"a"},"createSlice"))," from Redux-Toolkit for implementing action and reducers."),(0,i.kt)("p",null,"For example, we will create a login function with state management."),(0,i.kt)("p",null,"First navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/redux/slices")," and create a new file. File name should be like this ",(0,i.kt)("inlineCode",{parentName:"p"},"nameofthesliceSlices.ts"),"."),(0,i.kt)("p",null,"For this sample we will name it ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticationSlices.ts"),", from there create the initial template of createSlice like the name and initialState of that slice."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/redux/slices/Authentication/authenticationSlices.ts"',title:'"src/redux/slices/Authentication/authenticationSlices.ts"'},'import { createSlice } from "@reduxjs/toolkit";\n\ninterface AuthState {\n  loading: Loading;\n  loggedIn: boolean;\n  token: string;\n}\n\nconst { actions, reducer } = createSlice({\n  name: "authentication",\n  initialState: {\n    loading: "idle",\n    token: "",\n    loggedIn: false,\n  } as AuthState,\n  reducers: {},\n});\n\nexport const authenticationActions = {\n  ...actions,\n};\n\nexport const authenticationReducer = reducer;\n')),(0,i.kt)("h2",{id:"create-redux-action-\ufe0f"},"Create Redux Action \u26a1\ufe0f"),(0,i.kt)("p",null,"Next will be implimenting the action. For this one we will use ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createAsyncThunk"},(0,i.kt)("inlineCode",{parentName:"a"},"createAsyncThunk")),"."),(0,i.kt)("p",null,"createAsyncThunk returns a standard Redux thunk action creator. The thunk action creator function will have plain action creators for the pending , fulfilled , and rejected cases attached as nested fields. We will use those pending , fulfilled , and rejected cases in our reducers later."),(0,i.kt)("p",null,"From the same file we will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"loginThunk")," using createAsyncThunk, basically the loginThunk action is where the login API call happening."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/redux/slices/Authentication/authenticationSlices.ts"',title:'"src/redux/slices/Authentication/authenticationSlices.ts"'},'import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";\nimport { loginApi } from "@services"; // loginApi is a http request using axios.\n\ninterface AuthState {\n  loading: Loading;\n  loggedIn: boolean;\n  token: string;\n}\n\ninterface Login {\n  username: string;\n  password: string;\n}\n\ninterface LoginResponse {\n  title: string;\n  message: string;\n  token?: string;\n  status: number;\n}\n\n// loginThunk is a function or action that will call the loginApi\nconst loginThunk = createAsyncThunk(\n  "Authentication/loginThunk",\n  async (body: Login, { rejectWithValue }) => {\n    try {\n      const response: { data: LoginResponse } = await loginApi(body);\n      return response.data;\n    } catch (err: any) {\n      return rejectWithValue(err.response.data);\n    }\n  }\n);\n\nconst { actions, reducer } = createSlice({\n  name: "authentication",\n  initialState: {\n    loading: "idle",\n    token: "",\n    loggedIn: false,\n  } as AuthState,\n  reducers: {},\n});\n\nexport const authenticationActions = {\n  ...actions,\n  loginThunk, // Export the action so you can use it anywhere\n};\n\nexport const authenticationReducer = reducer;\n')),(0,i.kt)("h2",{id:"create-a-redux-reducer-"},"Create a Redux Reducer \ud83d\udce6"),(0,i.kt)("p",null,"We will now create the reducers. For this one we will use ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createslice#extrareducers"},(0,i.kt)("inlineCode",{parentName:"a"},"extraReducers"))," from createSlice."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"extraReducers")," allows ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice")," to respond to other action types besides the types it has generated.\nYou would use ",(0,i.kt)("inlineCode",{parentName:"p"},"extraReducers")," when you are dealing with an action that you have already defined somewhere else. Which is we already have using ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk"),"."),(0,i.kt)("p",null,"As discussed in Create a Redux Action ",(0,i.kt)("inlineCode",{parentName:"p"},"createAsyncThunk")," have a pending , fulfilled , and rejected cases and we will use it to our ",(0,i.kt)("inlineCode",{parentName:"p"},"extraReducers"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/redux/slices/Authentication/authenticationSlices.ts"',title:'"src/redux/slices/Authentication/authenticationSlices.ts"'},'import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";\nimport { loginApi } from "@services";\n\ninterface AuthState {\n  loading: Loading;\n  loggedIn: boolean;\n  token: string;\n}\n\ninterface Login {\n  username: string;\n  password: string;\n}\n\ninterface LoginResponse {\n  title: string;\n  message: string;\n  token?: string;\n  status: number;\n}\n\nconst loginThunk = createAsyncThunk(\n  "Authentication/loginThunk",\n  async (body: Login, { rejectWithValue }) => {\n    try {\n      const response: { data: LoginResponse } = await loginApi(body);\n      return response.data;\n    } catch (err: any) {\n      return rejectWithValue(err.response.data);\n    }\n  }\n);\n\nconst { actions, reducer } = createSlice({\n  name: "authentication",\n  initialState: {\n    loading: "idle",\n    token: "",\n    loggedIn: false,\n  } as AuthState,\n  reducers: {},\n  extraReducers: (builder) => {\n    builder\n      .addCase(loginThunk.fulfilled, (state, action) => {\n        // If loginThunk is fulfilled then we will set the states to\n        state.loading = "succeeded";\n        state.loggedIn = true;\n        state.token = action.payload.token; // value from the action(loginThunk)\n      })\n      .addCase(loginThunk.rejected, (state) => {\n        // If loginThunk is rejected then we will set the states to\n        state.loading = "failed";\n        state.loggedIn = false;\n        state.token = "";\n      })\n      .addCase(loginThunk.pending, (state) => {\n        // If loginThunk is pending then we will set the states to\n        state.loading = "pending";\n      });\n  },\n});\n\nexport const authenticationActions = {\n  ...actions,\n  loginThunk,\n};\n\nexport const authenticationReducer = reducer;\n')),(0,i.kt)("h2",{id:"combine-reducers--"},"Combine Reducers \ud83d\udce6 \ud83d\udce6"),(0,i.kt)("p",null,"We've successfully created a actions and reducer."),(0,i.kt)("p",null,"Now how can we save the states of those slices in our redux store?"),(0,i.kt)("p",null,"As discussed configure store is already implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"configureStore.ts"),", all you have to do is to import your reducers in that file. But as your app grows more complex, you'll want to split your reducing function into separate functions that's why we will use ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/api/combinereducers"},(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers")),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers")," helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore."),(0,i.kt)("p",null,"In the redux folder we have a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"rootReducer.ts")," from there import the reducers you created in the slices."),(0,i.kt)("p",null,"Assign it with name and your good to go!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/redux/rootReducer.ts"',title:'"src/redux/rootReducer.ts"'},'import { combineReducers } from "redux";\nimport { authenticationReducer } from "./slices";\n\nexport default combineReducers({\n  authentication: authenticationReducer,\n});\n')),(0,i.kt)("h2",{id:"how-to-trigger-the-action-in-slice-"},"How to trigger the Action in Slice \u2753"),(0,i.kt)("p",null,"You have now created your slice action with reducers, but how can you trigger it?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import")," the slice action from ",(0,i.kt)("inlineCode",{parentName:"p"},"@redux")," and dispatch it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAppDispatch")," from configure store and thats it easy as that!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/screen/Authentication/LoginScreen.tsx"',title:'"src/screen/Authentication/LoginScreen.tsx"'},'import React from "react";\nimport { View, Text, StyleSheet, Image, Platform } from "react-native";\nimport { Formik } from "formik";\nimport { batch } from "react-redux";\nimport {\n  authenticationActions, // import the action\n  useAppDispatch, // import the action\n  navigationActions,\n} from "@redux";\nimport { DASHSTACK, DASHBOARDSCREEN } from "@constants";\n\nimport Toast from "react-native-toast-message";\nimport { Colors, Images, TextStyles, Button, Input } from "@core";\nimport { LoginValidation } from "@constants";\nimport { Login } from "@types";\n\nexport const LoginScreen: React.FC = () => {\n  const dispatch = useAppDispatch();\n\n  // This function will trigger the loginThunk we created in authentication slices\n  const onLogin = ({ username, password }: Login) => {\n    batch(async () => {\n      const { payload }: any = await dispatch(\n        authenticationActions.loginThunk({ username, password })\n      );\n      console.log("loginThunk returned value", payload);\n    });\n  };\n\n  return (\n    <View style={styles.container}>\n      <Formik\n        initialValues={{ username: "", password: "" }}\n        onSubmit={(values) => onLogin(values)}\n        validationSchema={LoginValidation}\n      >\n        {({ handleChange, handleSubmit, values, errors, touched }) => (\n          <>\n            <Input\n              onChangeText={handleChange("username")}\n              autoCapitalize="none"\n              autoCorrect={false}\n              autoComplete="username"\n              icon="user"\n              placeholder="Username"\n              value={values.username}\n              error={errors.username}\n              touched={touched.username}\n            />\n            <Input\n              onChangeText={handleChange("password")}\n              autoCapitalize="none"\n              autoCorrect={false}\n              autoComplete="password"\n              secureTextEntry={true}\n              icon="key"\n              placeholder="Password"\n              value={values.password}\n              error={errors.password}\n              touched={touched.password}\n            />\n            <Button\n              style={styles.button}\n              onPress={handleSubmit}\n              label="Login"\n            />\n          </>\n        )}\n      </Formik>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: Colors.PRIMARY,\n    padding: 25,\n    paddingTop: Platform.OS === "ios" ? 50 : 10,\n  },\n  button: { marginTop: 20 },\n});\n')),(0,i.kt)("h2",{id:"get-the-state-from-slice-"},"Get the state from slice \ud83d\udc8e"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Action")," is triggered ",(0,i.kt)("inlineCode",{parentName:"p"},"Reducer")," will do their job automaticaly! That's how redux works."),(0,i.kt)("p",null,"We all know that ",(0,i.kt)("inlineCode",{parentName:"p"},"Reducer")," is the one who changes the state of the slice, but how can we get or select those state and use it in the entire application?"),(0,i.kt)("p",null,"We can do that by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector"),"!"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," is a function that takes the current state as an argument and returns whatever data you want from it and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"redux/selectors")," folder we will create our own selector for the slice we've created (authenticationSlice)."),(0,i.kt)("p",null,"For example we will name it ",(0,i.kt)("inlineCode",{parentName:"p"},"authentication.ts")," we will match it in the combine reducer we've created earlier."),(0,i.kt)("p",null,"In the file you can create selectors as many as you want, like selecting a specific state or maybe select a filtered state and more!! You can do that using ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createSelector"},(0,i.kt)("inlineCode",{parentName:"a"},"createSelector")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/redux/selectors/authentication.ts"',title:'"src/redux/selectors/authentication.ts"'},'import { createSelector } from "@reduxjs/toolkit";\nimport rootReducer from "../rootReducer";\n\ntype RootState = ReturnType<typeof rootReducer>;\n\nconst authentication = (state: RootState) => state.authentication; // state of authentication\n\nexport const selectAuthentication = createSelector(\n  authentication,\n  (state) => state\n);\n\nexport const selectAuthenticationLoading = createSelector(\n  authentication,\n  (state) => state.loading\n);\n')),(0,i.kt)("p",null,"Now that you've create your own selectors you can now use it anywhere using ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector"),"."),(0,i.kt)("p",null,"These selectors will be automaticaly updated if the action and reducers have been triggered!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/screens/Dashboard/DashboardScreen.tsx"',title:'"src/screens/Dashboard/DashboardScreen.tsx"'},'import React from "react";\n\nimport { useSelector } from "react-redux";\nimport { selectAuthentication } from "@redux";\n\nexport const DashboardScreen: React.FC = () => {\n  const authentication = useSelector(selectAuthentication);\n\n  return (\n    <View>\n      <Text>{authentication.loading}</Text>\n      <Text>{authentication.loggedIn}</Text>\n      <Text>{authentication.token}</Text>\n    </View>\n  );\n};\n')))}p.isMDXComponent=!0}}]);