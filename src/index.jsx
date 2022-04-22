import { App } from "./app";

import {react}  from "react";


import {createRoot} from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

root.render(< App />, document.getElementById('app') );


//--import {react}  from "react";
//--import {render} from "react-dom";
//--import { App } from './App'
//--render ( <App /> , document.getElementById('root') )