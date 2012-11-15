<%@ page contentType="text/html;charset=ISO-8859-1" %>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
<title>Transmart Data Pipeline > Gene Expression</title>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="../../css/bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="${resource(dir:'css/bootstrap/css',file:'bootstrap.min.css')}" />
    
    
     <style type="text/css">
      body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
      }

      .form-upload {
        max-width: 500px;
        padding: 19px 29px 29px;
        margin: 0 auto 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
                box-shadow: 0 1px 2px rgba(0,0,0,.05);
      }
      .form-upload .form-upload-heading,
      .form-upload .checkbox {
        margin-bottom: 10px;
      }
      .form-upload textarea {
       	font-size: 16px;
       	margin-bottom: 15px;
        padding: 7px 9px;
      }
      .form-upload input[type="text"] {
        font-size: 16px;
        height: auto;
        margin-bottom: 15px;
        padding: 7px 9px;
      }

    </style>
</head>
<body>
  <div class="container">
    <center><h1>Data Pipeline > Gene Expression Form</h1></center>
    <p></p>
    <g:uploadForm action="dataUpload" method="post" class="form-upload" enctype="multipart/form-data" >
    	<input type="file" name="uploadFile" size="100" placeholder="Upload Data File">
        <input type="text" class="input-block-level" name="gse" placeholder="GSE #">
        <input type="text" class="input-block-level" name="username" placeholder="User Name">
   		<textarea rows="5" cols="20" class="input-block-level" name="description" placeholder="Description"></textarea>
        <button class="btn btn-large btn-primary" type="submit">Upload Data</button>
      </g:uploadForm>
    </div>
  
</body>
</html>