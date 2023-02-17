<?php
    if (isset($_FILES['file']))
    {
        $file = $_FILES['file'];
        $fileName = $file['name'];
        $fileTempName = $file['tmp_name'];
        $fileSize = $file['size'];
        $fileError = $file['error'];
        $fileType = $file['type'];

        $fileExt = explode('.', $fileName);
        $fileActualExt = strtolower(end($fileExt));

        $allowed = array("txt");

        if (in_array($fileActualExt, $allowed))
        {
            $fileDestination = 'upload/' . $fileName;
            move_uploaded_file($fileTempName, $fileDestination);
            echo "File uploaded successfully";
        }
        else
        {
            echo "Error: Invalid file type";
        }
    }
?>
