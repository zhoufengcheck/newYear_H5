window.onload = function(){
	
	//获取元素
	var music = document.getElementById("music")
	var audio = document.getElementsByTagName("audio")[0]
	var page1 = document.getElementById("page1")
	var page2 = document.getElementById("page2")
	var page3 = document.getElementById("page3")


	//当音乐播放完，可以停止唱片
	audio.addEventListener('ended',function(event){
		music.setAttribute('class','')
	},false)

	//点击唱片，播放或者暂停音乐
	music.addEventListener('touchstart',function(event){
		if(audio.paused){
			audio.play()
			this.setAttribute('class','play')
			// this.style.animationPlayState = "running";//兼容性不好

		}else{

			audio.pause()
			this.setAttribute('class','')
			// this.style.animationPlayState = "paused";//兼容性不好
		}
	},false)

	//page1点击开启好运
	page1.addEventListener('touchstart',function(event){
		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'block'
		page3.style.top     = '100%'
		setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
		},5500)
	},false)

}
