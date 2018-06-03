/**
 * 初始化页面loading加载
 */
window.onload=function(){
    if (document.readyState === 'complete') {
        document.body.style.overflow="auto";
        var loading = document.querySelector(".loading");
        loading.parentNode.removeChild(loading);
    }
};