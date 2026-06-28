<?php
    session_start();
    include "dbconn.php";

    $num = $_GET['num'];
    $page = $_GET['page'];

    $sql = "select * from qna_29cm where num=$num";
    $result = mysqli_query($connect,$sql);
    $row = mysqli_fetch_array($result);

    $item_num = $row['num'];
    $item_id = $row['id'];
    $item_category = $row['category'];
    $item_subject = str_replace(" ", "&nbsp;", $row['subject']);
    $item_content = $row['content'];

?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>1:1 문의</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/qna_form.css">
</head>
<body>

<?php include "header.php"; ?>

<section class="qna-form">
    <p class="sub-title">HELP CENTER</p>
    <h2>1:1 문의</h2>

    <div class="field">
        <label>문의유형</label>
        <div class="view-content"><?= $item_category ?></div>
    </div>

    <div class="field">
        <label>제목</label>
        <div class="view-content"><?= $item_subject ?></div>
    </div>

    <div class="field">
        <label>내용</label>
        <div class="view-content">
            <?= nl2br($item_content) ?>
        </div>
    </div>

     <?php $page = 1; ?>
        <div class="btn-group">
            <a href="qna_list.php?page=<?=$page?>" class="btn-cancel">목록</a>
            <a href="qna_modify.php?num=<?=$item_num?>&page=<?=$page?>" class="btn-submit">수정하기</a>

            <a href="qna_delete.php?num=<?$num?>$page=<?$page?>" class="btn-submit"
                onclick="return confirm('삭제하시겠습니까?');">
                삭제하기
            </a>
        </div>
</section>
</body>
</html>