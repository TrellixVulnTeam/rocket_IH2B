import {react}  from "react";
import {createRoot} from 'react-dom/client';
import { App } from "./app";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(< App />, document.getElementById('root') );


//--import {react}  from "react";
//--import {render} from "react-dom";
//--import { App } from './App'
//--render ( <App /> , document.getElementById('root') )