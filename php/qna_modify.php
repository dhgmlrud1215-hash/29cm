<?php
    session_start();

    include "dbconn.php";
    $num = $_GET['num'];

    $sql = "select * from qna_29cm where num=$num";
    $result = mysqli_query($connect,$sql);

    $row = mysqli_fetch_array($result);
    $item_num = $row['num'];
    $item_category = $row['category'];
    $item_subject = $row['subject'];
    $item_content = $row['content'];

    if($mode == "modify") {
        $sql = "update qna_29cm set category = '$category', subject='$subject', content = '$content' where num='$num'"; 
    } else {
        $sql = "insert into qna_29cm (id, category, subject,content , regist_day)";
        $sql .= "values('$userid', '$category', '$subject', '$content', '$regist_day')";
    }

?>



<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>1:1 문의 수정</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/qna_form.css">
</head>
<body>

<?php include "header.php"; ?>


<section class="qna-form">
    <p class="sub-title">HELP CENTER</p>
    <h2>1:1 문의 수정</h2>

    
<form method="post" action="qna_insert.php?mode=modify&num=<?=$num?>">
     <div class="field">
            <label>문의유형</label>
            <select name="category">
                <option value="">문의 유형을 선택하세요</option>
                <option value="주문/결제"<?php if($item_category == "주문/결제")echo "selected"; ?>>
                    주문/결제
                </option>

                <option value="배송" <?php if($item_category == "배송")echo "selected"; ?>>
                    배송
                </option>

                <option value="교환/반품" <?php if($item_category == "교환/반뭎")echo "selected"; ?>>
                    교환/반품
                </option>
                <option value="상품 문의" <?php if($item_category == "상품 문의")echo "selected"; ?>>
                    상품 문의
                </option>
                <option value="기타" <?php if($item_category == "기타")echo "selected"; ?>>
                    기타
                </option>
            </select>
        </div>

        <div class="field">
            <label>제목</label>
            <input type="text" name="subject" value="<?=$item_subject?>">
        </div>

        <div class="field">
            <label>내용</label>
            <textarea name="content"><?=$item_content?></textarea>
        </div>

     <?php $page = 1; ?>

    <div class="btn-group">
        <a href="qna_list.php?page=<?=$page?>" class="btn-cancel">목록</a>
        <button type="submit" class="btn-submit">수정완료</button>
    </div>
</section>

</form>

</body>
</html>