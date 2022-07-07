import React, {Component} from 'react'


class SmallCard extends Component {
  render(){
    let color = ((this.props.plusminus=='plus') ? 'text-green-500' : 'text-red-600')

    return (
      <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
        <div className="relative h-16 w-16 flex-shrink-0">
          {/* <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/> */}
          {this.props.children}
        </div>
        <div>
          <span className="text-white text-sm">{this.props.title}</span>
          <h2 className="text-white font-bold text-2xl">{this.props.currency ? <span className="text-sm text-gray-400 mr-2">{this.props.currency}</span> : ''}{this.props.value}</h2>
          <span className={ (color) + " text-xs mr-1"}>{this.props.percen}</span>
          <span className="text-gray-400 text-xs">{this.props.details}</span>
        </div>
      </div>
    )
  }
}


export default SmallCard