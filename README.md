# AngularTest1 - Ayush Kharade


Setup instructions:

1) git clone or download the project as a zip file. Project folder is called 'AngularProject1'
2) go to the project folder using CLI and use 'npm install'
3) use 'ng serve' to start the project and wait for server to start listening.
4) open a second terminal and type in 'npx json-server --watch db.json'
5) step 4 will launch a json server which stores the value of the slider accessible by the slider service.
6) go to localhost:4200 (will be default routed to localhost:4200/view1)


Notes:
- to implement a service for storing a value that will be used by both view1 and view2 components, i have created a db.json file which will store the data. This cotent is launched 
as a json server which will be modified by the slider-value.serive.

This json server is available at http://localhost:3000/sliderV once step 4 is done

- Do not slide the slider too much or it will cause the json server to crash. This is due to the update slider value function being called for the slightest change in slider value.
