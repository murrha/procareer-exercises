//class component
class MyClass extends React.Component{

    render(){
        return <div>
            <h1>Hello {this.props.name || "Jane Doe"} </h1>
            <h2>I am calling you from the class component!</h2>
        </div>
    }
}

//functional component
let MyFunc = (props) => {
    return(<div>
        <h1>Hello {props.name}</h1>
        <h2>I am calling you from the functional component!</h2>
    </div>)
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render([ <MyClass name="Marja"/>, <MyFunc name="Sumi"/>]);