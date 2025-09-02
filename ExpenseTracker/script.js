let amount = document.querySelector(".amt");
let muted = document.querySelector(".muted");
let exportBtn = document.querySelector(".export-btn");
let monthlySpent = document.querySelector(".monthly-spent");
let budget = document.querySelector(".budget");
let searchInput = document.querySelector(".search-input");
let searchAll = document.querySelector(".search-all");
let searchIncome = document.querySelector(".search-income");
let searchExpense = document.querySelector(".search-expense");
let titleInput = document.querySelector(".enter-title");
let amountInput = document.querySelector(".enter-amount");
let typeInput = document.querySelector(".enter-type");
let categoryInput = document.querySelector(".enter-category");
let discardBtn = document.querySelector(".discard-btn");
let saveBtn = document.querySelector(".save");
let txList = document.querySelector(".tx-list");

function showEmptyMessage() {
  if (txList.children.length === 0) {
    txList.innerHTML = `<p class="empty-msg">No Transactions Made Yet</p>`;
  }
}

function getTodayDate() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date();
  const month = months[today.getMonth()];
  const day = today.getDate();
  return `${month} ${day}`;
}

showEmptyMessage();

saveBtn.addEventListener("click", () => {
  let title = titleInput.value;
  let amt = amountInput.value;
  let type = typeInput.value;
  let category = categoryInput.value;
  if (title !== "" && amt !== "" && type !== "" && category !== "") {
    let newTx = "";
    let now = new Date();
    if (type === "Expense") {
      newTx = `
            <div class="tx">
                <div class="tx-left">
                    <div class="avatar" style="background:linear-gradient(135deg,#ffd6a5,#ffd1dc);color:#2b0710">🍔</div>
                    <div class="tx-info">
                        <strong>${title}</strong>
                        <small>${getTodayDate()} — ${category}</small>
                    </div>
                </div>
            <div class="amount negative">- ₹ ${amt}</div>
            <button class="delete-btn">✖</button>
        </div>`;
    } else {
      newTx = `
            <div class="tx">
              <div class="tx-left">
                <div class="avatar" style="background:linear-gradient(135deg,#c7f9cc,#9ef3c0);color:#042607">💼</div>
                <div class="tx-info">
                  <strong>${title}</strong>
                  <small>${getTodayDate()} — ${category}</small>
                </div>
              </div>
              <div class="amount positive">+ ₹ ${amt}</div>
              <button class="delete-btn">✖</button>
            </div>`;
    }

    let emptyMsg = txList.querySelector(".empty-msg");
    if (emptyMsg) emptyMsg.remove();
    txList.insertAdjacentHTML("beforeend", newTx);

    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        showEmptyMessage();
      });
    });

    // ✅ Clear form
    titleInput.value = "";
    amountInput.value = "";
    typeInput.value = "";
    categoryInput.value = "";
  }
});

discardBtn.addEventListener("click", () => {
  titleInput.value = "";
  amountInput.value = "";
  typeInput.value = "";
  categoryInput.value = "";
});

searchInput.addEventListener("input", (e) => {
  let filter = e.target.value.toLowerCase();
  let txs = txList.querySelectorAll(".tx");

  txs.forEach((tx) => {
    let title = tx.querySelector(".tx-info strong").innerText.toLowerCase();
    if (title.includes(filter)) {
      tx.style.display = "flex"; // show
    } else {
      tx.style.display = "none"; // hide
    }
  });
});

searchIncome.addEventListener("click", () => {
  let txs = txList.querySelectorAll(".tx");
  txs.forEach((tx) => {
    let amount = tx.querySelector(".amount");
    if (amount.classList.contains("positive")) {
      tx.style.display = "flex"; // show
    } else {
      tx.style.display = "none"; // hide
    }
  });
});
searchExpense.addEventListener("click", () => {
  let txs = txList.querySelectorAll(".tx");
  txs.forEach((tx) => {
    let amount = tx.querySelector(".amount");
    if (amount.classList.contains("negative")) {
      tx.style.display = "flex"; // show
    } else {
      tx.style.display = "none"; // hide
    }
  });
});

searchAll.addEventListener("click", () => {
  let txs = txList.querySelectorAll(".tx");
  txs.forEach((tx) => {
    tx.style.display = "flex"; // show
  });
});

window.onload = function () {
  let now = new Date();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  let value = month * year * 100;
  // ✅ Format with commas in Indian numbering system
  amount.textContent = `₹ ${value.toLocaleString("en-IN")}`;
  muted.innerText = `As of ${getTodayDate()}, ${year}`;
};

exportBtn.addEventListener("click", () => {
  alert("Feature coming soon!");
});

monthlySpent.textContent = `₹ ${((7 + new Date().getMonth()) *1234).toLocaleString("en-IN")}`;
