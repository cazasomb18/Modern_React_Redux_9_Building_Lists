////////////////////////////////////////////////////////////////////////////////////////////////////
//Rendering Lists
	//We want to create a new component whose sole function is to render the list:

		//1 - in components directory create a new file called ImageList.js
		//2 - import react, create arrow function that renders a div w/ text 'ImageList', export ImageList:
		import React from 'react';
		const ImageList = () => {
			return <div>ImageList</div>	
		};
		export default ImageList;
		/*3 - replace <div>Found: {this.state.term.length}</div> with our new component:*/ <ImageList/>
		/*4 - Don't forget to import the ImageList component!: */ import ImageList from './ImageList';

	//NOW - we want to communicate the list of images down to the image list (parent->child using props)
		//in App.js add the empty array we created in state for images on a new image prop in ImageList comp:
			<ImageList images={this.state.images}/>
		//in ImageList.js add props to ImageList arrow function as an argument
			const ImageList = (props) => {
				console.log(props.images);
				/*log props.images to make sure we have the data we want*/
			};




////////////////////////////////////////////////////////////////////////////////////////////////////
//Review of Map Statements
	const nums = [0,1,2,3,4];

	const newNums = [];

	for (let i = 0; i < nums.length; i++) {
	  newNums.push(nums[i] * 10);
	};
	/*THIS BLOCK ^^^^*/

	nums.map(num => num * 10);
	/*DOES THE SAME THING AS THIS*/
		//Without altering the original data (as we cannot do via props system!)

	nums.map(num => <div>{num}</div>);/*is how we'll reference this in JSX*/




////////////////////////////////////////////////////////////////////////////////////////////////////
//Rendering Lists of Components
	//GOAL: use .map() JS function to return a list of images from our ImageList component

	//1 - map props.images in ImageList.js:
	const images = props.images.map((image) => {
		return <img src={image.urls.regular} />
	});

	return <div>{images}</div>




////////////////////////////////////////////////////////////////////////////////////////////////////
//We now have a list-key warning from React:
	//Warning: Each child should have a unique 'key' prop
	//Let's say we have the following:

	//TO DO LIST  						RENDERED LIST
	//{id: 1, task: 'Take out trash'}	<div>Take Out Trash</div> 
	//{id: 2, task: 'Wash the car'}		<div>Wash the car</div> 
	//{id: 3, task: 'Walk the dog'}		<div>Walk the dog</div> 

	//Now let's say someone wants to add another item to the TODO list:

	//{id: 4, task: 'Mow the lawn'}		<div>Mow the lawn</div>
		//So then React will rerender the application

	//What happens is this

	//TO DO LIST  						RENDERED LIST 				currently in the DOM
	//{id: 1, task: 'Take out trash'}	<div>Take Out Trash</div> 	<div>Take Out Trash</div>
	//{id: 2, task: 'Wash the car'}		<div>Wash the car</div> 	<div>Wash the car</div>
	//{id: 3, task: 'Walk the dog'}		<div>Walk the dog</div> 	<div>Walk the dog</div>
	//{id: 4, task: 'Mow the lawn'}		<div>Mow the lawn</div>

		//In Memory, react will take list of Rendered Items, and Compare them to what's in the DOM;
			//React WANTS to not render items that are already in the DOM
				//In order to allow React to do this we need to add a 'key' prop to the list

	//Keys enable react to effectively compare what it's rendered to what's in the DOM
		//When React checks what it's rendered against the DOM it will grab that key for comparison
		//to render any updates to lists.

	//Every item in the list will eventually be rendered as an element in the DOM.
	//Whenever we use a 'key' we try to use a value that will correspond to a distinct element
	//that will be rendred in the DOM.
		//When we're fetching data from an outside API and we're getting items that we want to show 
		//as a list it almost always ends up being the ID property ends up being that unique key value.



////////////////////////////////////////////////////////////////////////////////////////////////////
//Implementing Keys in Lists

	//Find the root corresponding JSX tag that is being returned from out map statement (<img/>):
		return <image key={image.id} src={image.urls.regular}  /> /*<--like so*/
		//add {image.id} tokey prop

		//To get rid of alt"" warning we can also add image.alt_description to that prop:
		return <image key={image.id} src={image.urls.regular} alt={image.alt_description} /> /*<--like so*/

		//To clean up our code a little bit, let's destructure all the props we want from the image obj:
		const images = props.images.map(({ id, alt_description, urls }) => {
			return <image key={id} src={urls.regular} alt={alt_description} />
		});

		//at this point we now have an MVP app, and have completed v1




////////////////////////////////////////////////////////////////////////////////////////////////////
//Coding Exercise 7: Practing List Building
	//Assign Key prop to each li, which will probably give you the ID to the user

import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];

//your solution:
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: users }
    }
  render() {
      const Names = this.state.users.map(({ id, name }) => {
        return <li key={id}>{name}</li>
      });
    return (
        <ul>{Names}</ul>
    );
  }
};




