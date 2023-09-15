import {URL} from '../utils/config.js';
export async function getNews(URL){
    //api call
    try{
    const response = await fetch(URL);
    const data = await response.json();
    console.log('Data is ',data);
    return data;
    }
    catch(err){
        throw err;
    }

    // const promise = fetch(URL);
    // console.log('Promise is' , promise);
    // promise.then(function(response){
    //     const pr = response.json();
    //     pr.then(function(data){
    //         console.log('Data is',data);
    //     }).catch(function(err){
    //         console.log('Invalid Json');
    //     })
    // }).catch(function(err){
    //     console.log('Error during fetch News ',err);
    //

}
