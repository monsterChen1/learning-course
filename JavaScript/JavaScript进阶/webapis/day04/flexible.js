const setFontSize = () => {
    const html = document.documentElement;

    const clientWidth = html.clientWidth;

    html.style.fontSize = clientWidth / 10 + 'px';
}
// 设置初始字体大小
document.addEventListener('DOMContentLoaded', () => {
    setFontSize();
});
// 设置窗口大小变化时的字体大小
window.addEventListener('resize', setFontSize);