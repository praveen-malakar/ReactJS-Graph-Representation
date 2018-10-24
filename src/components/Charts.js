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
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
        location: 'city'
    }

    render() {
        return (
            <div className="charts">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <Pie
                                data={this.state.chartData}
                                options={{
                                    title: {
                                        display: this.props.displayTitle,
                                        text: 'Maximum ' + this.props.location + ' in Pie Chart',
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: this.props.displayLegend,
                                        position: this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Line
                                data={this.state.chartData}
                                options={{
                                    title: {
                                        display: this.props.displayTitle,
                                        text: 'Maximum ' + this.props.location + ' in Line Chart',
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: this.props.displayLegend,
                                        position: this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <Bar
                                data={this.state.chartData}
                                options={{
                                    title: {
                                        display: this.props.displayTitle,
                                        text: 'Maximum ' + this.props.location + ' in Bar Chart',
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: this.props.displayLegend,
                                        position: this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts