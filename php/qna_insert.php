<?php session_start(); ?>

<meta charset="utf-8">

<?php
    $userid = $_SESSION['userid'];
    $category = $_POST['category'];
    $subject = $_POST['subject'];
    $content = $_POST['content'];

    if(!$userid) {
    $userid = "guest";
    }

    /*if(!$userid) {
        echo ("
            <script>
                window.alert('로그인 후 이용해 주세요.');
                history.go(-1);
            </script>
        ");
        exit;
    }*/

    if(!$category) {
        echo ("
            <script>
                window.alert('카테고리를 선택하세요.');
                history.go(-1);
            </script>    
        ");
        exit;
    }

    if(!$subject) {
        echo ("
            <script>
                window.alert('제목을 입력하세요.');
                history.go(-1);
            </script>
        ");
        exit;
    }

    if(!$content) {
        echo ("
            <script>
                window.alert('내용을 입력하세요.');
                history.go(-1);
            </script>
        ");
        exit;
    }

    $regist_day = date("Y-m-d H:i:s");

    include "dbconn.php";

    $page = 1;

    if(isset($_GET["mode"]))
        $mode = $_GET["mode"];
    else 
        $mode = "";

    if(isset($_GET["num"]))
        $num = $_GET["num"];
    else
        $num = "";

    $content = htmlspecialchars($content);

    if($mode == "modify") {
        $sql = "update qna_29cm set category='$category', subject='$subject', content='$content' where num='$num'";
    } else {
        $sql = "insert into qna_29cm (id, category, subject, content, regist_day) ";
        $sql .= "values('$userid', '$category', '$subject', '$content', '$regist_day')";
    }

    mysqli_query($connect, $sql);
    mysqli_close($connect);

    echo "
        <script>
            location.href = 'qna_list.php?page=$page';
        </script>
    ";
?>