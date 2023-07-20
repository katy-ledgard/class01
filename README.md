# 301 Class 01 Lab

This project is part of the Tech Educators Full Stack MERN Bootcamp.

By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the beasts by number of horns and chose your favorite beast.

## Lab One

For this lab, we are learning how to use React, how to make components and how to pass props to those components.

## Lab Two

In this class, your goal is to use the JSON file provided to display the title, image and description of each horned beast in your application.

> Time Estimate
> For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:  
> Number and name of feature: **************\_\_\_\_**************  
> Estimate of time needed to complete: **\_**  
> Start time: **\_**  
> Finish time: **\_**  
> Actual time needed to complete: **\_**  
> Add this information to your README.

### Feature #1: Display Images

**Why are we implementing this feature?**  
As a user, I want to view the images on the page so that I can browse the photo collection.

**What are we going to implement?**
Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the photo gallery should display all of the beasts' images in the gallery.

**How are we implementing it?**  
The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

#### Time Estimate

Number and name of feature: 1 Display Images  
Estimate of time needed to complete: 45 minutes
Start time: 13:47pm
Finish time: 14:04  
Actual time needed to complete: 17 minutes

### Feature #2: Allow Users to Favorite Individual Beasts

**Why are we implementing this feature?**  
As a user, I want to be able to interact with the site and favorite beasts.

**What are we going to implement?**  
Given that a user opens the application in the browser  
When a user clicks on an image of a beast  
Then the number of "Favorites" displayed on that beast will increase by one.

**How are we implementing it?**  
Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

Put a heart in each HornedBeast component with the number of “Favorites” next to it.

#### Time Estimate

Number and name of feature: Allow Users to Favourite Individual Beasts  
Estimate of time needed to complete: 1 hour
Start time: 14:05
Finish time: 14:15  
Actual time needed to complete: 10 minutes

### Feature 3: CSS Grid

**Why are we implementing this feature?**  
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

**What are we going to implement?**

Given that a user opens the application in the browser  
When the images are displayed on the screen  
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.

**How are we implementing it?**
By using CSS Grid and working mobile first to make it responsive.

#### Time Estimate

Number and name of feature: 3 CSS Grid  
Estimate of time needed to complete: 2 hours  
Start time: 14.27
Finish time: 15.23  
Actual time needed to complete: 56 minutes

## Lab Three

For this class you will be adding a feature to your Gallery Of Horns that allows the user to click on an image and display it as a modal.

### Feature #1: Display a Modal

**Why are we implementing this feature?**  
As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

**What are we going to implement?**  
Given that a user wants to view the details of the image  
When the user clicks on an individual image  
Then the image should render larger on the screen with the description displayed

**How are we implementing it?**  
Import the data.json file into your App component and send that data into the Main component  
Map over the JSON data in your Main component to render each beast  
Send a function into your Main component that allows the user to update state in the App  
Create a SelectedBeast component and include it in your App  
Use the state in the App to render an individual beast in a Modal in the SelectedBeast component

#### Time Estimate

Number and name of feature: Display a Modal  
Estimate of time needed to complete: 3 hours  
Start time: 13:28  
Finish time: 16:40  
Actual time needed to complete: 3 hours 12 minutes (including a demo for this task)  
_Note:_ CSS still needs to be added to the Modal

## Lab 4

This is the last class of our Gallery Of Horns. You have horned creatures displaying on the page. When you click on a beast, you increase its favorites and display it as a modal. We will be adding one more piece of functionality: filtering by numbers of horns.

### Feature 1. Filter by Numbers of Horns

**Why are we implementing this feature?**  
As a user, I want to be able to view the beasts by the number of horns  

**What are we going to implement?**  
Given that a user is presented with filtering options  
When the user clicks on one option  
Then the images should be filtered accordingly  

**How are we implementing it?**  
Using the Form component, build a drop down menu so that the user can choose to filter by number of horns.  
When the user chooses one of the options, the correct images should be displayed.  

#### Time Estimate

Number and name of feature: Filter by Numbers of Horns   
Estimate of time needed to complete: 3 hours    
Start time: 11.34 (stopped at 12 for Lunch)  restarted: 1pm.
Finish time: 16.01 (including demo with this task)   
Actual time needed to complete: 3 hours 25 minutes 
