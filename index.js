import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Vnames=["Venky","Jyothi","Das","Irfan","Nowman"];
root.render(
    <div>
{Vnames.map((person)=>{
    return <Hello name={person}/>
})}
</div>
);

