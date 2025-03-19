function closeForm() {
  // 1) 用表單 ID 開啟問卷
  var form = FormApp.openById("你的Form ID");

  // 2) 關閉「接受回應」功能
  form.setAcceptingResponses(false);

  // （選擇性）可以在此處理其他邏輯，例如寄出通知信件等等
  // MailApp.sendEmail("你的信箱", "問卷已關閉", "問卷已於指定時間關閉回覆。");
}

function createTimeTrigger() {
  // 注意：Date 的月份是 0-based，所以「3月」要寫成 2
  // 這裡設定的時間是 2025/3/31 23:59:59，你也可以改成自己要關閉的時間
  var triggerDate = new Date(2025, 2, 31, 23, 59, 59);

  // 建立一個定時觸發器，在指定時間執行 closeForm()
  ScriptApp.newTrigger("closeForm")
    .timeBased()
    .at(triggerDate)
    .create();
}
