Title: NNTS Take Home
Author: John Dobrota


# Installation
    (1) Navigate to /server folder
    (2) Install NPM packages 
        >npm install
    (3) Start the application  
        >npm start
    (4) Open 'http://localhost:3003' in a browser 

# Usage                              
    (1) Toggle Chart Buttons: (Category) + (Center)
        > To toggle between the two charts:
            > click on the 'Category' Text for a bar chart 
            listing the different categories + the number of patents in each category 
            OR  
            > click the 'Center' Text for a pie chart showing 
            the breakdown of the number of patents in from each NASA Center. 
    (2) Hover over each Bar/Slice to see more info 

# Built with
    (1) ReactJS
    (2) Node.js/Express.js
    (3) react-chartjs-2 (Chart.js wrapper)
                
# Note
    (1) Bar Chart as Horizontal Bar Chart instead of Vertical Bar Chart
         > I tried displaying the first set of metrics 
        with a Vertical Bar Chart as per spec but realized 
        having long category names render akwardly on the
        y-axis of a Vertical Bar Chart. As such I decided to display them 
        on the x-axis instead. If you prefer to see it as a Vertical Bar Chart, 
        please let me know!
    (2) Retro Color Theme
         > I wanted to try a color scheme I haven't tried before
          and thought a retro based color theme would add a fun touch
   