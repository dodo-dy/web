const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("admin-id");
const passwordInput = document.getElementById("admin-password");
<<<<<<< HEAD
const rememberIdCheckbox = document.getElementById("remember-id");
=======
>>>>>>> 70a5a3afba62000a843015dbe9486315bbf1f635
const feedbackEl = document.getElementById("login-feedback");

const Adminid = "admin";
const Passwd = "123456";
<<<<<<< HEAD
const rememberedIdKey = "rememberedAdminId";

const rememberedId = localStorage.getItem(rememberedIdKey);
if (rememberedId) {
  idInput.value = rememberedId;
  rememberIdCheckbox.checked = true;
}
=======
>>>>>>> 70a5a3afba62000a843015dbe9486315bbf1f635

const idFieldWrapper = idInput.closest(".input-field");
const passwordFieldWrapper = passwordInput.closest(".input-field");

function clearErrors() {
  idFieldWrapper.classList.remove("is-error");
  passwordFieldWrapper.classList.remove("is-error");
}

function showFeedback(message, type) {
  feedbackEl.textContent = message;
  feedbackEl.classList.remove("is-error", "is-success");
  if (type) {
    feedbackEl.classList.add(type === "error" ? "is-error" : "is-success");
  }
  feedbackEl.hidden = false;
}

function hideFeedback() {
  feedbackEl.hidden = true;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("is-error", "is-success");
}

idInput.addEventListener("input", () => {
  idFieldWrapper.classList.remove("is-error");
  if (!feedbackEl.hidden) hideFeedback();
<<<<<<< HEAD

  if (rememberIdCheckbox.checked) {
    const username = idInput.value.trim();
    if (username) {
      localStorage.setItem(rememberedIdKey, username);
    } else {
      localStorage.removeItem(rememberedIdKey);
    }
  }
});

rememberIdCheckbox.addEventListener("change", () => {
  const username = idInput.value.trim();
  if (rememberIdCheckbox.checked && username) {
    localStorage.setItem(rememberedIdKey, username);
  } else {
    localStorage.removeItem(rememberedIdKey);
  }
=======
>>>>>>> 70a5a3afba62000a843015dbe9486315bbf1f635
});

passwordInput.addEventListener("input", () => {
  passwordFieldWrapper.classList.remove("is-error");
  if (!feedbackEl.hidden) hideFeedback();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const username = idInput.value.trim();
  const password = passwordInput.value;

  if (!username) {
    idFieldWrapper.classList.add("is-error");
    showFeedback("아이디를 입력해 주세요.", "error");
    idInput.focus();
    return;
  }

  if (!password) {
    passwordFieldWrapper.classList.add("is-error");
    showFeedback("비밀번호를 입력해 주세요.", "error");
    passwordInput.focus();
    return;
  }

  hideFeedback();

  if (username === Adminid && password === Passwd) {
    window.location.href = "bbs.html";
    return;
  }

  idInput.value = "";
  passwordInput.value = "";
  idFieldWrapper.classList.add("is-error");
  passwordFieldWrapper.classList.add("is-error");
  showFeedback("아이디 또는 비밀번호가 올바르지 않습니다. 다시 입력해 주세요.", "error");
  idInput.focus();
});
