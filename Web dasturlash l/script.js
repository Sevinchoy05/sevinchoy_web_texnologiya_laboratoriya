// =======================
// DOM tayyor bo‘lganda ishga tushadigan funksiya
// =======================
document.addEventListener("DOMContentLoaded", () => {

    // =======================
    // Modal uchun JS
    // =======================
    const recipeButtons = document.querySelectorAll(".js-recipe-btn");
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    const modalTitle = document.getElementById("modalTitle");
    const modalImg = document.getElementById("modalImg");
    const modalText = document.getElementById("modalText");

    recipeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const recipeBox = btn.closest(".retsept-box, .card");
            if (!recipeBox) return;

            const titleEl = recipeBox.querySelector("h2, .card-title");
            const imgEl = recipeBox.querySelector("img");
            const textEl = recipeBox.querySelector("p");

            modalTitle.innerText = titleEl ? titleEl.innerText : "";
            modalImg.src = imgEl ? imgEl.src : "";
            modalText.innerText = textEl ? textEl.innerText : "";

            modal.style.display = "flex";
            modal.setAttribute("aria-hidden", "false");
        });
    });

    // Modalni yopish
    if(modalClose){
        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        });
    }

    // Modal fon bosilganda yopish
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });

    // =======================
    // Favorit tugma
    // =======================
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.innerText === "♡") {
                btn.innerText = "♥";
                btn.style.color = "red";
            } else {
                btn.innerText = "♡";
                btn.style.color = "";
            }
        });
    });

    // =======================
    // “Ko‘proq yuklash” tugmasi (yangiliklar uchun)
    // =======================
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const newsList = document.getElementById("newsList");

    if (loadMoreBtn && newsList) {
        loadMoreBtn.addEventListener("click", () => {
            for (let i = 0; i < 4; i++) {
                const div = document.createElement("div");
                div.className = "news-item";
                div.innerHTML = `
                    <h4>Yangilik sarlavhasi</h4>
                    <p>Bu yerga yangi yangilikning qisqacha tavsifi yoziladi...</p>
                `;
                newsList.appendChild(div);
            }
        });
    }

    // =======================
    // O'zgaruvchilar va oddiy funksiyalar
    // =======================
    let retseptSoni = 10;
    const saytNomi = "Pishiriqlar dunyosi";

    // Oddiy funksiya: alert bilan salom berish
    window.salomBer = function(ism) {
        alert("Salom, " + ism + "!");
    };

    // Funksiyani tugma bosilganda chaqirish uchun
    window.retseptHisobla = function(qoshimcha) {
        let jami = retseptSoni + qoshimcha;
        alert("Jami retseptlar: " + jami);
    };

    // DOM orqali yangilik qo‘shish
    const addNewsBtn = document.getElementById("addNewsBtn");
    if(addNewsBtn && newsList){
        addNewsBtn.addEventListener("click", () => {
            const newDiv = document.createElement("div");
            newDiv.className = "news-item";
            newDiv.innerHTML = `
                <h4>Yangi yangilik sarlavhasi</h4>
                <p>Bu yerga yangi yangilikning qisqacha tavsifi yoziladi...</p>
            `;
            newsList.appendChild(newDiv);
        });
    }

});


// Formani submit qilish event
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // forma sahifani qayta yuklamasin
    alert("Formangiz yuborildi!");
});

// Subject select o‘zgarganda
const subjectSelect = document.getElementById("subjectSelect");
subjectSelect.addEventListener("change", function() {
    if(this.value !== "") {
        alert("Siz mavzuni tanladingiz: " + this.value);
    }
});

// Subscribe checkbox bosilganda
const subscribeCheckbox = document.getElementById("subscribe");
subscribeCheckbox.addEventListener("click", function() {
    if(this.checked) {
        alert("Siz yangiliklarga obuna bo‘ldingiz!");
    } else {
        alert("Obunani bekor qildingiz!");
    }
});
// =======================
// Retseptlarni qidirish
// =======================
function searchRecipes() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const recipes = document.querySelectorAll(".retsept-box h2");

    recipes.forEach(recipe => {
        if (recipe.innerText.toLowerCase().includes(filter)) {
            recipe.parentElement.style.display = "";
        } else {
            recipe.parentElement.style.display = "none";
        }
    });
}


    if(contactForm){
      contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("fname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === ""){
          alert("Iltimos, ismingizni kiriting!");
          return;
        }

        if(email === "" || !email.includes("@")){
          alert("Iltimos, to‘g‘ri email kiriting!");
          return;
        }

        if(message === ""){
          alert("Iltimos, xabaringizni kiriting!");
          return;
        }

        alert("Rahmat! Sizning xabaringiz qabul qilindi.");
        contactForm.reset();
      });
    }

    // =======================
    // Qidiruv (Retseptlar bo‘limi uchun)
    // =======================
    function searchRecipes() {
      const input = document.getElementById("searchInput");
      const filter = input.value.toLowerCase();
      const recipes = document.querySelectorAll(".retsept-box h2");

      recipes.forEach(recipe => {
        if(recipe.innerText.toLowerCase().includes(filter)){
          recipe.parentElement.style.display = "";
        } else {
          recipe.parentElement.style.display = "none";
        }
      });
    }