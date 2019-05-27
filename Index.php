<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
    <script src="demoFunctions.js"></script>
    <script src="http://code.responsivevoice.org/responsivevoice.js"></script>
    <script src="js/layout.js"></script>
    <script>
        // jQuery plugin. Called on a jQuery object, not directly.    
    </script>

    <style>
        #placeholder {
            text-align: center;
            margin-top: 1.5em;
        }
        
        #result {
            
            height: 80%;
            overflow-y:auto
        }
        
        .clearfix {
            clear: both;
        }
        
        .footer {
    position: fixed;
    bottom: 0;
    color: black;
    width: 95%;
    text-align: center;
     }
        
    .mystyleleft {
    padding: 5px;
    background-color: #408dd6;
    color: white;
    box-sizing: border-box;
    margin-top: 0.5px; 
}
        
        .mystyleright {
    padding: 5px;
    background-color: #001438;
    color: white;
    box-sizing: border-box;
    border-width:0.5px;  
    border-style:solid;
    border-color: dodgerblue;
    margin-top: 0.5px; 
}
      

.mystyle {
    padding: 5px;
    background-color: #001438;
    color: white;
    box-sizing: border-box;
    margin-top: 0.5px; 
   
    
}
        
        .mystyleleftlink {
    padding: 5px;
    background-color: #f1b900;
    color: white;
    box-sizing: border-box;
    margin-top: 0.5px; 
}
        a {
    color: white;
}

        
        ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em
}
::-webkit-scrollbar-button {
    background: #6479ba
}
::-webkit-scrollbar-track-piece {
    background: #001438
}
::-webkit-scrollbar-thumb {
    background: #6479ba
}
        
.button {
  background: url(mic6.jpg); 
  background-size: 50px 50px;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.button:hover {opacity: 2}

.button:active {
  background-color: #007bff;
  transform: translateY(4px);
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
        
        .button:focus {
            background: url(bot-voice.gif); 
            background-size: 50px 50px
        }
        
     
        
    </style>	
</head>
<body style="background:#001438">
    
    <div class="container" style="background:#001438">
        <div class="col-sm-12">
            <div id="result">
                <h3 style="text-align:center;color:white;">Good Afternoon,</h3>
                <h4 style="text-align:center;color:white;">Aniket</h4>
            </div>
            <div style="bottom:0px;">
                    <input placeholder="Hey, ask me something..." id="q" type="text" style="color:white;" onkeyup="scrolltobottom()" autocomplete="off">
                <button class="button" id="btn" style="width:50px;height:50px;margin-left:50%;margin-right:50%;" onclick="startDictation()">
                    </button>
                    
            </div>
        </div>
                    
               
    </div>
        
  <!--  <script defer src="js/layout.js"></script>-->
</body>
</html>