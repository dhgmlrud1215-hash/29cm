document.addEventListener("DOMContentLoaded", function () {
  const mobileInput = document.querySelector("#mobile-search-input");
  const mobileList = document.querySelector(".mobile-suggest-list");

  if (!mobileInput || !mobileList) return;


const keywords = [
  { word: "가방", chosung: "ㄱㅂ" },
  { word: "글로니", chosung: "ㄱㄹㄴ" },
  { word: "가디건", chosung: "ㄱㄷㄱ" },
  { word: "귀걸이", chosung: "ㄱㄱㅇ" },
  { word: "여름 가디건", chosung: "ㅇㄹㄱㄷㄱ" },
  { word: "그립톡", chosung: "ㄱㄹㅌ" },
  { word: "맥세이프 그립톡", chosung: "ㅁㅅㅇㅍㄱㄹㅌ" },
  { word: "구두", chosung: "ㄱㄷ" },
  { word: "그릇", chosung: "ㄱㄹ" },
  { word: "거울", chosung: "ㄱㅇ" },

  { word: "나시", chosung: "ㄴㅅ" },
  { word: "나이키", chosung: "ㄴㅇㅋ" },
  { word: "뉴발란스", chosung: "ㄴㅂㄹㅅ" },
  { word: "누스", chosung: "ㄴㅅ" },
  { word: "노스페이스", chosung: "ㄴㅅㅍㅇㅅ" },
  { word: "낫띵리튼", chosung: "ㄴㄸㄹㅌ" },
  { word: "나일론백", chosung: "ㄴㅇㄹㅂ" },
  { word: "니트", chosung: "ㄴㅌ" },
  { word: "냉감이불", chosung: "ㄴㄱㅇㅂ" },
  { word: "노트북 파우치", chosung: "ㄴㅌㅂㅍㅇㅊ" },

  { word: "던스트", chosung: "ㄷㅅㅌ" },
  { word: "더바넷", chosung: "ㄷㅂㄴ" },
  { word: "더릴", chosung: "ㄷㄹ" },
  { word: "디스이즈네버댓", chosung: "ㄷㅅㅇㅈㄴㅂㄷ" },
  { word: "드파운드", chosung: "ㄷㅍㅇㄷ" },
  { word: "더블유피씨", chosung: "ㄷㅂㅇㅍㅆ" },
  { word: "도시락", chosung: "ㄷㅅㄹ" },
  { word: "다이닛", chosung: "ㄷㅇㄴ" },
  { word: "닥터마틴", chosung: "ㄷㅌㅁㅌ" },
  { word: "드래곤 디퓨전", chosung: "ㄷㄹㄱㄷㅍㅈ" },

  { word: "레인부츠", chosung: "ㄹㅇㅂㅊ" },
  { word: "루에브르", chosung: "ㄹㅇㅂㄹ" },
  { word: "레이브", chosung: "ㄹㅇㅂ" },
  { word: "러그", chosung: "ㄹㄱ" },
  { word: "론론", chosung: "ㄹㄹ" },
  { word: "로우클래식", chosung: "ㄹㅇㅋㄹㅅ" },
  { word: "르바", chosung: "ㄹㅂ" },
  { word: "래쉬가드", chosung: "ㄹㅅㄱㄷ" },
  { word: "롱스커트", chosung: "ㄹㅅㅋㅌ" },
  { word: "링서울", chosung: "ㄹㅅㅇ" },

  { word: "모자", chosung: "ㅁㅈ" },
  { word: "몽돌", chosung: "ㅁㄷ" },
  { word: "목걸이", chosung: "ㅁㄱㅇ" },
  { word: "뮬", chosung: "ㅁ" },
  { word: "무배당발", chosung: "ㅁㅂㄷㅂ" },
  { word: "메리제인", chosung: "ㅁㄹㅈㅇ" },
  { word: "문달", chosung: "ㅁㄷ" },
  { word: "미니백", chosung: "ㅁㄴㅂ" },
  { word: "미디스커트", chosung: "ㅁㄷㅅㅋㅌ" },
  { word: "무브웜", chosung: "ㅁㅂㅇ" },

  { word: "블라우스", chosung: "ㅂㄹㅇㅅ" },
  { word: "벤투스", chosung: "ㅂㅌㅅ" },
  { word: "반팔", chosung: "ㅂㅍ" },
  { word: "백팩", chosung: "ㅂㅍ" },
  { word: "비키니", chosung: "ㅂㅋㄴ" },
  { word: "반팔티", chosung: "ㅂㅍㅌ" },
  { word: "비터셀즈", chosung: "ㅂㅌㅅㅈ" },
  { word: "반바지", chosung: "ㅂㅂㅈ" },
  { word: "부디무드라", chosung: "ㅂㄷㅁㄷㄹ" },
  { word: "반지", chosung: "ㅂㅈ" }
];

const clearBtn = document.querySelector(".mobile-clear-btn");

 mobileInput.addEventListener("input", function () {
    setTimeout(function () {
      const value = mobileInput.value.trim();
      mobileList.innerHTML = "";

      if (value === "") {
        mobileList.style.display = "none";
        return;
      }

      if (value === "") {
        mobileList.style.display = "none";
        clearBtn.classList.remove("show");
        return;
        }

    clearBtn.classList.add("show");

      const result = keywords.filter(function (item) {
        return item.word.includes(value) || item.chosung.startsWith(value);
      });

      result.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item.word;

        li.addEventListener("click", function () {
          mobileInput.value = item.word;
          mobileList.style.display = "none";
        });

        mobileList.appendChild(li);
      });

      mobileList.style.display = result.length ? "block" : "none";
    }, 0);
  });

  clearBtn.addEventListener("click", function () {
  mobileInput.value = "";
  mobileList.style.display = "none";
  clearBtn.classList.remove("show");
  mobileInput.focus();
});
});