import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Charts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: props.chartData

        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom',
        location:'city'
    }

    render() {
        return (
            <div className="charts">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Maximum '+this.props.location+' in Chart',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Maximum '+this.props.location+' in Chart',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Maximum '+this.props.location+' in Chart',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Charts