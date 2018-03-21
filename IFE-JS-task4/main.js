// 获取输入内容并添加到模拟队列中
var queue = document.getElementById("queue");
var input = document.querySelector("input");
function addNode(direction){
	
	if(input.value==""){
		alert("请输入您想要插入的数字！");
	}else if(isNaN(input.value)){
		alert("只能输入数字！");
	}else{
		var li = document.createElement("li");
		li.innerHTML = input.value;
		if(direction==="left"){
			queue.insertBefore(li,queue.firstChild);
		}else if(direction==="right"){
			queue.appendChild(li);
		}
	}
}

function deleteNode(node,direction){
	if(queue.childNodes.length<=0){
		alert("没有可以删除的元素!");
		return false;
	}else{
		if(direction==="left"){
			alert("删除数字："+queue.firstChild.innerHTML);
			queue.removeChild(queue.firstChild);
		}else if(direction==="right"){
			alert("删除数字："+queue.lastChild.innerHTML);
			queue.removeChild(queue.lastChild);
		}else{
			alert("删除数字："+queue.removeChild(node).innerHTML);
		}
	}
}
var btnLeftIn = document.getElementById("btnLeftIn");
var btnRightIn = document.getElementById("btnRightIn");
var btnLeftOut = document.getElementById("btnLeftOut");
var btnRightOut = document.getElementById("btnRightOut");

btnLeftIn.onclick = function(){addNode("left");};
btnRightIn.onclick = function(){addNode("right");};
btnLeftOut.onclick = function(){deleteNode(-1,"left");};
btnRightOut.onclick = function(){deleteNode(-1,"right");};
queue.onclick = function() {deleteNode(event.target);};

//从左侧入
