import React , {Component} from 'react'
import {connect} from 'react-redux'
import buyLaptop from '../redux/actions'
class Shop extends Component {
   // state = {
   // numOfLaptops : 100
//  }

    //buyLaptop = ()=>{
   //     this.setState({numOfLaptops:this.state.numOfLaptops - 1})
   // }


    render(){
        
        return(
            <div>
                <h1>Welcome to Vshop</h1>
                <div>
                    <p>Dell Laptops</p>
                    <p>Available Laptops : {this.props.numOfLaptops}</p>
                    <button onClick = {this.props.buyLaptop}>Buy</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        numOfLaptops: state.numOfLaptops
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyLaptop : ()=> dispatch(buyLaptop())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)