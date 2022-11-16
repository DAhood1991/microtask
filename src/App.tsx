import React from 'react';
import {Header} from "./Components/Components";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";
import {NewComponents} from "./Components/NewComponents";
import {NewComponents2} from "./Components/NewComponents2";
import {Subscraiber} from "./Components/Buttons";
import {HOOK} from "./Components/HOOK";


function App() {
    const Button11 = (sub: string) => {
       alert(sub)
    }
    const Button22 = (sub2: string) => {
        console.log(sub2)
    }
    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},]

    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]

    return (
        <div>
            {/*<NewComponents students={students}/>*/}
            {/*            <NewComponents2 students={topCars}/>*/}
            {/*<Header title={"NEw page"}/>*/}
            {/*<Body title={'Plane'}/>*/}
            {/*<Footer title={'My plane'}/>*/}
            <Subscraiber name={"you chenel1"} callBack={() => Button11("vawdwa")}/>
            <Subscraiber name={"you chenel2"} callBack={() => Button22('VIA')}/>
        <HOOK/>
        </div>

    );
}

export default App;
