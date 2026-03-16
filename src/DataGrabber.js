import React, { useState, useEffect } from 'react';

// We want to fetch the data and handle encoding here
export async function dataGrabber(username, password) {

    // We will not be using btoa. We need to encrypt later
    try {
        // Encoding the username and password
        const encoded = btoa(`${username}:${password}`);

        // Making the GET request using fetch, GET METHOD, and header with Basic Encoded Auth
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${encoded}`
            }
        });

        // If response is not OK, returns status code response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        // Converts response body from text into usable Javascript object 
        const json = await response.json();
        return json;

        // This catches any errors and logs them in the console
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}


