<?php
    session_start();
    $num = $_GET['num'];

    include "dbconn.php";

    $sql = "delete from qna_29cm where num = $num";

    mysqli_query($connect,$sql);
    mysqli_close($connect);

    echo "
        <script>
            alert('문의가 삭제되었습니다.')
            location.href = 'qna_list.php';
        </script>
    ";
?>