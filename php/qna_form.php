<?php
session_start();

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

    <form name="qna_form" method="post" action="qna_insert.php">
        <div class="field">
            <label>문의유형</label>
            <select name="category">
                <option value="">문의 유형을 선택하세요</option>
                <option value="주문/결제">주문/결제</option>
                <option value="배송">배송</option>
                <option value="교환/반품">교환/반품</option>
                <option value="상품 문의">상품 문의</option>
                <option value="기타">기타</option>
            </select>
        </div>

        <div class="field">
            <label>제목</label>
            <input type="text" name="subject" placeholder="제목을 입력하세요">
        </div>

        <div class="field">
            <label>내용</label>
            <textarea name="content" placeholder="문의 내용을 입력하세요"></textarea>
        </div>

        <div class="notice-box">
            답변은 영업일 기준 1~3일 이내 등록될 수 있습니다.
        </div>

        <? $page = 1; ?>
        <div class="btn-group">
            <a href="qna_list.php?page=<?=$page?>" class="btn-cancel">목록</a>
            <button type="submit" class="btn-submit">문의 등록</button>
        </div>
    </form>
</section>


</body>
</html>