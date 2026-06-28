<?php
session_start();
include "dbconn.php";

$sql = "select * from qna_29cm order by num desc";
$result = mysqli_query($connect, $sql)
?>
<!doctype html>
<head>
    <meta charset="utf-8">
    <title>1:1 문의</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/qna_list.css">
    
</head>

<body>
   <?php include "header.php"; ?>

    <section class="qna-list">
        <p class="sub-title">HELP CENTER</p>

        <h2>1:1 문의</h2>
        
        <table class="qna-table">
                <tr>
                    <th width="10%">번호</th>
                    <th width="15%">문의유형</th>
                    <th width="45%">제목</th>
                    <th width="15%">작성자</th>
                    <th width="15%">작성</th>
                </tr>

    <?php
        while($row = mysqli_fetch_array($result)) {
            $item_num = $row['num'];
            $item_id = $row['id'];
            $item_category = $row['category'];
            $item_subject = str_replace(" ", "&nbsp;", $row['subject']);
            $item_date = substr($row['regist_day'], 0 , 10);
    ?>
    <tr>
        <td><?=$item_num ?></td>
        <td><?=$item_category ?></td>
        <td class="subject">
            <a href="qna_view.php?num=<?=$item_num ?>">
                <?= $item_subject ?>
            </a>
        </td>
        <td><?= $item_id ?></td>
        <td><?=$item_date ?></td>
    </tr>
    <?php
        }
    ?>

      </table>

      <div class="list-bottom">
        <a href="qna_form.php" class="btn-write">문의 작성</a>
      </div>
    </section>

    <?php mysqli_close($connect); ?>
</body>
</html>