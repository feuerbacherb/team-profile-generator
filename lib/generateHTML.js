//const Index = require('../Index');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function writeHTML(data) {
   const { engineers, interns, ...header } = data;

   return `
<!DOCTYPE html>
<html lang="en"?
   <head>
      <meta charset-"UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">

      <!-- create area for bootstrap -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
      <title>Team Profile ${header.dept}</title>
   <head>

   <body>

      <header class="container alert bg-danger text-white shadow mb-5">
         <div>
            <h1 class="display-3 text-center">
               ${header.dept}
            </h1>
         </div>
      </header>

      <main>
         <div class="container">
            <!-- Create Manager Entry -->
            <div class="row" id="manager">
               ${writeManagerInfo(header)}
            </div>

            <!-- Create Engineer Entry -->
            <div class="row" id="engineer">
               ${writeObjInfo(engineers)}
            </div>

            <!-- Create Intern Entry -->
            <div class="row" id="Intern">
               ${writeObjInfo(interns)}
            </div>
         </div>
      </main>

      <footer>

      </footer>
   
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   </body>
</html>
   `;

}

const writeManagerInfo =  data => {
   return `
               <div class="col-4 mx-auto">
                  <div class="card mh-3 shadow mb-5" style="max-width: 18rem;">
                     <div class="card-header bg-primary text-white">                  
                        <h4 class="card-title">${data[0].name}</h4>
                        <h5 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data[0].role}</h5>
                     </div>
                     <div class="card-body small">
                        <div class="card-text">ID: ${data[0].id}</div>
                        <div class="card-text">Email: <a href="mailto:${data[0].email}">${data[0].email}</a></div>
                        <div class="card-text">Phone: ${data[0].officeNum}</div>
                     </div>
                  </div>
               </div>
   `;
}

const writeObjInfo = data => {
   if(!data) {
      return "";
   }
   var theHTML = ""
   for (var i = 0; i < data.length; i++) {
      theHTML += getObjHTML(data[i]);
   }
   return theHTML;
}

const getObjHTML = data => {
      return `
               <div class="col-4 mx-auto">
                  <div class="card mh-3 shadow mb-5" style="max-width: 18rem;">
                     <div class="card-header bg-primary text-white">                  
                        <h4 class="card-title">${data.name}</h4>
                        <h5 class="card-title"><i class="fas ${getIcon(data.role)} mr-2"></i>${data.role}</h5>
                     </div>
                     <div class="card-body small">
                        <div class="card-text">ID: ${data.id}</div>
                        <div class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></div>
                        ${getDelta(data)}
                     </div>
                  </div>
               </div>
   `;
}

const getIcon = data => {
   if (data === 'Engineer') {
      return "fa-glasses";
   } else {
      return "fa-user-graduate";
   }
}

const getDelta = data => {
   if (data.role === "Engineer") {
      return `
                        <div class="card-text">GitHub: <a href="https://github.com/${data.github}" class="btn btn-primary btn-sm">${data.github}</a></div>
      `;
   } else {
      return `
                        <div class="card-text">School: ${data.school}</div>
      `;
   }
}

module.exports = writeHTML;