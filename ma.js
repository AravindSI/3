function saveToLocalStorage(event){
	event.preventDefault();
	const chooseExpenseAmount=event.target.Chooseexpenseamount.value;
	const chooseDescription=event.target.choosedescription.value;
	const chooseAcategory=event.target.chooseacategory.value;
	//localStorage.setItem("chooseExpenseAmount",chooseExpenseAmount);
	//localStorage.setItem("chooseDescription",chooseDescription);
	//localStorage.setItem("chooseAcategory",chooseAcategory);
	const obj={
		chooseExpenseAmount,
		chooseDescription,
		chooseAcategory
	};
	localStorage.setItem(obj.chooseDescription,JSON.stringify(obj));
	showExpensesOnScreen(obj);
}
function showExpensesOnScreen(expense){
	const parentNode=document.getElementById("listOfExpenses");
	const childHTML = `<li id=${expense.chooseDescription}>${expense.chooseExpenseAmount}- ${expense.chooseDescription} - ${expense.chooseAcategory}
                                        <button onclick=deleteUser('${expense.chooseDescription}')> Delete User </button>
										<button onclick=editUserDetails('${expense.chooseDescription}','${expense.Chooseexpenseamount}','${expense.chooseAcategory}')>Edit User </button></li>`;
	parentNode.innerHTML=parentNode.innerHTML+childHTML;
}

function deleteUser(choose){
	console.log(chooseDescription)
	localStorage.removeItem(choose);
	removeUserFromScreen(choose);
}
function removeUserFromScreen(choose){
	const parentNode = document.getElementById('listOfExpenses');
	const childNodeToBeDeleted = document.getElementById(choose);

	parentNode.removeChild(childNodeToBeDeleted);
}
function editUserDetails(chooseDescription,chooseExpenseAmount,chooseAcategory){

	document.getElementById("choose description").value = chooseDescription;
	document.getElementById("Choose expense amount").value =chooseExpenseAmount;
	document.getElementById("choose a category").value =chooseAcategory;

	deleteUser(chooseDescription);
 }