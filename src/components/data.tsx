import * as React from 'react';
import * as https from 'https';


export class Data extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    getData = async () => {
        https.get('https://data.nba.net/prod/v2/2018/teams.json', (resp) => {
var d;
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            d += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            //data = JSON.parse(d);
            console.log(JSON.stringify(d));
        });

        }).on("error", (err) => {
        console.log("Error: " + err.message);
        });
    }
    render(){
        return (
        this.getData()
        );
    }
}