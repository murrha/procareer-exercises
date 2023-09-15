//class component
class MyClass extends React.Component{

    render(){
        return <div>
            <h1>Hello Jane Doe </h1>
            <h2>I am calling you from the class component!</h2>
        </div>
    }
}

//functional component
let MyFunc = () => {
    return(<div>
        <h1>Hello John Doe</h1>
        <h2>I am calling you from the functional component!</h2>
    </div>)
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render([ <MyClass/>, <MyFunc/>]);