const galleryImages = [
    {
        src: "./img_detail/diffuser-main.webp",
        alt: "이구어퍼스트로피 머들디퓨저 200ml"
    },
    {
        src: "./img_detail/diffuser-sub1.webp",
        alt: "머들디퓨저 향과 컬러 구성"
    },
    {
        src: "./img_detail/diffuser-sub2.webp",
        alt: "머들디퓨저 공간 연출 이미지 1"
    },
    {
        src: "./img_detail/diffuser-sub3.webp",
        alt: "머들디퓨저 공간 연출 이미지 2"
    },
    {
        src: "./img_detail/diffuser-sub4.webp",
        alt: "머들디퓨저 공간 연출 이미지 3"
    }
];

const mainImage = document.querySelector("#mainProductImage");
const dots = [...document.querySelectorAll(".dot")];
const previousButton = document.querySelector(".gallery-arrow.prev");
const nextButton = document.querySelector(".gallery-arrow.next");
const wishButton = document.querySelector(".wish-button");
const typeItems = document.querySelectorAll(".type-item");
const selectedProductName = document.querySelector("#selectedProductName");
const productDescription = document.querySelector("#productDescription");
const descriptionToggle = document.querySelector(".description-toggle");
const descriptionToggleText = document.querySelector(".description-toggle-text");
let currentImage = 0;

function showImage(index) {
    currentImage = (index + galleryImages.length) % galleryImages.length;
    mainImage.src = galleryImages[currentImage].src;
    mainImage.alt = galleryImages[currentImage].alt;

    dots.forEach((dot, dotIndex) => {
        const selected = dotIndex === currentImage;
        dot.classList.toggle("active", selected);

        if (selected) {
            dot.setAttribute("aria-current", "true");
        } else {
            dot.removeAttribute("aria-current");
        }
    });
}

previousButton.addEventListener("click", () => {
    showImage(currentImage - 1);
});

nextButton.addEventListener("click", () => {
    showImage(currentImage + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showImage(index);
    });
});

wishButton.addEventListener("click", () => {
    const wished = wishButton.getAttribute("aria-pressed") === "true";

    wishButton.setAttribute("aria-pressed", String(!wished));
    wishButton.querySelector(".wish-icon").textContent = wished ? "♡" : "♥";
});

typeItems.forEach((item) => {
    item.addEventListener("click", () => {
        typeItems.forEach((button) => {
            button.classList.remove("active");
        });

        item.classList.add("active");
        selectedProductName.textContent = item.dataset.name;
    });
});

descriptionToggle.addEventListener("click", () => {
    const expanded = descriptionToggle.getAttribute("aria-expanded") === "true";

    if (expanded) {
        productDescription.classList.remove("expanded");
        productDescription.style.maxHeight = "";
        descriptionToggle.setAttribute("aria-expanded", "false");
        descriptionToggleText.textContent = "상품설명 더보기";
        productDescription.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        productDescription.classList.add("expanded");
        productDescription.style.maxHeight = `${productDescription.scrollHeight}px`;
        descriptionToggle.setAttribute("aria-expanded", "true");
        descriptionToggleText.textContent = "상품설명 접기";
    }
});

window.addEventListener("resize", () => {
    if (descriptionToggle.getAttribute("aria-expanded") === "true") {
        productDescription.style.maxHeight = `${productDescription.scrollHeight}px`;
    }
});

const floatingShareButton = document.querySelector(".floating-share");
const scrollTopButton = document.querySelector(".scroll-top-button");
const scrollBottomButton = document.querySelector(".scroll-bottom-button");

floatingShareButton.addEventListener("click", async () => {
    const shareData = {
        title: document.title,
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (error) {
            if (error.name !== "AbortError") {
                console.error("상품 공유에 실패했습니다.", error);
            }
        }
        return;
    }

    try {
        await navigator.clipboard.writeText(window.location.href);
        floatingShareButton.setAttribute("aria-label", "상품 링크가 복사되었습니다");
        setTimeout(() => {
            floatingShareButton.setAttribute("aria-label", "상품 공유하기");
        }, 1500);
    } catch (error) {
        console.error("상품 링크 복사에 실패했습니다.", error);
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

scrollBottomButton.addEventListener("click", () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
});
