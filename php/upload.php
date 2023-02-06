<?php
if (isset($_FILES['file'])) {
  $file = $_FILES['file'];
  $fileName = $file['name'];
  $fileTmpName = $file['tmp_name'];
  $fileSize = $file['size'];
  $fileError = $file['error'];
  $fileType = $file['type'];

  $fileExt = explode('.', $fileName);
  $fileActualExt = strtolower(end($fileExt));

  $allowed = array('jpg', 'jpeg', 'png', 'pdf');

  if (in_array($fileActualExt, $allowed)) {
    if ($fileError === 0) {
      if ($fileSize < 1000000) {
        $fileNameNew = uniqid('', true) . "." . $fileActualExt;
        $fileDestination = 'uploads/' . $fileNameNew;

        if (!file_exists('uploads')) {
          mkdir('uploads', 0777, true);
        }

        $fileDestination = realpath('uploads') . '/' . $fileNameNew;

        if (move_uploaded_file($fileTmpName, $fileDestination)) {
          echo 'File uploaded successfully';
        } else {
          echo 'Unable to move the uploaded file to the destination directory';
        }
      } else {
        echo 'File is too large';
      }
    } else {
      echo 'There was an error uploading your file';
    }
  } else {
    echo 'Invalid file type';
  }
}