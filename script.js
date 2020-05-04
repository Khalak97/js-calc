function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}
function clean() {
  document.form.textview.value = "";
}
function back() {
  let num = document.form.textview.value;
  document.form.textview.value = num.substring(0, num.length - 1);
}
function equal() {
  let num = document.form.textview.value;
  if(num) {
    document.form.textview.value = eval(num)
  }
}