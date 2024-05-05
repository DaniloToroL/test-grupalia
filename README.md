# Grupalia technical test

This task is a technical challenge that consists of replicating the UI of a web page.

The page to replicate is this: https://civitai.com/images
The API used to get the images is this: https://github.com/civitai/civitai/wiki/REST-API-Reference#get-apiv1images

## How to run the project

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open your browser and go to `http://localhost:3000/`

## Issues

#### The images position changes every time a new fetch is made

This is because I used columns to display the images and the number of images is not always the same. I could have used a grid layout to display the images in a more organized way, but I didn't get the styles that I wanted (different heights for the images) so I decided to use columns instead

#### The first fetchs duplicates the images

I'm not sure why this happens, but I think it's because the first fetch is made before the component is mounted and the second fetch is made after the component is mounted. I tried to fix this by using a `useEffect` hook with an empty dependency array, but it didn't work

