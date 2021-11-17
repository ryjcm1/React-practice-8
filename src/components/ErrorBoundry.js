import { Component} from 'react'

class ErrorBoundry extends Component{

    constructor(){
        super();
        this.state = {hasError: false}
    }

    //cannot be added to functions, only class based components
    componentDidCatch(error) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <p>Something went wrong!</p>
        }

        return this.props.children
    }
}

export default ErrorBoundry