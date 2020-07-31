window.onload = () => {

    // 取得所有元素
    var elements = document.getElementsByTagName("*");

    for (let index = 0; index < elements.length; index++) {
        const e = elements[index];
        
        // 元素.點擊事件
        e.onclick = () => {
            var target = e.getAttribute("data-gte-target");  // 目標屬性
            var offset = e.getAttribute("data-gte-offset");  // 位移屬性
    
            if (target) {

                var element = document.getElementById(target);      // 目標元素
        
                // 視窗.捲動至({ 上方，行為 })
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: "smooth"
                })
            }
        }
    }
}