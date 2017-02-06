//selectOptions is an object containing different options types for select-boxes that describe the different elements of the diagram
export const selectOptions = {

    //with (Physical) or without (Informatical) shadow
    shadowStyle: [
        {content: 'Physical', value: {name: 'dropShadow', args: {dx: 6, dy: 6, blur: 0, color: 'grey'}}},
        {content: 'Informatical', value: {name: 'dropShadow', args: {dx: 0, dy: 0, blur: 0, color: 'grey'}}},
    ],
    //dashed (Environmental) or not (Systemic) stroke
    strokeStyle: [
        {value: '0', content: 'Systemic'},
        {value: '10,5', content: 'Environmental'}
    ],
    SourceLinkType: [
        {
            value: {d: ''},
            content: 'None'
        },
        {
            value: {fill: '#f2f2f2', d: 'M 8,33 L -12,25 L 8,17 L0,25 L 8,33 M 0,25 L 10,25', 'stroke-width': 2},
            content: 'Consumption Link'
        }
    ],

    DestLinkType: [
        {
            value: {fill: '#f2f2f2', d: 'M 8,33 L -12,25 L 8,17 L0,25 L 8,33 M 0,25 L 10,25', 'stroke-width': 2},
            content: 'Consumption Link'
        },
        {
            value: {fill: '#f2f2f2', d: 'M 0 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 10,0 L 25,0', 'stroke-width': 2},
            content: 'Instrument Link'
        },
        {
            value: {fill: '#000000', d: 'M 0 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 10,0 L 25,0', 'stroke-width': 2},
            content: 'Agent Link'
        }
    ],

    labelPosition: [
        {value: 30, content: 'Close to source'},
        {value: 0.5, content: 'In the middle'},
        {value: -30, content: 'Close to target'},
    ]
};
