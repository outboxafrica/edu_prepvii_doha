# EDU-Online shopping

EDU-Online shopping is an online platform where people can buy and
sell different items and goods
 The EDU-Online shopping was built with web technologies ie HTML, CSS and JavaScript
On this platiform the Features are
  <ul>
    <li>Create Account</li>
    <li>Log In</li>
    <li>Home Page</li>
   <li>Reciept Page</li>
    <li>CheckOut page</li>
  </ul>
  
  To manage our project we used PivotalTracker and slack,zoom and google meet were the platforms we use during the platform development
  
# some thing to Note Here
<ul>
 <li>Since we where not allowed any persisted data storage tools like databases, we found our selves in very terrible suitation where we could not store 
      data for a newly signed-up user(s) data captured was only preemptible given the nature of localStorage in the browser. 
 </li><br>
 <li>  **So for the sake of demostration:** <br>
     <ol>
      <li> First we had to assume that once a user creates an account he or she gets redirected to the main page instantly
      </li><br>
      <li> Secondly for the sake of demostrating login & signUp capabilities we had to greate a few dummy data and put on localStorage where by the file is 
           ../data/users.js<br>
           <br>
           ** USERS U CAN USE ON LOG IN: ** <br>
          <ol>
            <li> 
               {<br>
                   emal: petermuwanguzi51@gmail.com, <br>
                   password: peter1234 <br>
               }
            </li>
           <br>
           <li>
              {<br>
                   email: muwanguzi51@gmail.com, <br>
                   password: peter12346<br>
              }
           </li>
           <br>
          </ol>
      </li>
      <li>Finally we had to create also dummy data for our items and linked to the localStorage and the file is located at ../data/stock/stock.js
      </li>
     </ol>
   
 </li>
</ul>
